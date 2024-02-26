import { useState } from "react";
import {  Note, SearchBar } from "./components";
import styled from "styled-components";
import Input from "./components/Input";

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

function App() {
  const [ searchValue, setSearchValue ] = useState("");

  const handleChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <StyledDiv>
      <SearchBar
        theme="light"
        value={searchValue}
        handleSearch={() => {console.log(searchValue)}}
        onChange={handleChangeSearchBar}
      />
      <Note 
        title="lorem ipsum"
        content="lorem ipsum dolor sit amet"
        date={new Date('2022-02-23')}
      />
      <h1>{searchValue}</h1>
      <Input theme="light" $bordered={true} />
    </StyledDiv>
    
  )
}

export default App;
