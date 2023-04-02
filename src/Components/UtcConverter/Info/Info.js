import { useState } from "react";

const Info = () => {
  const currUnix = Math.floor(Date.now() / 1000);
  const [currUnixTime, updateCurrTime] = useState(currUnix);

  setTimeout(() => {
    const currUnix = Math.floor(Date.now() / 1000);
    updateCurrTime(currUnix);
  }, 1000);

  return (
    <div>
      <div className="h1">Unix now(s): {currUnixTime}</div>
    </div>
  );
};

export default Info;
