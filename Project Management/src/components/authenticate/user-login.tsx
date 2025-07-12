import React from "react";
import programmerLogo from '../../assets/undraw_programming_65t2.svg'

const UserLogin = () => {


return(
    <>
    <div className="d-flex position-relative w-100 vh-100 m-0 mw-100 justify-content-between">
        <div className="w-50 d-flex flex-column">
            <div className="logo-oval">
                <h2 className="text-white text-center logo-text">LOGO</h2>
            </div>
            <div className="d-flex flex-column gap-3 w-50 h-50">
                <h1>WELCOME</h1>
                <input type="text"/>
                <input type="text"/>
                <button className="border-0 ml-auto">Forget Password?</button>
                <button className="btn btn-primary">Sign in</button>
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