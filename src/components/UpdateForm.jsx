import { useDispatch, useSelector } from "react-redux";
import FormInput from "./FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editItem } from "../redux/reduser";
import { useParams } from "react-router-dom";

function CreateForm({ btn_name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { userItems } = useSelector((state) => state.userState);
  const filteredUser = userItems.filter((user) => user.id == id);

  const [imgUrl, setUrl] = useState(filteredUser[0].imgUrl);
  const [first_name, setFname] = useState(filteredUser[0].first_name);
  const [last_name, setLname] = useState(filteredUser[0].last_name);
  const [email, setEmail] = useState(filteredUser[0].email);
  const [job, setJob] = useState(filteredUser[0].job);
  const [dob, setDob] = useState(filteredUser[0].dob);
  const [country, setCountry] = useState(filteredUser[0].country);

  const updatedUserInfo = {
    id,
    imgUrl,
    first_name,
    last_name,
    job,
    dob,
    country,
    email,
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editItem({ ...updatedUserInfo }));
    navigate("/");
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="w-[600px] p-4 bg-base-200 shadow-lg rounded-xl"
    >
      <div className="grid sm:grid-cols-2 gap-x-4 ">
        <FormInput
          type="text"
          label="First Name"
          name="first"
          state={first_name}
          setState={setFname}
        />
        <FormInput
          type="text"
          label="Last Name"
          name="last"
          state={last_name}
          setState={setLname}
        />
        <FormInput
          type="email"
          label="Email"
          name="identifer"
          state={email}
          setState={setEmail}
        />
        <FormInput
          type="text"
          label="Job"
          name="job"
          state={job}
          setState={setJob}
        />
        <FormInput
          type="date"
          label="D.O.B"
          name="dob"
          state={dob}
          setState={setDob}
        />
        <FormInput
          type="text"
          label="Country"
          name="country"
          state={country}
          setState={setCountry}
        />
      </div>
      <FormInput
        type="url"
        label="Person image"
        name="dob"
        state={imgUrl}
        setState={setUrl}
        required={false}
      />
      <button type="submit" className="btn btn-primary btn-block mt-4">
        {btn_name}
      </button>
    </form>
  );
}

export default CreateForm;
