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
import { useMutation, useQueryClient } from 'react-query';
import { enqueueSnackbar } from 'notistack';
import { setSubject } from '../firebase/dataSetters';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

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
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(setSubject, {
    onSuccess() {
      enqueueSnackbar({
        message: 'Przedmiot został utworzony',
        variant: 'success',
      });
      queryClient.invalidateQueries('subjects');
      onClose();
    },
  });

  const { control, handleSubmit } = useForm<Subject>({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit: SubmitHandler<Subject> = (data) => {
    mutate({ data });
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
                    disabled={isLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            color="success"
            loading={isLoading}
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
