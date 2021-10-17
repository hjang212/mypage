import styled from "styled-components";
const MainContainer = styled.div`
  width: auto;
  margin-left: 250px;
`;

const SubContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DateContainer = styled.div`
  font-size: 35px;
`;

const OverviewBox = styled.div`
  width: 48%;
  height: 170px;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 25px;
`;

const P = styled.p`
  margin-top: 5px;
  padding: 15px;
`;

const DetailedContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 25px;
  background-color: #344551;
  height: 310px;
`;

const PDetailedSidebar = styled.p`
  width: 100%;
  margin-bottom: 10px;
`;

const PDetailedInfo = styled.p`
  margin-bottom: 10px;
  width: 100%;
`;

const DetailedContainer2 = styled.div`
  width: 70%;
`;

const DetailedContainerCDC = styled.div`
  text-align: right;
  height: 60px;
  line-height: 60px;
  color: #fff;
  background-color: #344551;
  border-radius: 10px;
`;

const SidebarContainer = styled.div`
  width: 30%;
  border-radius: 10px;
  background-color: #162936;
  color: #fff;
  text-align: center;
`;

const DetailedContainerSidebarDiv = styled.div`
  margin-top: 60px;
`;

const DetailedContainerInfo = styled.div`
  text-align: center;
  color: #fff;
  border-radius: 10px;
`;

const MyPage = () => {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <DateContainer>9.20</DateContainer>
          <OverviewContainer>
            <OverviewBox>
              <P>데일리 스탠드업</P>
              <P>10시30분 ~ 10시40분</P>
              <P>알렉스줌</P>
            </OverviewBox>
            <OverviewBox>
              <P>데일리 스탠드업</P>
              <P>10시30분 ~ 10시40분</P>
              <P>알렉스줌</P>
            </OverviewBox>
          </OverviewContainer>
          <DetailedContainer>
            <SidebarContainer>
              <DetailedContainerSidebarDiv>
                <PDetailedSidebar>제목</PDetailedSidebar>
                <PDetailedSidebar>회의실명</PDetailedSidebar>
                <PDetailedSidebar>회의실 위치</PDetailedSidebar>
                <PDetailedSidebar>예약자</PDetailedSidebar>
                <PDetailedSidebar>예약시간</PDetailedSidebar>
                <PDetailedSidebar>참석인원</PDetailedSidebar>
                <PDetailedSidebar>회의 내용</PDetailedSidebar>
              </DetailedContainerSidebarDiv>
            </SidebarContainer>
            <DetailedContainer2>
              <DetailedContainerCDC>수정 삭제 닫기</DetailedContainerCDC>
              <DetailedContainerInfo>
                <PDetailedInfo>내부회의</PDetailedInfo>
                <PDetailedInfo>2회의실</PDetailedInfo>
                <PDetailedInfo>지하 1층</PDetailedInfo>
                <PDetailedInfo>일반회원</PDetailedInfo>
                <PDetailedInfo>2021-09-28 10:00 ~ 12:00</PDetailedInfo>
                <PDetailedInfo>5명</PDetailedInfo>
                <PDetailedInfo>배열에 대한 지식공유</PDetailedInfo>
              </DetailedContainerInfo>
            </DetailedContainer2>
          </DetailedContainer>
          <OverviewContainer>
            <OverviewBox>
              <P>데일리 스탠드업</P>
              <P>10시30분 ~ 10시40분</P>
              <P>알렉스줌</P>
            </OverviewBox>
            <OverviewBox>
              <P>데일리 스탠드업</P>
              <P>10시30분 ~ 10시40분</P>
              <P>알렉스줌</P>
            </OverviewBox>
          </OverviewContainer>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default MyPage;
