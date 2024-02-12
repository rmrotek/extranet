import { Box, IconButton, Typography } from '@mui/material';
import { useUserData } from '../atoms';
import LogoutIcon from '@mui/icons-material/Logout';
import { useQuery } from 'react-query';
import { getGroup } from '../firebase/dataReaders';

export const UserInfo = () => {
  const { userData } = useUserData();
  const { data: groupData } = useQuery(
    ['group', userData?.groupId],
    () => getGroup(userData?.groupId as string),
    { enabled: !!userData?.groupId }
  );
  if (!userData) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Typography variant="body2">{`Użytkownik: ${userData.name} ${userData.lastName}`}</Typography>
        <Typography variant="body2">{`Grupa: ${
          groupData?.title ?? 'BRAK'
        }`}</Typography>
      </Box>
      <IconButton onClick={() => window.location.reload()}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
