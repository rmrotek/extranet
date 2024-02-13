import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import {
  MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
} from 'material-react-table';
import { MRT_Localization_PL } from 'material-react-table/locales/pl';
import { useState, useMemo } from 'react';
import { Subject } from '../types';
import { AddSubject } from '../components/AddSubject';
import { useQuery } from 'react-query';
import { getAllSubjects } from '../firebase/dataReaders';

export const Subjects = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const toggleDialog = () => {
    setIsAddOpen((state) => !state);
  };

  const { data } = useQuery(['subjects'], getAllSubjects);

  const columns = useMemo<MRT_ColumnDef<Subject>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        size: 100,
      },
      {
        accessorKey: 'title',
        header: 'Nazwa',
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
          <Typography variant="h4">Przedmioty</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <MaterialReactTable table={table} />
        </Grid>
      </Grid>
      {isAddOpen && <AddSubject isOpen={isAddOpen} onClose={toggleDialog} />}
    </Box>
  );
};
