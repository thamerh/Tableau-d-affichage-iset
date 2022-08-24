import React, { useState} from "react";
import axios from "axios";
import { Link,useHistory} from "react-router-dom";
import ChefSearchBar from "./ChefSearchBar"
const ChefTable = ({ data }) => {
    const [chefusers, setChef] = useState([]);
   const history=useHistory();

   
  const deleteChefUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/ChefUsers/${id}`);
      history.push("/dashboardAdmin");
    
    } catch (error) {
      console.log(error);
    }
  };

    return (
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
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.cin}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password.slice(0,15)}...</td>
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
    );
  };
  
  export default ChefTable;