import { useState } from "react";
import Timer from "./Timer";
import notcooking from "./assets/new_1.svg";
import { Box } from "@mui/material";

export const PastaBoiler = ({ time }: { time: number }) => {
  const [start, setStart] = useState(false);

  return (
    <Box className="circle">
      {start ? (
        <Timer minutes={time} restart={() => setStart(false)} />
      ) : (
        <div
          onClick={() => setStart(true)}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
          }}
        >
          <img src={notcooking} width={"100%"} alt="notcooking" />
        </div>
      )}
    </Box>
  );
};
