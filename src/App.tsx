import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import CourseInfoPage from "./pages/CourseInfoPage/CourseInfoPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/course-info/:courseId" element={<CourseInfoPage />} />
        </Routes>
    );
}

export default App;
