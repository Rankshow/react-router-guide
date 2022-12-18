// import React, { Children } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import People from './product';
import Person from './person';
import NavBar from "./Navbar";


const SetUp = () => {
    return(
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<Error />} />
                    <Route path="person/:id" element={<Person />} />
                    <Route path="/people" element={<People />}/>
                </Routes>
            </Router>
        </>
    )
}
export default SetUp;