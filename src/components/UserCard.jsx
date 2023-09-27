import { MdOutlineDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { userImage } from "../assets";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/reduser";

function UserCard({
  id,
  imgUrl,
  first_name,
  last_name,
  job,
  dob,
  country,
  email,
} )
{
  
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeItem({ id: id }));
  };

  return (
    <div className="card bg-base-200 shadow-xl mb-3">
      <div className="px-4 py-2">
        <div className=" md:flex md:items-center md:justify-between">
          <img
            className="w-28 h-28 mr-3 rounded-2xl mb-4 md:mb-0"
            src={imgUrl ? imgUrl : userImage}
            alt="Movie"
          />
          <div className="flex md:flex-col">
            <h3 className="sm:text-lg mr-2">Full name:</h3>
            <h3 className="sm:text-lg text-slate-400">
              {first_name} {last_name}
            </h3>
          </div>
          <div className="flex md:flex-col">
            <h3 className="sm:text-lg mr-2">Job:</h3>
            <h3 className="sm:text-lg text-slate-400">{job}</h3>
          </div>
          <div className="flex md:flex-col">
            <h3 className="sm:text-lg mr-2">D.O.B:</h3>
            <h3 className="sm:text-lg text-slate-400">{dob}</h3>
          </div>
          <div className="flex md:flex-col">
            <h3 className="sm:text-lg mr-2">Country:</h3>
            <h3 className="sm:text-lg text-slate-400">{country}</h3>
          </div>
          <div className="flex md:flex-col">
            <h3 className="sm:text-lg mr-2">Email:</h3>
            <h3 className="sm:text-lg text-slate-400">{email}</h3>
          </div>
          <div className="card-actions pt-6 flex justify-end">
            <div className="flex items-centr gap-3">
              <Link to={`/update/${id}`} className="btn btn-warning btn-sm">
                <GrUpdate />
              </Link>
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-error btn-sm"
              >
                <MdOutlineDeleteForever />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
