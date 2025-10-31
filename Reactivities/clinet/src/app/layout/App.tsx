import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import ActivityDashBoard from "../../features/activities/ActivityDashBoard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities,isPending} = useActivities();
   //useEffect
   
  // useEffect(() => {
  //   axios
  //     .get<Activity[]>("https://localhost:5001/api/activities")
  //     .then((response) => setActivities(response.data));

  //   return () => {};
  // }, []);

  // useQuery
  



  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
    setEditMode(false);
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
    setEditMode(false);
  };
  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };
 
  const handleFormClose = () => {
    setSelectedActivity(undefined);
    setEditMode(false);
  };
  return (
    <Box sx={{bgcolor:"green",minHeight:'100vh'}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending?(<Typography>Loading...</Typography>):(
          <ActivityDashBoard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
        />
      )}
        
      </Container>
    </Box>
  );
}

export default App;
