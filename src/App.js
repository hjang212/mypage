import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SearchArea from "./components/SearchArea";
import MyPage from "./components/MyPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBar />
      <SearchArea />
      <MyPage />
    </>
  );
}

export default App;
