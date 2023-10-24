import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import Footer from "./Components/Footer";
import WelcomeAlert from "./Components/WelcomeAlert";
import AllTheBooks from "./Components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <WelcomeAlert />
      <AllTheBooks />
      <Footer />
    </div>
  );
}

export default App;
