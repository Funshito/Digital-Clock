import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [today, setToday] = useState<string>(
    new Date().toLocaleDateString("en-us", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setToday(new Date().toLocaleDateString("en-us", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }))
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: "3rem", fontFamily: "monospace" }}>
      <div>{today}</div>
      <div>{time}</div>
    </div>
  );
};

export default Clock;
