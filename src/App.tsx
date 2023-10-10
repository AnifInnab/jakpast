import { useState } from "react";
import "./App.css";
import { useWakeLock } from "react-screen-wake-lock";
import { Kitchen } from "./Kitchen";
import { Button, Stack, TextField, Typography } from "@mui/material";

export interface Settings {
  timerPasta: number;
  timerWaterLevel: number;
}
const App = () => {
  const [wakelock, setWakelock] = useState(false);
  const [start, setStart] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    timerPasta: 6,
    timerWaterLevel: 60,
  });

  const handleTimerChange = (event: any) => {
    const { name, value } = event.target;
    setSettings({
      ...settings,
      [name]: value,
    });
  };

  const { isSupported, released, request, release, type } = useWakeLock({
    onRequest: () => console.log("Wakelock requested"),
    onError: () => console.log("An error happened with wakelock 💥"),
    onRelease: () => console.log("Wakelock released"),
  });

  const requestWakeLock = async () => {
    if (!wakelock) {
      setWakelock(true);
      await request("screen");
    } else {
      setWakelock(false);
      await release();
    }
  };
  return (
    <Stack className="app" sx={{ justifyContent: "center" }}>
      {!start && (
        <Stack gap={4} height={"100%"} justifyContent={"center"} p={4}>
          <Typography>
            {`Wakelock supported: ${isSupported ? "Yes" : "No"}`}
          </Typography>
          <TextField
            label="Pasta Timer (minutes)"
            variant="outlined"
            name="timerPasta"
            type="number"
            value={settings.timerPasta}
            onChange={handleTimerChange}
          />
          <TextField
            label="Water Level Timer (minutes)"
            variant="outlined"
            name="timerWaterLevel"
            type="number"
            value={settings.timerWaterLevel}
            onChange={handleTimerChange}
          />
          <Button
            onClick={() => {
              requestWakeLock();
              setStart(true);
            }}
            variant="contained"
          >
            Start
          </Button>
        </Stack>
      )}
      {start && (
        <Kitchen
          settings={settings}
          goBack={() => {
            setStart(false);
            release();
          }}
        />
      )}

      <Stack />
    </Stack>
  );
};
export default App;
