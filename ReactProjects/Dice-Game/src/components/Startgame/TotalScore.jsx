import styled from 'styled-components'

function TotalScore({score}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1{
    font-size: 60px;
    line-height:10px;
  }
  p{
    /* margin:0px; */
    font-size: 26px;
    font-weight: 500px;
  }

`