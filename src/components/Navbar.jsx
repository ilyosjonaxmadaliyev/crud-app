import { BsMoonFill, BsPerson,  BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import NavbarSm from "./NavbarSm";
import { useSelector } from "react-redux";

const themes = {
  light: "light",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme" || themes.light);
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === dark ? light : dark;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [ theme ] );
  
  const {userCount} = useSelector( ( state ) => state.userState );

  return (
    <>
          <NavbarSm handleTheme={ handleTheme} />
      <nav className="bg-base-200 hidden sm:block">
        <div className="flex align-elements items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className="btn btn-primary btn-sm capitalize text-2xl"
            >
              IUsers
            </Link>
            <Link to={"/create"} className="text-2xl capitalize">
              Create +
            </Link>
          </div>
          <div>
            <Title />
          </div>
          <div className="flex items-center gap-4">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onClick={handleTheme}
                className="text-end"
              />
              <BsSunFill className="swap-on h-6 w-6" />
              <BsMoonFill className="swap-off h-6 w-6" />
            </label>
            <div className="indicator">
              <BsPerson className="w-8 h-8" />
              <span className="badge badge-sm badge-success indicator-item">
                {userCount}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
