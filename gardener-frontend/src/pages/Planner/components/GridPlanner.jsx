import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Stage,
  Layer,
  Line,
  Text,
  Image,
  Rect,
  Transformer,
  Group,
} from "react-konva";
import useImage from "use-image";

const URLImage = ({ isSelected, ...props }) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const [patternScale, setPatternScale] = useState([0.2, 0.2]);

  const [img] = useImage(props.src);

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  useEffect(() => {
    if (img) {
      console.log(props.width, props.height, img.width, img.height);
      // patternScale[0] = 1 / (props.width / props.imageWidth);
      // patternScale[1] = 1 / (props.height / props.imageHeight);
      console.log(img.width, img.height);
      setPatternScale([30 / img.width, 30 / img.height]);
      // setPatternScale([0.2, 0.2]);
    }
  }, [img]);

  return (
    <React.Fragment>
      <Image
        // image={img}
        key={props.id}
        fillPatternRepeat="repeat"
        fillPatternImage={img}
        fillPatternScaleX={patternScale[0]}
        fillPatternScaleY={patternScale[1]}
        // fillPatternScale={patternScale}
        // key={`im-${props.src}`}
        x={props.x}
        y={props.y}
        draggable
        // I will use offset to set origin to the center of the image
        // offsetX={img ? img.width / 2 : 0}
        // offsetY={img ? img.height / 2 : 0}
        offsetX={props.width / 2}
        offsetY={props.height / 2}
        // width={props.width}
        // height={props.height}
        width={props.width}
        height={props.height}
        onClick={props.onSelect}
        onTap={props.onSelect}
        ref={shapeRef}
        onDragEnd={(e) => {
          // props.onChange({
          //   id: props.id,
          //   src: props.src,
          //   width: props.width,
          //   height: props.height,
          //   imageWidth: props.imageWidth,
          //   imageHeight: props.imageHeight,
          //   x: e.target.x(),
          //   y: e.target.y(),
          // });
        }}
        onTransform={(e) => {
          e.evt.preventDefault();
          return;
        }}
        onTransformEnd={(e) => {
          e.evt.preventDefault();
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          // console.log("Change shape request");
          // let newWidth = node.width() * scaleX;
          // let newHeight = node.height() * scaleY;
          // let widthCount = newWidth / (patternScale[0] * img.width);
          // if (newWidth < patternScale[0] * img.width * (widthCount + 1)) {
          //   return;
          // }
          // let heightCount = newHeight / (patternScale[1] * img.height);
          // if (newHeight < patternScale[1] * img.height * (heightCount + 1)) {
          //   return;
          // }

          props.onChange({
            id: props.id,
            src: props.src,
            x: node.x(),
            y: node.y(),
            imageWidth: props.imageWidth,
            imageHeight: props.imageHeight,
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY, 5),
          });
          // const newScale = [
          //   1 / (props.width / img.width),
          //   1 / (props.height / img.height),
          // ];
          // setPatternScale(newScale);
        }}
      />
      {isSelected && (
        <Transformer
          key={`tf-${props.id}`}
          ref={trRef}
          // flipEnabled={false}
          resizeEnabled={true}
          enabledAnchors={[
            "top-center",
            "middle-left",
            "middle-right",
            "bottom-center",
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        ></Transformer>
      )}
    </React.Fragment>
  );
};

const Material = ({
  isSelected,
  stageScale,
  handleSelect,
  handleChange,
  pushHistory,
  ...props
}) => {
  const shape = {
    id: props.id,
    src: props.src,
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
    imgWidth: props.imgWidth,
    imgHeight: props.imgHeight,
  };

  const [img] = useImage(shape.src);
  const shapeRef = useRef();
  const trRef = useRef();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const drawImage = () => {
    const wCount = Math.max(1, Math.floor(shape.width / shape.imgWidth));
    const hCount = Math.max(1, Math.floor(shape.height / shape.imgHeight));

    const imageList = [];
    for (let i = 0; i < wCount; i++) {
      for (let j = 0; j < hCount; j++) {
        imageList.push(
          <Image
            key={`img-${i}-${j}`}
            width={shape.imgWidth}
            height={shape.imgHeight}
            image={img}
            x={i * shape.imgWidth}
            y={j * shape.imgHeight}
          ></Image>
        );
      }
    }
    return imageList;
  };
  return (
    <React.Fragment>
      <Group
        key={`gr-${shape.id}`}
        x={shape.x}
        y={shape.y}
        draggable
        // offsetX={30 / stageScale}
        // offsetY={30 / stageScale}
        width={shape.width}
        height={shape.height}
        rotation={rotation}
      >
        {/* <Image
          key={`img-${shape.id}`}
          image={img}
          width={shape.imgWidth}
          height={shape.imgHeight}
        ></Image> */}
        {drawImage()}
        {/* {drawImage} */}
      </Group>
      <Rect
        key={`rt-${shape.id}`}
        fill="gray"
        opacity={0.1}
        ref={shapeRef}
        x={shape.x}
        y={shape.y}
        draggable
        // offsetX={30 / stageScale}
        // offsetY={30 / stageScale}
        width={shape.width}
        height={shape.height}
        onClick={handleSelect}
        onTap={handleSelect}
        onDragMove={(e) => {
          e.evt.preventDefault();
          handleChange(
            {
              ...shape,
              x: e.target.x(),
              y: e.target.y(),
            },
            false
          );
        }}
        onDragEnd={(e) => {
          e.evt.preventDefault();
          handleChange(
            {
              ...shape,
              x: e.target.x(),
              y: e.target.y(),
            },
            true
          );
        }}
        onTransform={(e) => {
          e.evt.preventDefault();
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          setRotation(node.rotation());

          handleChange(
            {
              ...shape,
              x: node.x(),
              y: node.y(),
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(5, node.height() * scaleY),
            },
            false
          );
        }}
        onTransformEnd={(e) => {
          e.evt.preventDefault();
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          const wideWidth = node.width() * scaleX;
          const wideHeight = node.height() * scaleY;

          setRotation(node.rotation());

          console.log(wideWidth, wideHeight);

          const actualWidth =
            shape.imgWidth *
              Math.max(Math.floor(wideWidth / shape.imgWidth), 1) +
            3 / stageScale;
          const actualHeight =
            shape.imgHeight *
              Math.max(Math.floor(wideHeight / shape.imgHeight), 1) +
            3 / stageScale;

          handleChange(
            {
              ...shape,
              x: node.x(),
              y: node.y(),
              // width: Math.max(5, node.width() * scaleX),
              // height: Math.max(5, node.height() * scaleY),
              width: Math.max(5, actualWidth),
              height: Math.max(5, actualHeight),
            },
            true
          );
        }}
      ></Rect>

      {isSelected && (
        <Transformer
          ref={trRef}
          key={`trf-${shape.id}`}
          padding={5}
          rotateAnchorCursor="grab"
          anchorCornerRadius={5}
          rotateAnchorOffset={50}
          resizeEnabled={true}
          flipEnabled={false}
          enabledAnchors={[
            "top-center",
            "middle-left",
            "middle-right",
            "bottom-center",
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
              return oldBox;
            }
            return newBox;
          }}
        ></Transformer>
      )}
    </React.Fragment>
  );
};

let x = 0,
  y = 0,
  boardX = 30,
  boardY = 30;

const GridPlanner = forwardRef(function (
  {
    width,
    height,
    gridSize = 50,
    shapes = [],
    setShapes,
    pushHistory,
    stageScale,
    setStageScale,
    selectedId,
    selectShape,
  },
  ref
) {
  const [rulerStep, setRulerStep] = useState(4);
  const [lineStep, setLineStep] = useState(0.5);
  // const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  // useImperativeHandle(ref, () => ({
  //   setPointersPositions: ref.current.setPointersPositions,
  //   getPointerPosition: ref.current.getPointerPosition,
  //   getStageScale: () => stageScale,
  //   selectShape: (id) => {
  //     selectShape(id);
  //   },
  // }));

  useEffect(() => {
    if (stageScale < 2) {
      setRulerStep(2 * parseInt(1 / stageScale + 0.5));
      if (stageScale < 1) setLineStep(0.5);
      else setLineStep(0.25);
    } else {
      setRulerStep(1);
      setLineStep(1.0 / 6);
    }
  }, [stageScale]);

  const handleWheel = (event) => {
    // mouse-point oriented.

    // event.evt.preventDefault();

    // const scaleBy = 1.02;
    // const stage = event.target.getStage();
    // const oldScale = stage.scaleX();
    // const mousePointTo = {,
    //   x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
    //   y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    // };

    // const newScale =
    //   event.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    // const newPosition = {
    //   x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
    //   y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    // };
    // setStageScale(newScale);
    // setStagePosition(newPosition);

    // left-corder oriented
    event.evt.preventDefault();

    const scaleBy = 1.05;
    const oldScale = stageScale;
    const newScale =
      event.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
    // setStageScale(newScale);
    if (newScale < 6 && newScale > 0.2) setStageScale(newScale);
  };

  const drawRulerLines = () => {
    const lines = [];
    // Draw vertical lines and horizontal rulers;
    for (let i = 0; i <= gridSize; i++) {
      const x = 30 * i;

      if (rulerStep === 1 || i % rulerStep === 0) {
        lines.push(
          <Line
            key={`v-${i}`}
            points={[
              x + 30 / stageScale,
              0,
              x + 30 / stageScale,
              30 * gridSize + 30 / stageScale,
            ]}
            stroke="#FFF"
            strokeWidth={1 / stageScale}
          ></Line>
        );
        // Draw horizontal rulers;
        lines.push(
          <Text
            key={`hr-${i}`}
            x={x + 32 / stageScale}
            y={15 / stageScale}
            text={String(i)}
            fontSize={12 / stageScale}
            fill="black"
          ></Text>
        );
      }
    }
    // draw Last number and line
    if (gridSize % rulerStep !== 0) {
      lines.push(
        <Line
          key={`v-${gridSize}`}
          points={[
            gridSize * 30 + 30 / stageScale,
            0,
            gridSize * 30 + 30 / stageScale,
            30 * gridSize + 30 / stageScale,
          ]}
          stroke="#FFF"
          strokeWidth={1 / stageScale}
        ></Line>
      );
      lines.push(
        <Text
          key={`hr-${gridSize}`}
          x={30 * gridSize + 32 / stageScale}
          y={15 / stageScale}
          text={String(gridSize)}
          fontSize={12 / stageScale}
          fill="black"
        ></Text>
      );
    }

    // Draw horizontal lines and vertical rulers;
    for (let j = 0; j <= gridSize; j++) {
      const y = 30 * j;
      if (rulerStep === 1 || j % rulerStep === 0) {
        lines.push(
          <Line
            key={`h-${j}`}
            points={[
              0,
              y + 30 / stageScale,
              30 * gridSize + 30 / stageScale,
              y + 30 / stageScale,
            ]}
            stroke="#FFF"
            strokeWidth={1 / stageScale}
          ></Line>
        );
        // Draw vertical rulers
        lines.push(
          <Text
            key={`vr-${j}`}
            x={0}
            y={y + 35 / stageScale}
            text={String(j)}
            fontSize={12 / stageScale}
            width={25 / stageScale}
            fill="black"
            align="right"
          ></Text>
        );
      }
    }
    // draw Last number and line
    if (gridSize % rulerStep !== 0) {
      lines.push(
        <Line
          key={`h-${gridSize}`}
          points={[
            0,
            gridSize * 30 + 30 / stageScale,
            30 * gridSize + 30 / stageScale,
            gridSize * 30 + 30 / stageScale,
          ]}
          stroke="#FFF"
          strokeWidth={1 / stageScale}
        ></Line>
      );
      lines.push(
        <Text
          key={`vr-${gridSize}`}
          x={0}
          y={30 * gridSize + 32 / stageScale}
          text={String(gridSize)}
          fontSize={12 / stageScale}
          width={25 / stageScale}
          fill="black"
          align="right"
        ></Text>
      );
    }
    return lines;
  };

  const drawGridLines = () => {
    const lines = [];
    for (let i = 0; i < gridSize; i += lineStep) {
      lines.push(
        <Line
          key={`lh-${i}`}
          points={[
            30 / stageScale,
            i * 30 + 30 / stageScale,
            30 * gridSize + 30 / stageScale,
            i * 30 + 30 / stageScale,
          ]}
          stroke="#FFF"
          strokeWidth={1 / stageScale}
        ></Line>
      );
      lines.push(
        <Line
          key={`lv-${i}`}
          points={[
            i * 30 + 30 / stageScale,
            30 / stageScale,
            i * 30 + 30 / stageScale,
            30 * gridSize + 30 / stageScale,
          ]}
          stroke="#FFF"
          strokeWidth={1 / stageScale}
        ></Line>
      );
    }
    return lines;
  };

  const drawMaterials = () => {
    const materialList = [];
    for (let i = 0; i < shapes.length; i++) {
      materialList.push(
        <Material
          {...shapes[i]}
          stageScale
          pushHistory={pushHistory}
          isSelected={shapes[i].id === selectedId}
          handleSelect={() => {
            selectShape(shapes[i].id);
          }}
          handleChange={(newAttrs, isPush = false) => {
            let newShapeList = shapes.map((shape) => {
              return shape.id === newAttrs.id ? newAttrs : shape;
            });
            if (isPush) {
              pushHistory(newShapeList);
            }
            setShapes(newShapeList);
          }}
        ></Material>
      );
    }
    return materialList;
  };

  return (
    <Stage
      className="bg-[#DDD]"
      width={width}
      height={height}
      onWheel={handleWheel}
      scaleX={stageScale}
      scaleY={stageScale}
      // x={stagePosition.x}
      // y={stagePosition.y}
      ref={ref}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {drawRulerLines()}
        {drawGridLines()}
      </Layer>
      <Layer
        x={boardX / stageScale}
        y={boardY / stageScale}
        // draggable
        // onDragStart={(e) => {
        //   x = e.target.x();
        //   y = e.target.y();
        // }}
        // onDragMove={(e) => {
        //   e.evt.preventDefault();
        //   const newPos = { x: boardX, y: boardY };
        //   let offsetX = e.target.x() - x;
        //   let offsetY = e.target.y() - y;
        //   console.log("Dragging Layer", offsetX, offsetY);
        //   newPos.x += offsetX;
        //   newPos.y += offsetY;
        //   if (newPos.x > 30) newPos.x = 30;
        //   if (newPos.y > 30) newPos.y = 30;
        //   x = e.target.x();
        //   y = e.target.y();

        //   console.log("setting", newPos);
        //   e.target.setPosition(newPos);
        // }}
      >
        <Rect
          fillEnabled
          opacity={0.3}
          fill={"#804000"}
          width={30 * gridSize}
          height={30 * gridSize}
        ></Rect>
        {/* <URLImage src="/assets/beet.svg" x={150} /> */}
        {/* {shapes.map((shape, index) => {
          return (
            <URLImage
              id={index}
              src={shape.src}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              imageWidth={shape.imageWidth}
              imageHeight={shape.imageHeight}
              isSelected={shape.id === selectedId}
              onSelect={() => {
                selectShape(shape.id);
              }}
              onChange={(newAttrs) => {
                console.log("Change Shape", newAttrs);

                setShapes(
                  shapes.map((shape) =>
                    shape.id === newAttrs.id ? newAttrs : shape
                  )
                );
              }}
            />
          );
        })} */}
        {/* {shapes.map((shape, index) => (
          <Material
            {...shape}
            stageScale
            isSelected={shape.id === selectedId}
            handleSelect={() => {
              selectShape(shape.id);
            }}
            handleChange={(newAttrs) => {
              setShapes(
                shapes.map((shape) => {
                  return shape.id === newAttrs.id ? newAttrs : shape;
                })
              );
            }}
          ></Material>
        ))} */}
        {drawMaterials()}
      </Layer>
    </Stage>
  );
});

export default GridPlanner;
