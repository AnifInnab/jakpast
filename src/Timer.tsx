import "./Circle.css";
import useCountdown from "./useCountdown";
import cooking from "./assets/cooking.svg";
import alarm from "./assets/alarm.wav";
import { useEffect, useState } from "react";

const Timer = ({
  minutes,
  restart,
}: {
  minutes: number;
  restart: () => void;
}) => {
  const { formattedTime, time } = useCountdown(minutes * 60 * 1000);
  const [audio] = useState(new Audio(alarm));

  const playSound = () => {
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    if (!time) playSound();

    return () => {
      audio.pause();
    };
  }, [time]);

  return (
    <div
      onClick={restart}
      style={{
        height: "100%",
        textAlign: "center",
        color: "black",
      }}
    >
      <img src={cooking} width={"100%"} alt="cooking" />
      <div
        style={{
          position: "absolute",
          top: "30%",
          bottom: "70%",
          width: "100%",
        }}
      >
        <h1 style={{ color: time < 30000 ? "#ad1b1b" : undefined }}>
          {formattedTime}
        </h1>
        <h3 style={{ margin: 0 }}>{time === 0 ? "Take out!" : "Boiling"}</h3>
      </div>
    </div>
  );
};

export default Timer;
