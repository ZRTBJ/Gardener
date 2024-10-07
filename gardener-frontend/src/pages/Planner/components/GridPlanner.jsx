import { Grayscale } from "konva/lib/filters/Grayscale";
import React, { forwardRef, useEffect, useState } from "react";
import { Stage, Layer, Line, Text, Circle, Image } from "react-konva";
import useImage from "use-image";

const URLImage = ({ ...props }) => {
  const [img] = useImage(props.src);
  return (
    <Image
      image={img}
      x={props.x ? props.x : 100}
      y={props.y ? props.y : 100}
      draggable
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const GridPlanner = ({ width, height, gridSize = 50, shapes = [] }) => {
  const [stageScale, setStageScale] = useState(1);
  const [rulerStep, setRulerStep] = useState(4);
  const [lineStep, setLineStep] = useState(0.5);

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
    console.log(newScale);
    if (newScale < 2) {
      setRulerStep(2 * parseInt(1 / newScale + 0.5));
      if (newScale < 1) setLineStep(0.5);
      else setLineStep(0.25);
    } else {
      setRulerStep(1);
      setLineStep(1.0 / 6);
    }
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
          y={30 * gridSize + 35 / stageScale}
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
  return (
    <Stage
      className="bg-[#ddd]"
      width={width}
      height={height}
      onWheel={handleWheel}
      scaleX={stageScale}
      scaleY={stageScale}
      x={10}
      y={10}
    >
      <Layer>{drawRulerLines()}</Layer>
      <Layer>{drawGridLines()}</Layer>
      <Layer>
        {/* <URLImage src="/assets/beet.svg" x={150} /> */}
        {shapes.map((shape, index) => {
          console.log(shape);
          return (
            <URLImage
              key={`shape-${index}`}
              src={shape.src}
              x={shape.x}
              y={shape.y}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default GridPlanner;
