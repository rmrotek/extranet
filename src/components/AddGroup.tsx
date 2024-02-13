import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { GroupExtended, PlanSubject, UserExtended } from '../types';
import { CustomDialogTitle } from './shared/CustomDialogTitle';
import { useState } from 'react';
import { AddUsersToGroup } from './AddUsersToGroup';
import { EditPlanInGroup } from './EditPlanInGroup';
import { useMutation, useQueryClient } from 'react-query';
import { setGroup, updateUsersWithGroup } from '../firebase/dataSetters';
import { enqueueSnackbar } from 'notistack';
import { convertGroupToApi } from '../common';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddGroup = ({ isOpen, onClose }: Props) => {
  const queryClient = useQueryClient();

  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const toggleUsersDialog = () => {
    setIsAddUserOpen((state) => !state);
  };
  const togglePlanDialog = () => {
    setIsPlanOpen((state) => !state);
  };
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick') {
      return;
    }
    onClose();
  };

  const { mutate: addUsersToGroup } = useMutation(updateUsersWithGroup, {
    onSuccess() {
      enqueueSnackbar({
        message: 'Użytkownicy zostali przypisani do grup',
        variant: 'success',
      });
      queryClient.invalidateQueries('groups');
      onClose();
    },
  });

  const { mutate, isLoading } = useMutation(setGroup, {
    onSuccess(data, variables) {
      enqueueSnackbar({
        message: 'Grupa została utworzona',
        variant: 'success',
      });
      addUsersToGroup({ groupId: data.id, userIds: variables.data.users });
    },
  });

  const { control, handleSubmit, setValue } = useForm<GroupExtended>({
    defaultValues: {
      title: '',
      plan: [],
      users: [],
    },
  });

  const onSubmit: SubmitHandler<GroupExtended> = (data) => {
    const dataConverted = convertGroupToApi(data);
    mutate({ data: dataConverted });
  };

  const onSaveUsers = (newUsersData: UserExtended[]) => {
    setValue(
      'users',
      newUsersData.map((u) => u.id)
    );
    toggleUsersDialog();
  };
  const onSavePlan = (newPlanData: PlanSubject[]) => {
    setValue('plan', newPlanData);
    togglePlanDialog();
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
            <Grid item xs={12}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nazwa grupy"
                    fullWidth
                    required
                    disabled={isLoading}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={toggleUsersDialog}
                disabled={isLoading}
              >
                Użytkownicy
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={togglePlanDialog}
                disabled={isLoading}
              >
                Przedmioty
              </Button>
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

      <AddUsersToGroup
        isOpen={isAddUserOpen}
        onClose={toggleUsersDialog}
        onSave={onSaveUsers}
      />

      <EditPlanInGroup
        isOpen={isPlanOpen}
        onClose={togglePlanDialog}
        onSave={onSavePlan}
      />
    </Dialog>
  );
};
