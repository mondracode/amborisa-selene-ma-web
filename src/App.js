import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './pages/Schedule';
import CoursesPage from "./pages/Courses";
import Home from "./pages/Home";
import AcademicHistory from "./pages/AcademicHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<AcademicHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
