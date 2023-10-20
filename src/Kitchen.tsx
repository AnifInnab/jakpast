import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import ArrowBackIcon from "@mui/icons-material/ChevronLeft";
import { Settings } from "./App";
import { PastaBoiler } from "./PastaBoiler";
import alarm from "./assets/alarm.wav";

export const Kitchen = ({
  settings,
  goBack,
}: {
  settings: Settings;
  goBack: () => void;
}) => {
  const [openWaterLevelModal, setOpenWaterLevelModal] = useState(false);
  const [openSaltPercentageModal, setOpenSaltPercentageModal] = useState(false);

  const [audio] = useState(new Audio(alarm));

  const playSound = () => {
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    const waterTimer = setInterval(() => {
      setOpenWaterLevelModal(true);
      playSound();
    }, settings.timerWaterLevel * 60 * 1000);

    const saltTimer = setInterval(() => {
      setOpenSaltPercentageModal(true);
      playSound();
    }, settings.saltPercentage * 60 * 1000);

    return () => {
      clearInterval(waterTimer);
      clearInterval(saltTimer);
    };
  }, []);

  const handleCloseWaterLevel = () => {
    audio.pause();
    setOpenWaterLevelModal(false);
  };
  const handleCloseSaltPercentage = () => {
    audio.pause();
    setOpenSaltPercentageModal(false);
  };

  return (
    <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
      <Stack
        sx={{
          width: "100%",
          color: "black",
          flexDirection: "row",
        }}
      >
        <Stack onClick={goBack} flexDirection={"row"}>
          <ArrowBackIcon /> <Typography>{" Back"}</Typography>
        </Stack>
      </Stack>
      <Modal
        title="Water level"
        text="Check water level - Periksa ketinggian air"
        open={openWaterLevelModal}
        handleClose={handleCloseWaterLevel}
      />
      <Modal
        title="Salt percentage"
        text="Check salt percentage - Periksa persentase garam"
        open={openSaltPercentageModal}
        handleClose={handleCloseSaltPercentage}
      />
      <Grid container spacing={2}>
        {Array.from({ length: 6 }).map(() => (
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            item
            xs={6}
            sm={4}
            md={4}
          >
            <PastaBoiler
              time1={settings.timerPasta1}
              time2={settings.timerPasta2}
            />
          </Grid>
        ))}
      </Grid>
      <Box />
    </Stack>
  );
};
