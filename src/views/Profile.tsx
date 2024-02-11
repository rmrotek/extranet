import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import { PH_USER } from '../PH';

// TODO GET REAL DATA
export const Profile = () => {
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
            value={PH_USER.name}
            inputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Nazwisko"
            value={PH_USER.lastName}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Nr telefonu"
            value={PH_USER.phone}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="E-mail"
            value={PH_USER.email}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Ulica"
            value={PH_USER.street}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Nr budynku"
            value={PH_USER.buildingNo}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Nr mieszkania"
            value={PH_USER.apartmentNo}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Kod pocztowy"
            value={PH_USER.postalCode}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Miasto"
            value={PH_USER.city}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Grupa"
            value={PH_USER.groupId}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Rola"
            value={PH_USER.role}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
