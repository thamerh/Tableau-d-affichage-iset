import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditStudentUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/StudentUsers/${id}`, {  
        name,
        email,
        password
      });
     history.push("/ManegmentUser");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/StudentUsers/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.password);
    
  };
  return (
    <section className=" is-fullheight is-fullwidth" >
      <div className="hero-body">
         <div className="container">
           <div className="columns is-centered">
              <div className="column is-6-desktop">
              <h1 style={{textAlign:"center",  fontSize: "25px",padding: "10px",color: "rgb(231, 226, 226)",fontFamily: 'Pacifico'}}> Update Chef Department</h1>
              <form onSubmit={updateUser} className='w-100 p-3 col-md-6' >

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">password</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
              </div>
            </div>
         </div>
       </div>
     </section>
  );
};

export default EditStudentUser;
