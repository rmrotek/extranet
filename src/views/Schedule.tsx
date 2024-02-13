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
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { calendarTranslations, convertGroupToEvent } from '../common';
import 'moment/locale/pl';
import { useQuery } from 'react-query';
import {
  getAllGroups,
  getAllSubjects,
  getGroup,
  getUsersByRole,
} from '../firebase/dataReaders';
import { CustomCalendarEvent } from '../types';
import { useUserData } from '../atoms';
const mLocalizer = momentLocalizer(moment);

// TODO translate/improve agenda view?
export const Schedule = () => {
  const { userData } = useUserData();
  const [grp, setGrp] = useState<string>(userData?.groupId ?? '');
  const handleGrpChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGrp(event.target.value);
  };
  const { data: groupsData = [] } = useQuery(
    ['groups'],
    getAllGroups
  );

  const { data: groupData } = useQuery(
    ['group', grp],
    () => getGroup(grp),
    { enabled: !!grp }
  );

  const { data: usersData } = useQuery(['teachers'], () =>
    getUsersByRole('TEACHER')
  );

  const { data: subjectsData } = useQuery(
    ['subjects'],
    getAllSubjects
  );

  const groupPlan: CustomCalendarEvent[] = useMemo(() => {
    if (!groupData || !usersData || !subjectsData) {
      return [];
    }
    const plan = convertGroupToEvent(groupData, usersData, subjectsData);
    return plan;
  }, [groupData, usersData, subjectsData]);

  const { defaultDate, messages } = useMemo(
    () => ({
      defaultDate: new Date(),
      messages: calendarTranslations.pl,
    }),
    []
  );
  const isStudent = userData?.role === 'STUDENT';
  return (
    <Box sx={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <Typography variant="h4">Plan lekcji</Typography>
          <Divider />
        </Grid>
        {!isStudent && (
          <Grid item xs={6}>
            <TextField
              label="Grupa"
              fullWidth
              select
              value={grp}
              onChange={handleGrpChange}
            >
              {groupsData.map((group) => (
                <MenuItem key={group.id} value={group.id}>
                  {group.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        )}
        <Grid item xs={12} sx={{ height: 600 }}>
          <Calendar
            key={groupData?.id}
            culture="pl"
            messages={messages}
            defaultDate={defaultDate}
            events={groupPlan}
            localizer={mLocalizer}
            showMultiDayTimes
            step={60}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
