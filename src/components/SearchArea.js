import styled from "styled-components";
const MainContainer = styled.div`
  display: flex;
  margin-left: 250px;
  justify-content: space-evenly;
  margin-top: 25px;
  padding: 5px;
`;
const SubContainer = styled.div`
  display: flex;
`;
const DatePickerBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 120px;
`;
const SelectBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 120px;
`;
const SearchBox = styled.input`
  border: none;
  border-radius: 25px;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 300px;
`;
const SearchBtn = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #162936;
  font-size: 16px;
  height: 35px;
  width: 120px;
  color: #fff;
`;
const SearchArea = () => {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <DatePickerBox name="weekday">
            <option value="day">일별보기</option>
            <option value="week">주별보기</option>
          </DatePickerBox>
          <SelectBox name="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </SelectBox>
          <form>
            <SearchBox placeholder="검색" active></SearchBox>
            <SearchBtn>Search</SearchBtn>
          </form>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default SearchArea;
