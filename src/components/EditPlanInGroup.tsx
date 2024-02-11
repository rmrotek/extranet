import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { CustomDialogTitle } from './shared/CustomDialogTitle';
import { PH_PLAN } from '../PH';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { PlanSubject } from '../types';
import moment from 'moment';
import { dateFormatString } from '../common';
import { AddPlan } from './AddPlan';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newPlan: PlanSubject[]) => void;
}

export const EditPlanInGroup = ({ isOpen, onClose, onSave }: Props) => {
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick') {
      return;
    }
    onClose();
  };

  const [currentPlan, setCurrentPlan] = useState<PlanSubject[]>(PH_PLAN);

  const handleDeleteFromCurrent = (id: string) => {
    setCurrentPlan((state) => state.filter((u) => u.id !== id));
  };

  const handleSaveSinglePlan = (singlePlan: PlanSubject) => {
    setCurrentPlan((state) => [singlePlan, ...state]);
  };

  const handleSave = () => {
    onSave(currentPlan);
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
      <CustomDialogTitle onClose={onClose}>Edytuj plan grupy</CustomDialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AddPlan onSave={handleSaveSinglePlan} />
          </Grid>
          <Grid item xs={12}>
            <List dense>
              {currentPlan.map((plan) => (
                <ListItem
                  key={plan.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteFromCurrent(plan.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${plan.id}, sala: ${plan.roomNo}`}
                    secondary={`od: ${moment(plan.start).format(
                      dateFormatString
                    )} do: ${moment(plan.end).format(dateFormatString)}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="success" variant="contained" onClick={handleSave}>
          Zapisz
        </Button>
      </DialogActions>
    </Dialog>
  );
};
