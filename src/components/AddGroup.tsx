import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { GroupExtended } from '../types';
import { CustomDialogTitle } from './shared/CustomDialogTitle';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// TODO add subjects & users
export const AddGroup = ({ isOpen, onClose }: Props) => {
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick') {
      return;
    }
    onClose();
  };

  const { control, handleSubmit } = useForm<GroupExtended>({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit: SubmitHandler<GroupExtended> = (data) => {
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
        <CustomDialogTitle onClose={onClose}>Dodaj grupę</CustomDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nazwa grupy"
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
