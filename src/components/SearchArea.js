import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
  margin-left: 250px;
`;
const SecondWrapper = styled.div`
  display: flex;
`;
const SelectBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 20px;
  height: 35px;
  margin-right: 20px;
  width: 120px;
`;
const SearchBox = styled.input`
  border: none;
  border-radius: 25px;
  text-align: center;
  background-color: #ccc;
  font-size: 20px;
  height: 35px;
  margin-right: 20px;
  width: 350px;
`;
const SearchBtn = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #162936;
  font-weight: lighter;
  font-size: 20px;
  height: 35px;
  width: 120px;
  color: #fff;
`;
const SearchArea = () => {
  return (
    <>
      <MainContainer>
        <SecondWrapper>
          <SelectBox name="date">
            <option value="1" selected="selected">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </SelectBox>
          <SelectBox name="year">
            <option value="2021" selected="selected">
              2021
            </option>
            <option value="2022">2022</option>
          </SelectBox>
          <form>
            <SearchBox placeholder="검색" active></SearchBox>
            <SearchBtn>Search</SearchBtn>
          </form>
        </SecondWrapper>
      </MainContainer>
    </>
  );
};

export default SearchArea;
