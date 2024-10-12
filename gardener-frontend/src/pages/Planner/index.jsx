import React, { useRef, useState, forwardRef } from "react";
import styles from "../../style";
import GridPlanner from "./components/GridPlanner";
import { materialData, getImageSrc } from "../../data/material_data";

let historyShape = [[]];
let historyStep = 0;
let lastedIndex = 0;

export default function Planner() {
  const stageWidth = window.innerWidth - 390;
  const stageHeight = window.innerHeight - 180;

  // const dragUrl = useRef();
  const stageRef = useRef(null);
  const [shapes, setShapes] = useState([]);
  const [material, setMaterial] = useState("vegetable");
  const [stageScale, setStageScale] = useState(1);
  const [selectedId, selectShape] = useState(-1);
  const [disableUndo, setDisableUndo] = useState(false);
  const [disableRedo, setDisableRedo] = useState(false);
  const [disableZoomIn, setDisableZoomIn] = useState(false);
  const [disableZoomOut, setDisableZoomOUt] = useState(false);

  const handleUndo = () => {
    if (historyStep === 0) {
      setDisableUndo(true);
      return;
    }
    setDisableRedo(false);

    console.log("Undo", historyStep);
    historyStep -= 1;
    const previous = historyShape[historyStep];
    setShapes(previous);
  };

  const handleRedo = () => {
    if (historyStep === historyShape.length - 1) {
      setDisableRedo(true);
      return;
    }
    setDisableUndo(false);

    console.log("Redo", historyStep);
    historyStep += 1;
    const next = historyShape[historyStep];
    setShapes(next);
  };

  const handleZoomIn = () => {
    setStageScale(stageScale * 1.2);
  };

  const handleZoomOut = () => {
    setStageScale(stageScale / 1.2);
  };

  return (
    <div className="flex flex-col mx-auto p-4 space-y-2">
      <div className="flex items-center justify-between p-4 border-b-2">
        <div>
          <img
            src="/logo.svg"
            alt="Gargen Savvy"
            className="w-[120] h-[56]"
          ></img>
        </div>
        <div>
          <button
            type="button"
            className="bg-[#0A54362E] mx-2 text-[#0A5436] px-3 py-2 rounded-md font-semibold shadow-sm hover:bg-gray-50"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-[#0A5436] mx-2 text-white px-3 py-2 rounded-md font-semibold shadow-sm hover:bg-indigo-500"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex flex-row space-x-1 justify-between">
        <div className="flex flex-row">
          <div className="text-white flex flex-col">
            <div className="border-2 rounded-md shadow-xl text-center">
              <button
                type="button"
                className="bg-white m-4"
                onClick={handleUndo}
              >
                <img src="/undo.svg"></img>
              </button>
              <button
                type="button"
                className="bg-white m-4"
                onClick={handleRedo}
              >
                <img src="/redo.svg"></img>
              </button>
              <button
                type="button"
                className="bg-white m-4"
                onClick={handleZoomIn}
              >
                <img src="/zoom-in.svg"></img>
              </button>
              <button
                type="button"
                className="bg-white m-4"
                onClick={handleZoomOut}
              >
                <img src="/zoom-out.svg"></img>
              </button>
            </div>
            <select
              className="select select-bordered shadow-xl my-4 w-full max-w-xs text-black"
              defaultValue={material}
              onChange={(e) => {
                setMaterial(e.target.value);
              }}
            >
              <option value={"house"}>Houses</option>
              <option value={"vegetable"}>Vegetables</option>
            </select>
            <div className="text-black text-[10px] shadow-xl border-2 p-2">
              <div className="grid grid-cols-3 gap-2 place-items-center h-[487px] carousel carousel-vertical scroll-smooth overflow-y-auto">
                {materialData[material].map((item) => (
                  <div>
                    <img
                      src={getImageSrc(material, item.imageSrc)}
                      // src={Beet}
                      alt={item.title}
                      className="h-[60px]"
                      draggable="true"
                      onDragStart={(e) => {
                        // dragUrl.current = e.target.src;
                        e.dataTransfer.setData(
                          "application/json",
                          JSON.stringify({ ...item })
                        );
                      }}
                    ></img>
                    <p className="text-center">{item.title}</p>
                  </div>
                ))}
                {/* <div>
                  <img
                    src="/assets/beet.svg"
                    // src={Beet}
                    alt="Beet"
                    className="h-[60px]"
                    draggable="true"
                    onDragStart={(e) => {
                      dragUrl.current = e.target.src;
                      e.dataTransfer.setData(
                        "application/json",
                        JSON.stringify({ name: "Beet" })
                      );
                    }}
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div> */}
              </div>
            </div>
            <div className="join p-1">
              <button type="icon" className="btn join-item bg-white m-4">
                <img src="/eye.svg"></img>
              </button>
              <button type="icon" className="btn join-item bg-white m-4">
                <img src="/lock.svg"></img>
              </button>
              <button type="icon" className="btn join-item bg-white m-4">
                <img src="/outline.svg"></img>
              </button>
            </div>
          </div>
          <div
            className="shadow-xl m-4"
            onDrop={(e) => {
              // console.log("Accepted Drop event", e);
              e.preventDefault();

              const item = JSON.parse(
                e.dataTransfer.getData("application/json")
              );

              stageRef.current.setPointersPositions(e);
              let pos = stageRef.current.getPointerPosition();

              const newShape = {
                x: pos.x / stageScale - 32 / stageScale,
                y: pos.y / stageScale - 32 / stageScale,
                src: getImageSrc(material, item.imageSrc),
                width: 31,
                height: 31,
                imgWidth: item.width,
                imgHeight: item.height,
                id: lastedIndex,
                title: item.title,
                type: item.type,
              };

              const newShapeList = shapes.concat([newShape]);
              historyShape.splice(historyStep + 1);
              historyShape.push(newShapeList);
              historyStep += 1;

              console.log(historyShape, historyStep);

              lastedIndex += 1;
              setShapes(newShapeList);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            <GridPlanner
              width={stageWidth}
              height={stageHeight}
              gridSize={100}
              shapes={shapes}
              setShapes={setShapes}
              pushHistory={(newShapeList) => {
                historyShape.push(newShapeList);
                historyStep += 1;
                setDisableRedo(true);
                setDisableUndo(false);
              }}
              stageScale={stageScale}
              setStageScale={setStageScale}
              selectedId={selectedId}
              selectShape={selectShape}
              ref={stageRef}
            ></GridPlanner>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="join join-vertical p-1">
            <button type="icon" className="btn join-item bg-white">
              <img src="/newfile.svg"></img>
            </button>
            <button type="icon" className="btn join-item bg-white">
              <img src="/save.svg"></img>
            </button>
            <button type="icon" className="btn join-item bg-white">
              <img src="/print.svg"></img>
            </button>
            <button type="icon" className="btn join-item bg-[#0A5436]">
              <img src="/cursor.svg"></img>
            </button>
          </div>
          <div
            className="flex flex-col rounded-md shadow-sm p-1 text-black h-fit max-h-[500px] right-0 scroll-smooth overflow-y-auto"
            style={{ scrollbarWidth: "thin" }}
          >
            {shapes.map((shape) => {
              return (
                <button type="icon" className="bg-white m-2">
                  <img
                    src={shape.src}
                    width={50}
                    alt={shape.title}
                    onClick={() => {
                      selectShape(shape.id);
                    }}
                  ></img>
                </button>
              );
            })}
            {/* <button type="icon" className="bg-white m-2">
              <img src="/assets/beet.svg" width={50}></img>
            </button>
            <button type="icon" className="bg-white m-2">
              <img src="/assets/beet.svg" width={50}></img>
            </button>
            <button type="icon" className="bg-white m-2">
              <img src="/assets/beet.svg" width={50}></img>
            </button>
            <button type="icon" className="bg-white m-2">
              <img src="/assets/beet.svg" width={50}></img>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
