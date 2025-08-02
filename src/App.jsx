import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import './index.css'; 
import Home from "./pages/Home";
import { EventForm } from "./components/EventForm";
import { EventProvider } from "./context/EventContext";
import EventList from "./components/EventList";
import Features from "./pages/Features";
import EventDetails from "./components/EventDetail";
import RecentActivity from "./pages/RecentActivity";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/add-event"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  
  return (
      <EventProvider>
        {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/view-event" element={<EventList />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/recent-activity" element={<RecentActivity />} />
        
      </Routes>
       {/* {location.pathname === "/" && <Footer />} */}
    </EventProvider>
  );
}

export default App;


