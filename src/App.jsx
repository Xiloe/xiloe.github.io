import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
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
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            About
          </NavLink>
        </div>
      </nav>
      <div
        className="flex flex-col items-center justify-center
                      h-[calc(100%-theme(space.16))]"
      >
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
