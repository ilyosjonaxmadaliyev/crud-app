import { useDispatch, useSelector } from "react-redux";
import FormInput from "./FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/reduser";

function CreateForm({ btn_name }) {
  const [imgUrl, setUrl] = useState("");
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userItems } = useSelector((state) => state.userState);
  const userInfo = {
    id: userItems?.length + 1,
    imgUrl,
    first_name,
    last_name,
    job,
    dob,
    country,
    email,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(userInfo));
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
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
