import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AddUser from "./Components/AddUser";
import UsersList from './Components/Users/UsersList';


const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return(
    <div>
      <AddUser  onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
    </div>
  ) 
   
 
}

export default App;
