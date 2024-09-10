// import { useState } from 'react';
import styled from 'styled-components';

function NumberSelect({selectedNumber,setSelectedNumber}) {
    const arr = [1,2,3,4,5,6];
    // const [selectedNumber, setSelectedNumber] = useState(null);

    return (
        <NumberSelector>
            <div className='flex'>
                {arr.map((value, i) => (
                    <Box 
                        isSelected={value === selectedNumber}
                        onClick={() => setSelectedNumber(value)}
                        key={i}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelector>
    );
}

export default NumberSelect;

const NumberSelector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .flex {
        display: flex;
        gap: 24px;
        /* margin-bottom: 2px; */
    }

    p {
        font-size: 24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 26px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.isSelected ? "black" : "#f0f0f0")};
    }
`;
