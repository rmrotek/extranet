import {
  Box,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import moment from 'moment';
import { ChangeEvent, useMemo, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { PH_EVENTS, PH_GROUPS } from '../PH';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { calendarTranslations } from '../common';
import 'moment/locale/pl'
const mLocalizer = momentLocalizer(moment);

// const timestamp = moment().unix()
// console.log('timestamp', timestamp)
// console.log('date',  moment.unix(1707760909).toDate())
// console.log('date2',  new Date())

export const Schedule = () => {
  const [grp, setGrp] = useState<string>('');

  const handleGrpChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGrp(event.target.value);
  };

  const { defaultDate, messages } = useMemo(
    () => ({
      defaultDate: new Date(),
      messages: calendarTranslations.pl,
    }),
    []
  );

  return (
    <Box sx={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <Typography variant="h4">Plan lekcji</Typography>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Grupa"
            fullWidth
            select
            value={grp}
            onChange={handleGrpChange}
          >
            {/* // TODO USE REAL GRPS FROM API */}
            {PH_GROUPS.map((group) => (
              <MenuItem key={group.id} value={group.id}>
                {group.title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{ height: 600 }}>
          <Calendar
            culture="pl"
            messages={messages}
            defaultDate={defaultDate}
            events={PH_EVENTS ?? []}
            localizer={mLocalizer}
            showMultiDayTimes
            step={60}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
