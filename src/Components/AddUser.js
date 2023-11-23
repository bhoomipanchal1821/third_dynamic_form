import { useState } from "react";
import "./AddUser.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

const AddUser = (props) => {
    // following both usestate is for usernmae and age
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // condition for username and age
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){

    }
    // another condition for ages
    if(+enteredAge < 1){
        return;
    }
   props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChagneHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div>
      <div className="conatiner mx-auto mt-5 rounded-3">
        <form onSubmit={addUserHandler}>
          <div className="row mx-auto container">
            <label for="username" className="fw-bold mt-3 ">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              className="mt-2"
              onChange={usernameChangeHandler}
            />
            <label for="age" className="fw-bold mt-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              className="mt-2"
              onChange={ageChagneHandler}
            />
            <Button type="submit">Add User</Button>
          </div>
        </form>
       
      </div>
      <Card />
    </div>
  );
};

export default AddUser;
