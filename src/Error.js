import React from "react";
import { Link } from "react-router-dom";

const Error = () =>{
  return( 
          <>
            <h4>Error 404</h4>
            <Link to="/" className="btn">Back</Link>
           </>
         )
}

export default Error;