import TotalScore from "./TotalScore";
import NumberSelect from "./NumberSelect";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState, useEffect } from "react";

function PlayGame() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (selectedNumber === diceValue) {
      setScore(prevScore => prevScore + 1);
    }
    
  }, [diceValue, selectedNumber]);

  return (
    <>
      <All>
        <TotalScore score={score} />
        <NumberSelect 
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber} 
        />
      </All>
      <RoleDice 
        diceValue={diceValue} 
        setDiceValue={setDiceValue} 
      />
    </>
  );
}

export default PlayGame;

const All = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 26px;
`;
