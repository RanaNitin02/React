import styled from 'styled-components';

function RoleDice({ diceValue, setDiceValue }) {
    
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber);
    setDiceValue(randomNumber);
  }

  return (
    <Container>
      <div onClick={generateRandomNumber}>
        <img key={diceValue} src={`/images/dice${diceValue || 1}.jpeg`} alt="Dice" />
        <p>Click to roll dice</p>
      </div>
    </Container>
  );
}

export default RoleDice;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 220px;
    }
  }

  p {
    font-size: 26px;
    font-weight: 500;
  }
`;
