import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Avengers from "./components/Avengers";

import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End of Trending Section */}

      <div className="avengers">
        <Avengers />
      </div>
    </div>
  );
}

export default App;
