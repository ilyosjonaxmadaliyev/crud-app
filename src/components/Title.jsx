import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Title() {
  const location = useLocation();
  const [state, setState] = useState("");
  const { userCount } = useSelector((state) => state.userState);

  const locationCollback = useCallback(() => {
    if (location.pathname == "/") {
      setState(userCount === 0 ? "Oops 🙉" : "All users");
    } else if (location.pathname == "/create") {
      setState("Create new User");
    } else if (location.pathname == "/login") {
      setState("Login page");
    } else {
      setState("Update details");
    }
  }, [location.pathname]);

  useEffect(() => {
    locationCollback();
  }, [locationCollback]);

  return (
    <>
      <h1 className="sm:text-2xl">{state}</h1>
    </>
  );
}

export default Title;
