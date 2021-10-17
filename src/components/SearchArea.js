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
  font-size: 20px;
  height: 35px;
  margin-right: 20px;
  width: 120px;
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
  width: 300px;
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
        <SubContainer>
          <DatePickerBox name="date">
            <option value="0">일별보기</option>
            <option value="1">1</option>
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
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
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
