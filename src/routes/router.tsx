import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "../pages";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};
