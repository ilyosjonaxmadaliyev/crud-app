import { Link } from "react-router-dom";
import  Title  from "./Title";
import { BsMoonFill, BsPerson, BsSunFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function NavbarSm ( { handleTheme } )
{
  const { userCount } = useSelector((state) => state.userState);
  return (
    <div className="bg-base-200 sm:hidden ">
      <div className="flex align-elements items-center justify-between py-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            <Link to={"/"} className="mb-2">
              Home
            </Link>
            <Link to={"/create"} className="mb-2">
              Create
            </Link>
          </ul>
        </div>
        <div className="text-center">
          <Title />
        </div>
        <div className="flex items-center gap-4">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} className="text-end" />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <div className="indicator">
            <BsPerson className="w-6 h-6" />
            <span className="badge badge-sm badge-success indicator-item">
              {userCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSm;
