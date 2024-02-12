import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import {
  MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
} from 'material-react-table';
import { useState, useMemo } from 'react';
import { GroupExtended } from '../types';
import { AddGroup } from '../components/AddGroup';
import { MRT_Localization_PL } from 'material-react-table/locales/pl';
import { useQuery } from 'react-query';
import { getAllGroups } from '../firebase/dataReaders';

export const Groups = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const toggleDialog = () => {
    setIsAddOpen((state) => !state);
  };

  const { data: groupsData = [], isLoading } = useQuery(['groups'], getAllGroups);


  const columns = useMemo<MRT_ColumnDef<GroupExtended>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Nazwa',
        size: 100,
      },
      {
        accessorKey: 'users',
        header: 'Uczniowie',
        size: 100,
        accessorFn: ({ users }) => users.length,
      },
      {
        accessorKey: 'plan',
        header: 'Lekcje',
        size: 100,
        accessorFn: ({ plan }) => plan.length,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data: groupsData,
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
          <Typography variant="h4">Grupy</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <MaterialReactTable table={table} />
        </Grid>
      </Grid>
      {isAddOpen && <AddGroup isOpen={isAddOpen} onClose={toggleDialog} />}
    </Box>
  );
};
