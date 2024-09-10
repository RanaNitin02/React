import styled from "styled-components"

function StartGame({ game }) {
  return (
    <>
        <Container>
            <div>
                <img src="/images/main.jpeg"/><br/><br/>
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={game}>Play Game</Button>
            </div>
        </Container>
    </>
  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    height:80vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-evenly;
    .content{
    h1{
        font-size:96px;
        white-space:nowrap;
    }
}
`

const Button = styled.button`
    color:white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: 1px solid transparent;

    &:hover{
        background-color: blue;
        border:1px solid black
    }

`