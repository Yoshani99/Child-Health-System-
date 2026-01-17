import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/SignIn";
import "./App.css";
import SignupPage from "./page/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
