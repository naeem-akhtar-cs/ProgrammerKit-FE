import { useState } from "react";
import "./Input.css";

function Input() {
  const [time, setTime] = useState(1679806593);

  const updateTime = (event) => {
    setTime();
  };

  return (
    <div>
      <div>
        <h1>Hi</h1>
        <div class="UtcConverter">
          <label>Enter unix timestamp</label>
          <br />
          <input type={Number} onChange="updateTime"></input>
        </div>
      </div>
    </div>
  );
}

export default Input;
