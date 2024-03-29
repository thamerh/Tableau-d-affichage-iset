import React, { useState } from 'react'
import axios from "axios";
import { useHistory,Link } from 'react-router-dom';

const RegisterAdmin= () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cin, setCin] = useState('');
    const [code_previlege, setCode_previlege] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const history = useHistory();

    const RegisterAdmin= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/RegisterAdmin', {
                name: name,
                email: email,
                cin: cin,
                code_previlege: code_previlege,
                password: password,
                confPassword: confPassword
                
            });
            history.push("/loginAdmin");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            }
        }
    }

    return (
        <div>
        <section className=" is-fullheight is-fullwidth" >

                <div className="container height">
                    <div className="columns is-centered ">
                        <div className="column is-4-desktop">
                            <form onSubmit={RegisterAdmin} className="box">
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
                                    <label className="label">Code Privilege:</label>
                                    
                                        <input type="text" className="input is-rounded" placeholder="Numero d'insecrit"
                                            value={code_previlege} onChange={(e) => setCode_previlege(e.target.value)} />
                                    
                                </div>
                                <div className="field ">
                                    <label className="label">CIN:</label>
                                    <div className="controls">
                                        <input type="text" className="input is-rounded" placeholder="CIN"
                                            value={cin} onChange={(e) => setCin(e.target.value)} />
                                    </div>
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
                                    <Link to="/loginAdmin" className="has-text-grey ">you have an account?</Link>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
         
        </section>
        </div>
    )
}

export default RegisterAdmin
