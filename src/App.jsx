import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 8,
    duration: 12,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const isInputValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isInputValid && <Results input={userInput} />}
      {!isInputValid && (
        <p className="center">Please select a duration greater than zero!</p>
      )}
    </>
  );
}

export default App;
