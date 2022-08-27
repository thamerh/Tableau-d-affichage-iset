import React, { useState} from "react";
import axios from "axios";
import { Link,useHistory} from "react-router-dom";
import ChefSearchBar from "./ChefSearchBar"
const StudentTable = ({ data }) => {
    const [chefusers, setChef] = useState([]);
   const history=useHistory();

   const deleteStudentUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/StudentUsers/${id}`);
      history.push("/dashboardAdmin");
    } catch (error) {
      console.log(error);
    }
  };
  
    return (
        <table className="table " style={{overflowX:"auto"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>PASSWORD</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((user,index) => (
            <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password.slice(0,15)}...</td>
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
    );
  };
  
  export default StudentTable;