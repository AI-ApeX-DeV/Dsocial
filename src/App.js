import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./component/Home1";
import { SocoinProvider } from "./context/ContextProvider";
import Homi from "./component/Homi";
import Register from "./component/Register";
import MyComponent from "./component/Interest";
import Post from "./component/Post";
import PostComponent from "./component/PostComponent";
function App() {
  return (
    <BrowserRouter>
      <div>
        <SocoinProvider>
          <Routes>
            <Route path="/" element={<Home /*state = {state}*/ />} />
            <Route path="/home" element={<Home1 /*state = {state}*/ />} />
            <Route path="/homi" element={<Homi /*state = {state}*/ />} />

            <Route path="/post" element={<Post /*state = {state}*/ />} />  
                    <Route path="/posts" element={<PostComponent /*state = {state}*/ />} />

            <Route
              path="/register"
              element={<Register /*state = {state}*/ />}
            />
            <Route
              path="/interest"
              element={<MyComponent /*state = {state}*/ />}
            />
          </Routes>
          {/* {<RegisterPage/>}  */}
        </SocoinProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
