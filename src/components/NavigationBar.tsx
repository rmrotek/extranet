import { Box, ListItemButton, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useUserData } from '../atoms';

export const NavigationBar = () => {
  const { userData } = useUserData();
  const isAdmin = userData?.role === 'ADMIN';
  return (
    <Box sx={{}}>
      <ListItemButton component={RouterLink} to="/">
        <Typography variant="h6">Pulpit</Typography>
      </ListItemButton>

      {isAdmin && (
        <>
          <ListItemButton component={RouterLink} to="/users">
            <Typography variant="h6">Użytkownicy</Typography>
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/groups">
            <Typography variant="h6">Grupy</Typography>
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/subjects">
            <Typography variant="h6">Przedmioty</Typography>
          </ListItemButton>
        </>
      )}

      <ListItemButton component={RouterLink} to="/profile">
        <Typography variant="h6">Profil</Typography>
      </ListItemButton>
      <ListItemButton component={RouterLink} to="/schedule">
        <Typography variant="h6">Plan zajęć</Typography>
      </ListItemButton>
    </Box>
  );
};
