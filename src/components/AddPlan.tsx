import { Button, Grid, MenuItem, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { PlanSubject, Subject } from '../types';
import { v4 as createId } from 'uuid';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getUsersByRole } from '../firebase/dataReaders';
interface Props {
  onSave: (newPlan: PlanSubject) => void;
  subjectsData: Subject[];
}

export const AddPlan = ({ onSave, subjectsData }: Props) => {
  const { data: usersData = [] } = useQuery(['teachers'], () =>
    getUsersByRole('TEACHER')
  );

  const { control, handleSubmit, reset } = useForm<PlanSubject>({
    defaultValues: {
      subjectId: '',
      roomNo: '',
      userId: '',
      start: moment(),
      end: moment().add(15, 'm'),
    },
  });

  const onSubmit: SubmitHandler<PlanSubject> = (data) => {
    onSave({ ...data, id: createId() });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Controller
            name="roomNo"
            control={control}
            render={({ field }) => (
              <TextField label="Sala" fullWidth required {...field} />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="subjectId"
            control={control}
            render={({ field }) => (
              <TextField label="Przedmiot" fullWidth required select {...field}>
                {subjectsData.map((subject) => (
                  <MenuItem key={subject.id} value={subject.id}>
                    {`${subject.title}`}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <MobileDateTimePicker
                label="Początek"
                slotProps={{ textField: { fullWidth: true, required: true } }}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <MobileDateTimePicker
                label="Koniec"
                slotProps={{ textField: { fullWidth: true, required: true } }}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="userId"
            control={control}
            render={({ field }) => (
              <TextField
                label="Nauczyciel"
                fullWidth
                required
                select
                {...field}
              >
                {usersData.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {`${user.name} ${user.lastName}`}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            sx={{ height: '100%' }}
          >
            Dodaj
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
