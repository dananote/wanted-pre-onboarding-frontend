import { Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import Globalstyle from "./GlobalStyle";

function App() {
  return (
    <>
      <Layout>
        <Globalstyle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
