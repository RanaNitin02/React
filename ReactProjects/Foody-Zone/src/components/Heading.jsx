import styled from 'styled-components';
import Carts from "./Carts";
import { useState, useEffect } from 'react';

export const baseURL = "http://localhost:9000";

function Heading() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [filterData, setFilterData] = useState(null);
    const [loadingState, setLoadingState] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
  
    const fetchFilterData = async () => {
        setLoadingState(true);
        try {
            const res = await fetch(baseURL);
            const data = await res.json();
            setData(data);
            setFilterData(data);
            setLoadingState(false);
        } catch (error) {
            setError("Unable to fetch data");
        }
    };
  
    useEffect(() => {
        fetchFilterData();
    }, []);
  
    const searchFood = (e) => {
        const searchValue = e.target.value;
        if (!searchValue) {
            setFilterData(data);
        } else {
            const filteredData = data?.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilterData(filteredData);
        }
    };

    const filterBtns = [
        { name: "All", type: "all" },
        { name: "Breakfast", type: "breakfast" },
        { name: "Lunch", type: "lunch" },
        { name: "Dinner", type: "dinner" },
    ];

    const filterFood = (type) => {
        if (type === 'all') {
            setFilterData(data);
            setSelectedButton(null);
        } else {
            const filteredData = data?.filter(item => item.type.toLowerCase() === type);
            setFilterData(filteredData);
            setSelectedButton(type);
        }
    };

    if (error) return <div>Error: {error}</div>;
    if (loadingState) return <div>Loading...</div>;

    return (
        <MainContainer>
            <TopContainer>
                <div>
                    <img src="/images/logo.svg" alt="logo image" />
                </div>
                <div className='search'>
                    <input onChange={searchFood} type="text" placeholder='Search Food...' />
                </div>
            </TopContainer>
            <AllButtons>
                {filterBtns.map((value) => (
                    <Button
                        isSelected={selectedButton === value.type}
                        key={value.name}
                        onClick={() => filterFood(value.type)}
                    >
                        {value.name}
                    </Button>
                ))}
            </AllButtons>
            <Carts data={filterData} />
        </MainContainer>
    );
}

export default Heading;

const MainContainer = styled.div`
  background-color: #323334;
  max-width: 100vw;
  margin: 0 auto;
  padding: 10px 0;
`;

const TopContainer = styled.section`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 26px;

  img {
    max-height: 50px;  
  }

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      color: white;
      font-size: 16px;
      padding: 1px 10px;
    }
  }
`;

const AllButtons = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "white" : "red")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};

  &:hover {
    background-color: white;
    color: black;
  }
`;
