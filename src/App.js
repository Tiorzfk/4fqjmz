import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");
  const [result, setResult] = useState(0);

  const removeDecimal = (val) => {
    if (val.includes(".")) return val.replaceAll(".", "");

    return val;
  };

  const handleInput = (e) => {
    e.preventDefault();
    const reverseVal = val.split("").reverse().join("");

    const valParsed = parseInt(removeDecimal(val));
    const valReverseParsed = parseInt(removeDecimal(reverseVal));

    if (valParsed < valReverseParsed) {
      setResult(valReverseParsed - valParsed);
    } else {
      setResult(valParsed - valReverseParsed);
    }
  };

  const validInput = (val) => {
    const regex = /^[0-9.\b]+$/;
    return regex.test(val) || val === "";
  };

  const handleChange = (e) => {
    if (validInput(e.target.value)) setVal(e.target.value);
  };

  return (
    <form onSubmit={handleInput}>
      <div className="App">
        <div>
          Number: <input value={val} onChange={handleChange} />
          <button>Submit</button>
        </div>
        <div>Result: {result || 0}</div>
      </div>
    </form>
  );
}
