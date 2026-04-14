import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import SentRequests from "./pages/SentRequests";

import ProtectedRoute from "./components/ProtectedRoute";

function App(){

return(

<Router>

<Routes>

{/* default page */}
<Route path="/" element={<Signup/>} />

{/* login page */}
<Route path="/login" element={<Login/>} />

<Route path="/signup" element={<Signup/>} />

<Route 
path="/profile" 
element={
<ProtectedRoute>
<Profile/>
</ProtectedRoute>
}
/>

<Route 
path="/search" 
element={
<ProtectedRoute>
<Search/>
</ProtectedRoute>
}
/>

<Route 
path="/dashboard" 
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

<Route 
path="/sent" 
element={
<ProtectedRoute>
<SentRequests/>
</ProtectedRoute>
}
/>

</Routes>

</Router>

);

}

export default App;