import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Subject } from '../types';
import { CustomDialogTitle } from './shared/CustomDialogTitle';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddSubject = ({ isOpen, onClose }: Props) => {
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick') {
      return;
    }
    onClose();
  };

  const { control, handleSubmit } = useForm<Subject>({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit: SubmitHandler<Subject> = (data) => {
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
        <CustomDialogTitle onClose={onClose}>Dodaj przedmiot</CustomDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nazwa przedmiotu"
                    fullWidth
                    required
                    {...field}
                  />
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
