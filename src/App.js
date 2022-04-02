import Description from "./Description";
import Container from "./Container";
import { CssContextProvider } from "./context/cssContext";

function App() {
  return (
    <div className="App">
      <CssContextProvider>
        <Container />
      </CssContextProvider>
    </div>
  );
}

export default App;
