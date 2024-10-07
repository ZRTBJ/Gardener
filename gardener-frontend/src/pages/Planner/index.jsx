import React, { useRef, useState, forwardRef } from "react";
import styles from "../../style";
import GridPlanner from "./components/GridPlanner";

export default function Planner() {
  const stageWidth = window.innerWidth - 390;
  const stageHeight = window.innerHeight - 180;

  const dragUrl = useRef(null);
  const stageRef = useRef(null);
  const [shapes, setShapes] = useState([]);

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
              <button type="icon" className="bg-white m-4">
                <img src="/undo.svg"></img>
              </button>
              <button type="icon" className="bg-white m-4">
                <img src="/redo.svg"></img>
              </button>
              <button type="icon" className="bg-white m-4">
                <img src="/zoom-in.svg"></img>
              </button>
              <button type="icon" className="bg-white m-4">
                <img src="/zoom-out.svg"></img>
              </button>
            </div>
            <select
              className="select select-bordered shadow-xl my-4 w-full max-w-xs text-black"
              defaultValue={1}
            >
              <option value={0}>Houses</option>
              <option value={1}>Vegetables</option>
            </select>
            <div className="text-black text-[10px] shadow-xl border-2 p-2">
              <div className="grid grid-cols-3 gap-2 place-items-center h-[487px] carousel carousel-vertical scroll-smooth overflow-y-auto">
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                    draggable="true"
                    onDragStart={(e) => {
                      dragUrl.current = e.target.src;
                    }}
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
                <div>
                  <img
                    src="/assets/beet.svg"
                    alt="beet"
                    className="h-[60px]"
                  ></img>
                  <p className="text-center">Lorem ipsum</p>
                </div>
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
              console.log("Accepted Drop event", e);
              e.preventDefault();
              // stageRef.current.setPointersPositions(e);
              const newShape = {
                x: e.screenX,
                y: e.screenY,
                // ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
              };
              console.log(newShape);
              const newShapeList = shapes.concat([newShape]);
              setShapes(newShapeList);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            <GridPlanner
              width={stageWidth}
              height={stageHeight}
              gridSize={50}
              shapes={shapes}
              // ref={stageRef}
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
            {shapes.map((shape, index) => {
              return (
                <button type="icon" className="bg-white m-2">
                  <img src={shape.src} width={50} alt={String(index)}></img>
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
