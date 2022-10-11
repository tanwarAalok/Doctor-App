import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Export from "./Export";
const UserContext = createContext();
function App() {
  const [show, setShow] = useState(false);
  let u = localStorage.getItem("user");
  let user = JSON.parse(u);
  return (
    <UserContext.Provider value={{ show: show, setShow: setShow }}>
      <div className="app-main">
        <Router>
         <Export show={show}/>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };

