import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../practice_react/vite-project/src/Components/Navbar";
import { useState } from "react";

export default function App () {
  const [users, setUsers] = useState ([]);



return (
  <div className="p-6">
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route>
        
      </Route>
     </Routes>
    </BrowserRouter>
  </div>
)

}