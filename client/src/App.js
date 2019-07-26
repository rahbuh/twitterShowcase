import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import Random from "./components/Random";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/random" component={Random} />
        </main>
      </div>
    </Router>
  );
};
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <main>
//             <Route exact path="/" component={Home} />
//             <Route path="/search" component={Search} />
//             <Route path="/random" component={Random} />
//           </main>
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
