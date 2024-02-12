import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { ThemeProvider } from './ThemeProvider';
// import { Dashboard } from '../views/Dashboard';
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
import { plPL } from '@mui/x-date-pickers/locales';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <LocalizationProvider
              dateAdapter={AdapterMoment}
              localeText={
                plPL.components.MuiLocalizationProvider.defaultProps.localeText
              }
              adapterLocale="pl"
            >
              <SnackbarProvider autoHideDuration={5000} dense hideIconVariant>
                <Box
                  sx={{
                    backgroundColor: 'rgb(238, 238, 238)',
                    height: '100vh',
                  }}
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
                      {/* // TODO replace with proper dashboard? */}
                      <Route path="/" element={<Schedule />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/groups" element={<Groups />} />
                      <Route path="/subjects" element={<Subjects />} />
                      <Route path="/schedule" element={<Schedule />} />
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                  </Routes>
                </Box>
              </SnackbarProvider>
            </LocalizationProvider>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
