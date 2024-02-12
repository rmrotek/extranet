import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UserExtended } from '../types';
import { roles, rolesMapped } from '../common';
import { CustomDialogTitle } from './shared/CustomDialogTitle';
import { useMutation, useQueryClient } from 'react-query';
import { setUser } from '../firebase/dataSetters';
import { createAuthUser } from '../firebase/auth';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
// TODO get groups
export const AddUser = ({ isOpen, onClose }: Props) => {
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick') {
      return;
    }
    onClose();
  };
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const [password, setPassword] = useState('');

  const { mutate: saveUserData, isLoading: isSaveUserLoading } = useMutation(
    setUser,
    {
      onSuccess() {
        enqueueSnackbar({
          message: 'Użytkownik został utworzony',
          variant: 'success',
        });
        queryClient.invalidateQueries('users');
        onClose();
      },
    }
  );
  const { mutate: saveUserAuth, isLoading: isSaveAuthLoading } = useMutation(
    createAuthUser,
    {
      onSuccess(data) {
        saveUserData({ newUserData: getValues(), userId: data.user.uid });
      },
    }
  );

  const dataLoading = isSaveAuthLoading || isSaveUserLoading;

  const { control, handleSubmit, getValues } = useForm<UserExtended>({
    defaultValues: {
      name: '',
      lastName: '',
      apartmentNo: '',
      buildingNo: '',
      street: '',
      city: '',
      email: '',
      phone: '',
      postalCode: '',
      role: 'STUDENT',
    },
  });
  const onSubmit: SubmitHandler<UserExtended> = (data) => {
    saveUserAuth({ email: data.email, password });
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-start',
        },
      }}
      PaperProps={{ sx: { width: '70vw' } }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomDialogTitle onClose={onClose}>
          Dodaj użytkownika
        </CustomDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Imię"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nazwisko"
                    fullWidth
                    disabled={dataLoading}
                    required
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nr telefonu"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="E-mail"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="street"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Ulica"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="buildingNo"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nr budynku"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="apartmentNo"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nr mieszkania"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="postalCode"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Kod pocztowy"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Miasto"
                    fullWidth
                    required
                    disabled={dataLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Rola"
                    fullWidth
                    required
                    select
                    disabled={dataLoading}
                    {...field}
                  >
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {rolesMapped[role]}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hasło tymczasowe"
                fullWidth
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled={dataLoading}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            color="success"
            loading={dataLoading}
            loadingPosition="start"
            type="submit"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            <span>Zapisz</span>
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};
