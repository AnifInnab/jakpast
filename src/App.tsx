import { useState } from "react";
import "./App.css";
import Circle from "./Circle";
import { useWakeLock } from "react-screen-wake-lock";

const App = () => {
  const [wakelock, setWakelock] = useState(false);
  const { isSupported, released, request, release, type } = useWakeLock({
    onRequest: () => console.log("Wakelock requested"),
    onError: () => alert("An error happened 💥"),
    onRelease: () => console.log("Wakelock released"),
  });
  // useEffect(() => {
  //   requestWakeLock();
  // }, []);

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
    <div className="app">
      <p>
        Wakelock:{" "}
        {`isSupported: ${isSupported} released: ${released} type: ${type}`}
      </p>
      <input
        type="checkbox"
        checked={wakelock}
        onChange={() => requestWakeLock()}
      />

      <div className="row">
        <Circle />
        <Circle />
      </div>
      <div className="row">
        <Circle />
        <Circle />
      </div>
      <div className="row">
        <Circle />
        <Circle />
      </div>
    </div>
  );
};

export default App;
