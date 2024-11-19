import Explore from "./Components/Explore";
import FindCoder from "./Components/FindCoder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hire from "./Components/Hire";
import Dev from "./Components/Dev";
import Challenge from "./Components/Challenge";
import Home from "./CRUD/Home";
import CreateUser from "./CRUD/CreateUser";
import User from "./CRUD/User";
import Edituser from "./CRUD/Edituser";
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <FindCoder />
        <Routes>
          <Route element={<Explore/>} path="/explore"></Route>
          <Route element={<Hire/>} path="/hire"></Route>
          <Route element={<Dev/>} path="/dev"></Route>
          <Route element={<Challenge/>} path="/challenge"></Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Home />
        <Routes>

          <Route element={<CreateUser/>} path="/"></Route>
          <Route element={<User/>} path="/user"></Route>
          <Route element={<Edituser/>} path="/edit/:abc"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
