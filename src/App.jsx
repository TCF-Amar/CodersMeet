import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Landing,Home,Explore,NotFound,Profile,ProfileUpdate,Search,Settings,SignIn,SignUp} from "./pages";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import PublicHeader from "./components/PublicHeader";
import Footer from "./components/Footer";
import { authCheck } from "./configs/authCheck";

function App() {
  const user = authCheck(); // 🔹 Firebase auth check function
  const theme = useSelector((state) => state.theme.theme); // 🔹 Redux theme state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 🔹 Sidebar state

  // ✅ Dark mode toggle effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // ✅ Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isSidebarOpen]);

  // ✅ Sidebar toggle functions
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Router>
        {/* ✅ If user is logged in, show the authenticated layout */}
        {user ? (
          <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className="flex-1 flex flex-col w-full relative">
              <MobileHeader toggleSidebar={toggleSidebar} />
              <main className="flex-1 overflow-y-auto pt-16 md:pt-0 relative">
                <div className="max-w-7xl mx-auto p-4 md:p-6">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Navigate to="/" />} />
                    <Route path="/signup" element={<Navigate to="/" />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/update" element={<ProfileUpdate />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Footer />
              </main>
            </div>
          </div>
        ) : (
          /* ✅ If user is not logged in, show the public layout */
          <div className="min-h-screen pt-16 flex">
            <PublicHeader />
            <main className="flex-1 overflow-y-auto">
              <div className="mx-auto">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </main>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
