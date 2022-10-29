import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './pages/Schedule';
import CoursesPage from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<CoursesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
