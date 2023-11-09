import { useState } from "react";
import Timer from "./Timer";
import notcooking from "./assets/new_1.svg";
import { Box, Typography } from "@mui/material";

export const PastaBoiler = ({
  time1,
  time2,
}: {
  time1: number;
  time2: number;
}) => {
  const [start, setStart] = useState<number>();
  const [showPicker, setShowPicker] = useState(false);
  return (
    <Box className="circle">
      {start ? (
        <Timer
          minutes={start}
          restart={() => {
            setStart(undefined);
            setShowPicker(false);
          }}
        />
      ) : (
        <Box
          onClick={() => setShowPicker(true)}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
          }}
        >
          {!showPicker ? (
            <img src={notcooking} width={"100%"} alt="notcooking" />
          ) : (
            <TimePicker setStart={setStart} time1={time1} time2={time2} />
          )}
        </Box>
      )}
    </Box>
  );
};

const TimePicker = ({
  setStart,
  time1,
  time2,
}: {
  setStart: (value: React.SetStateAction<number | undefined>) => void;
  time1: number;
  time2: number;
}) => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        border: "5px solid #cccccc",
      }}
    >
      <Box className="circleButton left" onClick={() => setStart(time1)}>
        <Typography typography="h2">{time1}</Typography>
      </Box>
      <Box className="circleButton right" onClick={() => setStart(time2)}>
        <Typography typography="h2">{time2}</Typography>
      </Box>
    </Box>
  );
};
