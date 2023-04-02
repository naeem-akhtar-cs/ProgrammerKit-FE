import { useState } from "react";
import Button from "react-bootstrap/Button";

function Input(props) {
  const [userInput, setInput] = useState(0);
  const convertInput = () => {
    props.saveUserInput(userInput);
  };

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          class="form-control"
          onChange={updateInput}
          placeholder={"e.g " + props.currentTime}
        />
        <br />
        <Button onClick={convertInput}>Convert</Button>
      </div>
    </div>
  );
}

export default Input;
