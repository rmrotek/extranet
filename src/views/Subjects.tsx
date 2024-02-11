import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import {
  MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
} from 'material-react-table';
import { useState, useMemo } from 'react';
import { PH_SUBJECTS } from '../PH';
import { AddGroup } from '../components/AddGroup';
import { Subject } from '../types';

export const Subjects = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const toggleDialog = () => {
    setIsAddOpen((state) => !state);
  };

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
    data: PH_SUBJECTS,
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
      {isAddOpen && <AddGroup isOpen={isAddOpen} onClose={toggleDialog} />}
    </Box>
  );
};
