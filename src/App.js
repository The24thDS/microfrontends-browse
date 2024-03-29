import { NavLink, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import CustomBrowserRouter from "./CustomBrowserRouter";
import React from "react";

const App = ({
  history = createBrowserHistory(),
  restaurantsPath = "",
  basename = "",
}) => {
  return (
    <CustomBrowserRouter basename={basename} history={history}>
      <nav>
        Browse Page Nav:{" "}
        <NavLink to={`/../${restaurantsPath}`}>Restaurants</NavLink>{" "}
        <NavLink to="/../">Back to the main page</NavLink>
      </nav>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to={`/../${restaurantsPath}/1`}>Restaurant 1</Link> <br />
                <Link to={`/../${restaurantsPath}/2`}>Restaurant 2</Link> <br />
                <Link to={`/../${restaurantsPath}/3`}>Restaurant 3</Link>
              </>
            }
          />
        </Routes>
      </div>
    </CustomBrowserRouter>
  );
};

export default App;
