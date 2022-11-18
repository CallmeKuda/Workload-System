import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Teaching from "./scenes/teaching";
import Research from "./scenes/research";
import Admin from "./scenes/admin";
import Community_service from "./scenes/community_service";
import Messages from "./scenes/messages";
import Calendar from "./scenes/calendar/calendar";
import "./style.scss";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
    
    <Routes>
      
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/research" element={<Research />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/community_service" element={<Community_service />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
 </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default App;
