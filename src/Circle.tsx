import { useState } from "react";
import Timer from "./Timer";

const Circle = () => {
  const [timer, setTimer] = useState<number>();
  return (
    <div className="circle">
      {!!timer ? (
        <Timer minutes={timer} restart={() => setTimer(undefined)} />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
          }}
        >
          <div className="circleButton left" onClick={() => setTimer(4)}>
            <h1>4m</h1>
          </div>
          <div className="circleButton right" onClick={() => setTimer(6)}>
            <h1>6m</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Circle;
