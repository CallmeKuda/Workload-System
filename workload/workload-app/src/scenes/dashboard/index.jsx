import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import Calendar from "../calendar/calendar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download worload sheet
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
   
        {/* Teaching */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
           Teaching Workload
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
           
            <Typography variant="h2" fontWeight="600">
           590.1
          </Typography> 
          <Typography>Hours /Semester</Typography>
          </Box>
        </Box>

       {/* Research*/}
       <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
          Research Workload
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
           <Typography variant="h2" fontWeight="600">
           267.0
          </Typography> 
          <Typography>Hours /Semester</Typography>
          </Box>
        </Box>
       
        {/* Research*/}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
           Admin Workload
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
           <Typography variant="h2" fontWeight="600">
           43.0
          </Typography> 
          <Typography>Hours /Semester</Typography>
          </Box>

          
        </Box>

         {/* Research*/}
         <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
           Community Service
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
           <Typography variant="h2" fontWeight="600">
           20.0
          </Typography> 
          <Typography>Hours /Semester</Typography>
          </Box>

          
        </Box>
        <Box height="200px">
            <Calendar isDashboard={true} />
          </Box>


          
        </Box>
      </Box>
   
  );
};

export default Dashboard;