import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import { UserExtended } from '../types';
import { AddUser } from '../components/AddUser';
import { useQuery } from 'react-query';
import { getAllUsers } from '../firebase/dataReaders';
import { MRT_Localization_PL } from 'material-react-table/locales/pl';

export const Users = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const toggleDialog = () => {
    setIsAddOpen((state) => !state);
  };

  const { data } = useQuery(['users'], getAllUsers);

  const columns = useMemo<MRT_ColumnDef<UserExtended>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Imię',
        size: 100,
      },
      {
        accessorKey: 'lastName',
        header: 'Nazwisko',
        size: 100,
      },
      {
        accessorKey: 'role',
        header: 'Rola',
        size: 100,
      },
      {
        accessorKey: 'groupId',
        header: 'Grupa',
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data: data ?? [],
    columns,
    enableRowSelection: false,
    initialState: {
      density: 'compact',
      pagination: { pageSize: 14, pageIndex: 0 },
    },
    enableColumnResizing: false,
    enableColumnActions: false,
    enableHiding: false,
    displayColumnDefOptions: {
      'mrt-row-select': {
        size: 30,
      },
    },
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    positionToolbarAlertBanner: 'bottom',
    paginationDisplayMode: 'pages',
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    renderTopToolbarCustomActions: () => (
      <Button variant="contained" onClick={toggleDialog}>
        Dodaj
      </Button>
    ),
    localization: MRT_Localization_PL,
  });

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <Typography variant="h4">Użytkownicy</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <MaterialReactTable table={table} />
        </Grid>
      </Grid>
      {isAddOpen && <AddUser isOpen={isAddOpen} onClose={toggleDialog} />}
    </Box>
  );
};
