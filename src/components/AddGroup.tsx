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

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// TODO add subjects & users
export const AddGroup = ({ isOpen, onClose }: Props) => {
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

  const { control, handleSubmit, setValue } = useForm<GroupExtended>({
    defaultValues: {
      title: '',
      plan: [],
      users: [],
    },
  });

  const onSubmit: SubmitHandler<GroupExtended> = (data) => {
    // TODO - POST DO API
    console.log(data);
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
    console.log(newPlanData);
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
              >
                Przedmioty
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            color="success"
            variant="contained"
            type="submit"
            // TODO   disabled={}
          >
            Zapisz
          </Button>
        </DialogActions>
      </form>
      {isAddUserOpen && (
        <AddUsersToGroup
          isOpen={isAddUserOpen}
          onClose={toggleUsersDialog}
          onSave={onSaveUsers}
        />
      )}
      {isPlanOpen && (
        <EditPlanInGroup
          isOpen={isPlanOpen}
          onClose={togglePlanDialog}
          onSave={onSavePlan}
        />
      )}
    </Dialog>
  );
};
