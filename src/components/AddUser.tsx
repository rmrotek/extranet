import {
  Button,
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
import { PH_GROUPS } from '../PH';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

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

  const { control, handleSubmit } = useForm<UserExtended>({
    defaultValues: {
      name: '',
      lastName: '',
      apartmentNo: '',
      buildingNo: '',
      street: '',
      city: '',
      email: '',
      groupId: '',
      phone: '',
      postalCode: '',
      role: 'STUDENT',
    },
  });

  const onSubmit: SubmitHandler<UserExtended> = (data) => {
    // TODO - POST DO API
    console.log(data);
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
                  <TextField label="Imię" fullWidth required {...field} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField label="Nazwisko" fullWidth required {...field} />
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
                  <TextField label="E-mail" fullWidth required {...field} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="street"
                control={control}
                render={({ field }) => (
                  <TextField label="Ulica" fullWidth required {...field} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="buildingNo"
                control={control}
                render={({ field }) => (
                  <TextField label="Nr budynku" fullWidth required {...field} />
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
                  <TextField label="Miasto" fullWidth required {...field} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* TODO Make select from api data */}
              <Controller
                name="groupId"
                control={control}
                render={({ field }) => (
                  <TextField label="Grupa" fullWidth select {...field}>
                    <MenuItem value={''}>{'Brak'}</MenuItem>
                    {PH_GROUPS.map((group) => (
                      <MenuItem key={group.id} value={group.id}>
                        {group.title}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <TextField label="Rola" fullWidth required select {...field}>
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {rolesMapped[role]}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="success"
            variant="contained"
            type="submit"
            // TODO   disabled={}
          >
            Zapisz
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
