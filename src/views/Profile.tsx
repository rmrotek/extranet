import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import { useUserData } from '../atoms';
import { useQuery } from 'react-query';
import { getGroup } from '../firebase/dataReaders';

export const Profile = () => {
  const { userData } = useUserData();
  const { data: groupData } = useQuery(
    ['group', userData?.groupId],
    () => getGroup(groupId as string),
    { enabled: !!userData?.groupId }
  );
  if (!userData) {
    return null;
  }
  const {
    name,
    lastName,
    apartmentNo,
    buildingNo,
    city,
    email,
    phone,
    postalCode,
    role,
    street,
    groupId,
  } = userData;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <Typography variant="h4">Profil</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Imię"
            value={name}
            inputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Nazwisko"
            value={lastName}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Nr telefonu"
            value={phone}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="E-mail"
            value={email}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Ulica"
            value={street}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Nr budynku"
            value={buildingNo}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Nr mieszkania"
            value={apartmentNo}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Kod pocztowy"
            value={postalCode}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Miasto"
            value={city}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Grupa"
            value={groupData?.title}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Rola"
            value={role}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
