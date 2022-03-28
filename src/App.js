import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

import Dashboard from "./Components/pages/Dashboard";
import Users from "./Components/pages/Users";
import Messages from "./Components/pages/Messages";
import FileManager from "./Components/pages/FileManager";
import Analytics from "./Components/pages/Analytics";
import Order from "./Components/pages/Order";
import Saved from "./Components/pages/Saved";
import Setting from "./Components/pages/Setting";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route component={Link} path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;








// import { Container,NavDropdown, Navbar, Nav } from 'react-bootstrap';
// import './App.css';
// import {BrowserRouter, Route, Routes, Link, Fullrecord} from 'react-router-dom';//Routing
// import Form from './page/Form';
// import FullRecord from './page/FullRecord';
// import React, {useState} from "react";


// function App() {

//   return (
//     <div> 

     



      {/* <BrowserRouter>
      <Navbar fixed="top" bg="primary"variant="dark">
  <Container fluid style={{marginLeft : "100px"}}>
    <Navbar.Brand href="#">Tnplab</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link ><Link style={{ color: "magenta", textDecoration: "none", margin: "0px 20px 0px 20px" }} to="/">Home</Link></Nav.Link>
        <Nav.Link ><Link style={{ color: "magenta", textDecoration: "none", margin: "0px 20px 0px 20px" }} to="/Full">Full Record</Link></Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item ><Link style={{ color: "magenta", textDecoration: "none", margin: "0px 20px 0px 20px" }} to="/Empolyee">Employee</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link style={{ color: "magenta", textDecoration: "none", margin: "0px 20px 0px 20px" }} to="/Designation">Designation</Link></NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
        // </NavDropdown>
        
      // </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        /> */}
        {/* <Button variant="outline-success">Search</Button> */}
      {/* </Form> */}
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

// <Routes>
// <Route path="/"
//            element={
//               <Form />
//            } 
//            >
//           </Route>
//           <Route path="/">
//             <FullRecord />
//           </Route>
//           {/* <Route path="/">
//             <Home />
//           </Route> */}
// </Routes>
// </BrowserRouter> */}
//     </div>
//   );
// }

// export default App;
