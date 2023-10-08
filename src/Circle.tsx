import { useState } from "react";
import Timer from "./Timer";
import notcooking from "./assets/notcooking31.svg";

const Circle = () => {
  const [timer, setTimer] = useState<number>();
  const [showTimePicker, setShowTimePicker] = useState(false);

  const restartTimer = () => {
    setTimer(undefined);
    setShowTimePicker(false);
  };

  return (
    <div className="circle">
      {!!timer ? (
        <Timer minutes={timer} restart={() => restartTimer()} />
      ) : (
        <div
          onClick={() => setShowTimePicker(true)}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
          }}
        >
          {!showTimePicker ? (
            <img src={notcooking} width={"100%"} alt="notcooking" />
          ) : (
            <>
              <div className="circleButton left" onClick={() => setTimer(4)}>
                <h2>4m</h2>
              </div>
              <div className="circleButton right" onClick={() => setTimer(6)}>
                <h2>6m</h2>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Circle;