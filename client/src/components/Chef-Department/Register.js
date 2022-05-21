import React, { useState } from 'react'
import axios from "axios";
import { useHistory,Link } from 'react-router-dom';
import './Chef-style.css';

const RegisterChef = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [code_dautorisation, setCode_dautorisation] = useState('');
    const [cin, setCin] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();
    const [dep, setDep] = useState("");

    function onChangeValue(event) {
      setDep(event.target.value);
      console.log(event.target.value);
      //alert((event.target.value));
    }

    const RegisterEtu = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/RegisterChef', {
                name: name,
                email: email,
                code_dautorisation: code_dautorisation,
                cin: cin,
                nom_dep:dep,
                password: password,
                confPassword: confPassword
            });
            history.push("/LoginChef");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            }
        }
    }

    return (
        <div style={ HeaderStyle }>
        <section className=" is-fullheight is-fullwidth" >

                <div className="container height">
                    <div className="columns is-centered ">
                        <div className="column is-4-desktop">
                            <form onSubmit={RegisterEtu} className="box">
                            <h1 className="has-text-centered  google-font">Register</h1>
                              
                                <div className="field ">
                                    <label className="label">Name</label>
                                    
                                        <input type="text" className="input is-rounded" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    
                                </div>
                                <div className="field ">
                                    <label className="label">Email</label>
                                
                                        <input type="text" className="input is-rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                
                                </div>
                                <div className="field">
                                    <label className="label">Code d'Authorization:</label>
                                    
                                        <input type="text" className="input is-rounded" placeholder="Numero d'insecrit"
                                            value={code_dautorisation} onChange={(e) => setCode_dautorisation(e.target.value)} />
                                    
                                </div>
                                <div className="field ">
                                    <label className="label">CIN:</label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="CIN"
                                            value={cin} onChange={(e) => setCin(e.target.value)} />
                                    </div>
                                </div>
                                <div onChange={onChangeValue}>
                               <span className="radio-style">  <input type="radio" value="TI" name="dep" checked={dep === "TI"} /> TI</span>
                               <span className="radio-style"> <input type="radio" value="GM" name="dep" checked={dep === "GM"} /> GM</span>
                               <span className="radio-style"> <input type="radio" value="GE" name="dep" checked={dep === "GE"} /> GE</span>
                               <span className="radio-style"> <input type="radio" value="GP" name="dep" checked={dep === "GP"} /> GP</span>
                               <span className="radio-style"> <input type="radio" value="AA" name="dep" checked={dep === "AA"} /> AA</span>  
                                </div>
                                <div className="field ">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input is-rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field ">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input is-rounded" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field ">
                                    <button className="button is-info is-rounded is-fullwidth">Register</button>
                                </div>
                                
                                <div className="field mt-5 has-text-centered ">
                                    <Link to="/loginChef" className="has-text-grey ">you have an account?</Link>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
         
        </section>
        </div>
    )
}

export default RegisterChef
const HeaderStyle = {
    width: "100%",
    height: "100%",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}