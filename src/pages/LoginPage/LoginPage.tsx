import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Typography,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { logInAuthUser } from '../../firebase/auth';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginInForm } from '../../types';
import { useUser } from '../../atoms';
import { LoadingButton } from '@mui/lab';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      Remigiusz Mrotek, Kacper Grudziński
    </Typography>
  );
}

export const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const { currentUser, setCurrentUser } = useUser();
  console.log(currentUser);
  const [errorMsg, setErrorMsg] = useState('');
  const { mutate: logIn, isLoading } = useMutation(logInAuthUser, {
    onSuccess(data) {
      setCurrentUser(data.user);
      navigate(from, { replace: true });
    },
    onError(error) {
      setErrorMsg('Błędne dane logowania');
    },
  });

  const { control, handleSubmit } = useForm<LoginInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmitForm: SubmitHandler<LoginInForm> = ({
    email,
    password,
  }) => {
    if (!email || !password) {
      return;
    }

    logIn({ email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Extranet - Logowanie
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleSubmitForm)}
          sx={{ mt: 1 }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                autoComplete="email"
                autoFocus
                error={!!errorMsg}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Hasło"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errorMsg}
                helperText={errorMsg ? errorMsg : ' '}
                {...field}
              />
            )}
          />
          <LoadingButton
            color="primary"
            loading={isLoading}
            loadingPosition="start"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <span>Zaloguj</span>
          </LoadingButton>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
