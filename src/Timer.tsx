import "./Circle.css";
import useCountdown from "./useCountdown";
import cooking from "./assets/cooking.png";
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
      className={time === 0 ? "blink" : undefined}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
    >
      <img src={cooking} width={"30%"} alt="cooking" />
      <h1>{formattedTime}</h1>
      <h3>{time === 0 ? "Take out!/Mengambil!" : "Boiling/Mendidih"}</h3>
    </div>
  );
};

export default Timer;
