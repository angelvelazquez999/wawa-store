import { Box, CircularProgress, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { esES } from '@mui/x-data-grid/locales'
import 'dayjs/locale/es'

const Table = ({ rows, columns, loading, searchValue, onSearchChange }) => {
    return (
        loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                <CircularProgress />
            </Box>
        ) : (
            <>
                <Box sx={{ p: 2 }}>
                    <TextField
                        label="Buscar"
                        variant="outlined"
                        fullWidth
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                </Box>
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    loading={loading}
                    pageSizeOptions={[5, 10, 20]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 10 } }
                    }}
                    localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                    slotProps={{
                        pagination: {
                            showFirstButton: true,
                            showLastButton: true
                        }
                    }}
                    getRowHeight={() => 'auto'}
                    sx={{
                        paddingLeft: 2,
                        paddingRight: 2,
                        '& .MuiDataGrid-row': {
                            paddingBottom: 0
                        },
                        '& .MuiDataGrid-cell': {
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                            padding: '10px',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            whiteSpace: 'normal',
                            wordWrap: 'break-word'
                        },
                        '& .MuiDataGrid-columnSeparator': {
                            display: 'none'
                        },
                    }}
                    columnBuffer={5}
                    columnThreshold={5}
                />
            </>
        )
    );
}

export default Table;
