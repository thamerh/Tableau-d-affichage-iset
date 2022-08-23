import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [chefusers, setChef] = useState([]);
  const [studentusers, setStudent] = useState([]);

  useEffect(() => {
    getChefUsers();
    getStudentUsers();
  }, []);

  const getChefUsers = async () => {
    const response = await axios.get("http://localhost:5000/ChefUsers");
    console.log(response.data)
    setChef(response.data);

  };
  const getStudentUsers = async () => {
    const response = await axios.get("http://localhost:5000/StudentUsers");
    console.log(response.data)
    setStudent(response.data);

  };
  const deleteChefUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/ChefUsers/${id}`);
      getChefUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStudentUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/StudentUsers/${id}`);
      getStudentUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (    
      
      <div className=" mt-5 is-centered w-100" >
      <div className="column w-100"  style={{overflowX:"auto"}}>
        <h1 style={{textAlign:"center",  fontSize: "25px",padding: "10px",color: "rgb(231, 226, 226)",fontFamily: 'Pacifico'}}> Chef Department</h1>
        <table className="table ">
          <thead>
            <tr>
              <th>CIN</th>
              <th>Name</th>
              <th>Email</th>
              <th>PASSWORD</th>
              
            </tr>
          </thead>
          <tbody>
            {chefusers.map((user) => (
              <tr key={user.id}>
                <td>{user.cin}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password.slice(0,10)}...</td>
                <td>
                  <Link
                    to={`editChef/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteChefUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 style={{textAlign:"center",  fontSize: "25px",padding: "10px",color: "rgb(231, 226, 226)",fontFamily: 'Pacifico'}}> Student</h1>
        <table className="table is-striped is-fullwidth m-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>PASSWORD</th>
              
            </tr>
          </thead>
          <tbody>
            {studentusers.map((user,index) => (
              <tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password.slice(0,10)}....</td>
                <td>
                  <Link
                    to={`editStudent/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteStudentUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default UserList;
