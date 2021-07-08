import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import Contact from "./Contact";

export default function Cards() {
  return (
    <div>
      <div className="row"  >
            <div className="col-sm-3">
            <img width={80} height={100}
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
  
  <div className="card-body">
       <a href="About.js" className="btn btn-primary">Home</a> &nbsp;
        <a href="About" className="btn btn-primary">About</a> &nbsp;
        <a href="Contact" className="btn btn-primary">Contact</a>
    
  </div>
</div>
    </div>
    </div>
  )
}
