import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const SAMainContainer = styled.div`
  width: auto;
  margin-left: 200px;
`;
const SASubContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1000px;
  margin: 25px auto;
`;
const DatePickerBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 100px;
`;
const SelectBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 100px;
`;
const SearchBox = styled.input`
  border: none;
  border-radius: 25px;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 280px;
`;
const SearchBtn = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #162936;
  font-size: 16px;
  height: 35px;
  width: 85px;
  color: #fff;
`;
const IconSize = "2x";
const MainContainer = styled.div`
  width: auto;
  margin-left: 200px;
`;
const SubContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DateContainer = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;

const OverviewBox = styled.div`
  display: flex;
  width: 48%;
  height: 105px;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
`;

const OverviewBoxDetails = styled.div`
  font-size: 16px;
  width: 90%;
`;

const OverviewBoxIcon = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin: 15px 15px;
`;

const DetailedContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
  background-color: #344551;
  height: 200px;
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

const SidebarContainer = styled.div`
  width: 30%;
  border-radius: 10px;
  background-color: #162936;
  color: #fff;
  text-align: center;
`;

const DetailedContainerSidebar = styled.div`
  margin-top: 15px;
`;

const DetailedContainerInfo = styled.div`
  margin-top: 15px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
`;

const MyPage = () => {
  return (
    <>
      <SAMainContainer>
        <SASubContainer>
          <DatePickerBox name="weekday">
            <option value="day">????????????</option>
            <option value="week">????????????</option>
          </DatePickerBox>
          <SelectBox name="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </SelectBox>
          <form>
            <SearchBox placeholder="??????" active></SearchBox>
            <SearchBtn>Search</SearchBtn>
          </form>
        </SASubContainer>
      </SAMainContainer>
      <MainContainer>
        <SubContainer>
          <DateContainer>9.20</DateContainer>
          <OverviewContainer>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>????????? ????????????</P>
                <P>10???30??? ~ 10???40???</P>
                <P>????????????</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon>
                <FontAwesomeIcon icon={faChevronUp} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>????????? ????????????</P>
                <P>10???30??? ~ 10???40???</P>
                <P>????????????</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon>
                <FontAwesomeIcon icon={faChevronDown} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
          </OverviewContainer>
          <DetailedContainer>
            <SidebarContainer>
              <DetailedContainerSidebar>
                <PDetailedSidebar>??????</PDetailedSidebar>
                <PDetailedSidebar>????????????</PDetailedSidebar>
                <PDetailedSidebar>????????? ??????</PDetailedSidebar>
                <PDetailedSidebar>?????????</PDetailedSidebar>
                <PDetailedSidebar>????????????</PDetailedSidebar>
                <PDetailedSidebar>????????????</PDetailedSidebar>
                <PDetailedSidebar>?????? ??????</PDetailedSidebar>
              </DetailedContainerSidebar>
            </SidebarContainer>
            <DetailedContainer2>
              <DetailedContainerInfo>
                <PDetailedInfo>????????????</PDetailedInfo>
                <PDetailedInfo>2?????????</PDetailedInfo>
                <PDetailedInfo>?????? 1???</PDetailedInfo>
                <PDetailedInfo>????????????</PDetailedInfo>
                <PDetailedInfo>2021-09-28 10:00 ~ 12:00</PDetailedInfo>
                <PDetailedInfo>5???</PDetailedInfo>
                <PDetailedInfo>????????? ?????? ????????????</PDetailedInfo>
              </DetailedContainerInfo>
            </DetailedContainer2>
          </DetailedContainer>
          <OverviewContainer>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>????????? ????????????</P>
                <P>10???30??? ~ 10???40???</P>
                <P>????????????</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon>
                <FontAwesomeIcon icon={faChevronDown} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>????????? ????????????</P>
                <P>10???30??? ~ 10???40???</P>
                <P>????????????</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon>
                <FontAwesomeIcon icon={faChevronDown} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
          </OverviewContainer>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default MyPage;
