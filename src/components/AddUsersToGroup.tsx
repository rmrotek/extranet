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
  MenuItem,
  TextField,
} from '@mui/material';
import { CustomDialogTitle } from './shared/CustomDialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChangeEvent, useState } from 'react';
import { UserExtended } from '../types';
import { useQuery } from 'react-query';
import { getUsersByRole } from '../firebase/dataReaders';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newUsersArray: UserExtended[]) => void;
}

export const AddUsersToGroup = ({ isOpen, onClose, onSave }: Props) => {
  const handleClose = (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'backdropClick') {
      return;
    }
    onClose();
  };
  const { data = [] } = useQuery(['students'], () => getUsersByRole('STUDENT'));

  const [currentUsers, setCurrentUsers] = useState<UserExtended[]>([]);

  const handleAddToCurrent = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const id = event.target.value;
    const foundUser = data.find((user) => user.id === id);
    if (!foundUser) {
      return;
    }
    setCurrentUsers((state) => [foundUser, ...state]);
  };
  const handleDeleteFromCurrent = (id: string) => {
    setCurrentUsers((state) => state.filter((u) => u.id !== id));
  };

  const handleSave = () => {
    onSave(currentUsers);
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
      <CustomDialogTitle onClose={onClose}>
        Edytuj użytkowników grupy
      </CustomDialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Dodaj ucznia"
              fullWidth
              select
              onChange={handleAddToCurrent}
              value={''}
            >
              {data.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {`${user.name} ${user.lastName}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <List dense>
              {currentUsers.map((user) => (
                <ListItem
                  key={user.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteFromCurrent(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${user.name} ${user.lastName}`}
                    secondary={`email: ${user.email} phone: ${user.phone}`}
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
