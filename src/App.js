import "./App.css";
import Header from "./Components/Header/Header";
import GameGrid from "./Components/GameData/GameGrid";
import SearchBar from "./Components/SearchBar/SearchBar";
import Data from "./Components/Data/Data";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Data />
      <GameGrid />
    </>
  );
}

export default App;
