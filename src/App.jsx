import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="w-screen h-screen">
      <nav className="flex flex-row items-center justify-center h-16">
        <div className="[&>a]:mx-3 [&>a]:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>
      <div
        className="flex flex-col items-center justify-center
                      h-[calc(100%-theme(space.16))]"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
