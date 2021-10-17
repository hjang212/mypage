import styled from "styled-components";
const MainContainer = styled.div`
  position: absolute;
  background-color: #162936;
  height: 100vh;
  width: 250px;
  color: #fff;
`;
const SubContainer = styled.div`
  text-align: center;
`;
const Ul = styled.ul``;
const Li = styled.li`
  margin-top: 50px;
`;
const SideBar = () => {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <Ul>
            <Li>회의 예약 현황</Li>
            <Li>개인정보 수정</Li>
          </Ul>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default SideBar;
