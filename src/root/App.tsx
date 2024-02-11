import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { ThemeProvider } from './ThemeProvider';
import { Dashboard } from '../views/Dashboard';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RequireAuth } from './RequireAuth';
import { AuthProvider } from './AuthProvider';
import { Box } from '@mui/material';
import { Users } from '../views/Users';
import { Groups } from '../views/Groups';
import { Schedule } from '../views/Schedule';
import { Subjects } from '../views/Subjects';
import { Profile } from '../views/Profile';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='pl'>
            <Box
              sx={{ backgroundColor: 'rgb(238, 238, 238)', height: '100vh' }}
            >
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  element={
                    <RequireAuth>
                      <MainPage />
                    </RequireAuth>
                  }
                >
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/subjects" element={<Subjects />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
              </Routes>
            </Box>
          </LocalizationProvider>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
