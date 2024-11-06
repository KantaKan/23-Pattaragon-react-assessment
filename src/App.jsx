import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../practice_react/vite-project/src/Components/Navbar";
import Home from "../../React-Assessment-P/src/pages/Home";
import HomeAdmin from "./Pages/Home-Admin";
import HomeUser from "./Pages/Home-User";
import Owner from "./Pages/Owner";


export default function App () {
  const [users, setUsers] = useState ([]);



return (
  <div className="p-6">
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/user" element={<HomeUser />} />
     <Route path="/admin" element={<HomeAdmin />} />
     <Route path="/owner" element={<Owner />} > 
        
      </Route>
     </Routes>
    </BrowserRouter>
  </div>
)

}