import React, { useState } from "react";
import programmerLogo from '../../assets/undraw_programming_65t2.svg'

const UserLogin = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);

    const onSubmit = () => {
        console.log(userName);
        console.log(password);
    }

return(
    <>
    <div className="d-flex position-relative w-100 vh-100 m-0 mw-100 justify-content-between">
        <div className="w-50 d-flex flex-column">
            <div className="logo-oval">
                <h2 className="text-white text-center logo-text">LOGO</h2>
            </div>
            <div className="h-100 d-flex align-items-center w-100">
                <div className="d-flex flex-column gap-3 w-50 m-auto">
                    <h1>WELCOME</h1>
                    <div className="input-wrapper">
                        <i className="fa fa-user start-icon"/>
                        <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                     <div className="input-wrapper">
                        <i className="fa fa-unlock-alt start-icon"/>
                        <input type={passwordShow ? "text" : 'password'}  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <i className={`fa ${passwordShow ? "fa-eye-slash": "fa-eye"} end-icon`} onClick={() => setPasswordShow(!passwordShow)}/> 
                    </div>
                    <button className="border-0 ml-auto">Forget Password?</button>
                    <button className="btn btn-primary" onClick={onSubmit}>Sign in</button>
                 </div>
            </div>
            
        </div>
        <div className="w-50">
            <div className="logo-gif-oval position-relative">
                <div className="d-flex flex-column">
                    <div className="m-3 d-flex flex-row-reverse">
                        <button className="btn btn-primary register-btn ">Register</button>
                    </div>
                    <div className="m-auto">
                        <img src={programmerLogo} width={500} height={600}/>
                    </div>
                </div>
                
            </div>
        </div>
         
    </div>
       
    </>
)

}

export default UserLogin;