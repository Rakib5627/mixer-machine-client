import { useState, useEffect } from "react";
import axios from "axios";

const MixerDashboard = () => {
  const [mixerState, setMixerState] = useState("off");
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const serverURL = "https://mixer-machine.vercel.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sensorRes = await axios.get(`${serverURL}/api/data`);
        setTemperature(sensorRes.data.temperature);
        setHumidity(sensorRes.data.humidity);
        setAcceleration(sensorRes.data.acceleration || { x: 0, y: 0, z: 0 });

        const mixerRes = await axios.get(`${serverURL}/api/mixer/control`);
        setMixerState(mixerRes.data.state);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMixer = async () => {
    const newState = mixerState === "off" ? "on" : "off";
    try {
      await axios.post(`${serverURL}/api/mixer/control`, { state: newState });
      setMixerState(newState);
    } catch (error) {
      console.error("Error toggling mixer:", error);
    }
  };

  const startTimer = () => {
    if (timer > 0) {
      setIsTimerRunning(true);
      toggleMixer();

      let countdown = timer;
      const timerInterval = setInterval(() => {
        countdown -= 1;
        setTimer(countdown);

        if (countdown <= 0) {
          clearInterval(timerInterval);
          setIsTimerRunning(false);
          turnOffMixer();
        }
      }, 1000);
    }
  };

  const turnOffMixer = async () => {
    try {
      await axios.post(`${serverURL}/api/mixer/control`, { state: "off" });
      setMixerState("off");
    } catch (error) {
      console.error("Error turning off mixer:", error);
    }
  };

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Mixer Control Box */}
      <div className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Mixer Control</h2>
        <button
          onClick={toggleMixer}
          className={`w-full py-3 rounded-lg text-white ${mixerState === "on" ? "bg-green-700 hover:bg-green-800" : "bg-blue-700 hover:bg-blue-800"} transition-colors duration-300`}
        >
          Turn {mixerState === "off" ? "On" : "Off"}
        </button>
      </div>

      {/* Timer Control Box (Span across 2 columns on large screens) */}
      <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-500 shadow-lg rounded-lg p-6 flex flex-col items-center text-center lg:col-span-2 hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Timer Control</h2>
        <div className="flex items-center justify-center mb-4 space-x-4">
          <label className="mr-2 font-semibold text-white">Set Timer (seconds):</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(Math.max(0, Number(e.target.value)))}
            disabled={isTimerRunning}
            className="p-2 text-lg border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={startTimer}
            disabled={isTimerRunning || timer <= 0}
            className="px-4 py-2 text-white bg-blue-700 rounded-lg disabled:opacity-90 hover:bg-blue-900 transition-colors duration-300"
          >
            {isTimerRunning ? <div className="animate-spin border-4 border-t-4 border-blue-600 w-5 h-5 rounded-full"></div> : "Start Timer"}
          </button>
        </div>
      </div>

      {/* Temperature Box */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Temperature</h2>
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16 h-16 text-yellow-300 fill-current">
            <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
          </svg>
        </div>
        <p className="text-3xl font-bold text-white">{temperature}°C</p>
      </div>

      {/* Humidity Box */}
      <div className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Humidity</h2>
        <div className="relative w-full h-32 bg-gray-100 rounded-xl overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-xl"
            style={{ height: `${humidity}%` }}
          ></div>
          <p className="absolute inset-0 flex items-center justify-center text-xl text-green-300 font-semibold">{humidity}%</p>
        </div>
      </div>

      {/* Acceleration Box */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Acceleration</h2>
        <div className="space-y-2 text-white">
          <p className="text-lg">X: {acceleration.x.toFixed(2)}</p>
          <p className="text-lg">Y: {acceleration.y.toFixed(2)}</p>
          <p className="text-lg">Z: {acceleration.z.toFixed(2)}</p>
        </div>
      </div>
    </div>

  );
};

export default MixerDashboard;
