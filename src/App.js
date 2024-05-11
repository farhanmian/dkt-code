import "./App.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import "@fontsource/roboto-condensed"; // Defaults to weight 400
import "@fontsource/roboto-condensed/700.css"; // Specify weight
import "@fontsource/roboto-condensed/400-italic.css"; // Specify weight and style
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Product />
    </div>
  );
}

export default App;
