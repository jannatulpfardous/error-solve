import React from 'react';
import {useHistory} from "react-router-dom"

const LoggedOut = () => {

    const history = useHistory()

    const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
    return (
        <div>
           
           <div>

           <button onClick={()=>logout()} className="btn btn-danger"> Log Out </button>
           
           
           </div>
          
            
        </div>
    );
};

export default LoggedOut;