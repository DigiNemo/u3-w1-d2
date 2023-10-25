import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import Footer from "./Components/Footer";
import WelcomeAlert from "./Components/WelcomeAlert";
import AllTheBooks from "./Components/AllTheBooks";
import SingleBook from "./Components/SingleBook";

function App() {
  return (
    <div className="App">
      <MyNav />
      <WelcomeAlert />
      <SingleBook />
      <Footer />
    </div>
  );
}

export default App;
