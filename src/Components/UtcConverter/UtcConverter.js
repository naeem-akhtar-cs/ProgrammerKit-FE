import { useState } from "react";

import Info from "./Info/Info";
import Input from "./Input/Input";
import Output from "./Output/Output";

const UtcConverter = () => {
  const currUnix = Math.floor(Date.now() / 1000);
  const currentTime = Math.floor(Date.now() / 1000);

  const [inputTime, updateTime] = useState(currUnix);
  const saveUserInput = (userInput) => {
    updateTime(userInput);
  };

  return (
    <div className="m-5">
      <Info />
      <Input saveUserInput={saveUserInput} currentTime={currentTime} />
      <br />
      <Output time={inputTime} />
    </div>
  );
};

export default UtcConverter;
