import { useEffect } from "react";
import "./App.css";
import Circle from "./Circle";
import { useWakeLock } from "react-screen-wake-lock";

const App = () => {
  const { isSupported, released, request } = useWakeLock({
    onRequest: () => alert("Screen Wake Lock: requested!"),
    onError: () => alert("An error happened 💥"),
    onRelease: () => alert("Screen Wake Lock: released!"),
  });
  console.log({ isSupported, released });
  useEffect(() => {
    requestWakeLock();
  }, []);

  const requestWakeLock = async () => {
    if (!released) {
      await request();
    }
  };
  return (
    <div className="app">
      <p>{isSupported ? "WL Supported" : "WL not supported"}</p>
      <p>{released ? "WL Released" : "WL not Released"}</p>

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
