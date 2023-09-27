import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";

function Home() {
  const { userItems } = useSelector((state) => state.userState);
  return (
    <>
      {userItems.length ? (
        userItems?.map((user) => {
          const {
            id,
            imgUrl,
            first_name,
            last_name,
            job,
            dob,
            country,
            email,
          } = user;
          return (
            <UserCard
              key={id}
              id={id}
              imgUrl={imgUrl}
              first_name={first_name}
              last_name={last_name}
              job={job}
              dob={dob}
              country={country}
              email={email}
            />
          );
        })
      ) : (
        <div className="flex-col">
          <h1 className="sm:text-xl md:text-2xl text-center">
            Unfortunately, you have no information!
          </h1>
          <h1 className="sm:text-xl md:text-2xl text-center">
            Create a new reference by going to the Create section
          </h1>
        </div>
      )}
    </>
  );
}

export default Home;
