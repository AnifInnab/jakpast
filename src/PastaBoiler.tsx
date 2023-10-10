import { useState } from "react";
import Timer from "./Timer";
import notcooking from "./assets/new_1.svg";
import { Box } from "@mui/material";

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
        <div
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
            <div
              style={{
                display: "flex",
                width: "100%",
                border: "10px solid #cccccc",
                borderRadius: "50%",
              }}
            >
              <div
                className="circleButton left"
                onClick={() => setStart(time1)}
              >
                <h2>{time1}</h2>
              </div>
              <div
                className="circleButton right"
                onClick={() => setStart(time2)}
              >
                <h2>{time2}</h2>
              </div>
            </div>
          )}
        </div>
      )}
    </Box>
  );
};
