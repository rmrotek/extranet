import { Box, Paper } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { UserInfo } from '../../components/UserInfo';
import { Logo } from '../../components/Logo';
import { NavigationBar } from '../../components/NavigationBar';

interface Props extends PropsWithChildren {}

export const MainPage = ({ children }: Props) => {
  return (
    <Box
      sx={{
        padding: '1em 2em',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        height: '95%',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Logo />
        </Box>
        <Box>
          <UserInfo />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', height: '100%', gap: 3 }}>
        <Box sx={{ width: '20vw', height: '100%' }}>
          <Paper sx={{ height: '100%', padding: 1 }}>
            <NavigationBar />
          </Paper>
        </Box>
        <Box sx={{ width: '80vw', height: '100%' }}>
          <Paper sx={{ width: '100%', height: '100%', padding: 1 }}>
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
