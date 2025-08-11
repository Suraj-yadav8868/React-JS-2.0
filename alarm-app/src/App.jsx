import { useEffect, useState } from 'react';

const App = () => {
  const [alarms, setAlarms] = useState(() => {
    const saved = localStorage.getItem("alarms");
    return saved ? JSON.parse(saved) : [];
  });
  const [time, setTime] = useState('');
  const [label, setLabel] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  // Save alarms to localStorage
  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  // Alarm trigger logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const current = now.toTimeString().slice(0, 5); // HH:MM

      alarms.forEach(alarm => {
        if (alarm.time === current && !alarm.rungToday) {
          const audio = new Audio('/alarm.mp3');
          audio.play();

          setAlarms(prev =>
            prev.map(a =>
              a.id === alarm.id ? { ...a, rungToday: true } : a
            )
          );
        }
      });

      // Reset rungToday after 60 seconds
      setTimeout(() => {
        setAlarms(prev =>
          prev.map(a => ({ ...a, rungToday: false }))
        );
      }, 60000);
    }, 1000);

    return () => clearInterval(interval);
  }, [alarms]);

  const addAlarm = () => {
    if (!time) return;
    const newAlarm = {
      id: Date.now(),
      time,
      label: label || "No Label",
      rungToday: false
    };
    setAlarms([...alarms, newAlarm]);
    setTime('');
    setLabel('');
  };

  const deleteAlarm = (id) => {
    setAlarms(alarms.filter(alarm => alarm.id !== id));
  };

  return (
    <div className="app">
      <h2 className="clock">🕓 {formatTime(currentTime)}</h2>
      <h1>⏰ Alarm App</h1>

      <div className="form">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <button onClick={addAlarm}>➕ Add Alarm</button>
      </div>

      <div className="alarm-list">
        {alarms.length === 0 && <p>No Alarms Set</p>}
        {alarms.map((alarm) => (
          <div className="alarm-item" key={alarm.id}>
            <span>🕒 {alarm.time} - {alarm.label}</span>
            <button onClick={() => deleteAlarm(alarm.id)}>🗑 Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
