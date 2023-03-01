import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { InProgress } from "./Pages/InProgress/InProgress";
import { Pending } from "./Pages/Pending/Pending";
import { Completed } from "./Pages/Completed/Completed";
import { TodoProvider } from "./context/TodosContext";
import { Navbar } from "./components/NavBar/Navbar";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/inProgress" element={<InProgress />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
