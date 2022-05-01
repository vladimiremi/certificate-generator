import { useEffect } from "react";
import { dragAndDrop } from "utils/dragAndDrop";
// ghost image drag and drop api
const DragAndDrop = () => {
  useEffect(() => {
    dragAndDrop();
  }, []);
  return (
    <>
      <div className="boards">
        <div className="board">
          <h3>Todo</h3>
          <div className="dropzone">
            <div className="card" draggable="true">
              <div className="status green"></div>
              <div className="content"> Do videos!</div>
            </div>
          </div>
        </div>
        <div className="board">
          <h3>In progress</h3>
          <div className="dropzone">
            <div className="card" draggable="true">
              <div className="status blue"></div>
              <div className="content"> Forum</div>
            </div>
          </div>
        </div>
        <div className="board">
          <h3>Done</h3>
          <div className="dropzone">
            <div className="card" draggable="true">
              <div className="status red"></div>
              <div className="content"> Next Level Week</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
