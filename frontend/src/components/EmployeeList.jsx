import React, { useEffect, useState } from 'react';
import {
    Card, CardContent, Typography, Grid, Button, TextField, Stack, Box
} from '@mui/material';
import API from '../api';

const EmployeeList = ({ onEdit }) => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');

    const fetchEmployees = async () => {
        try {
            const res = await API.get('/employees/');
            setEmployees(res.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await API.delete(`/employees/${id}/`);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const filtered = employees.filter((emp) =>
        emp.full_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ mt: 3 }}>
            <TextField
                label="Search by name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Grid container spacing={2}>
                {filtered.length ? (
                    filtered.map((emp) => (
                        <Grid item xs={12} sm={6} md={4} key={emp.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{emp.full_name}</Typography>
                                    <Typography variant="body2">{emp.designation} - {emp.department}</Typography>
                                    <Typography>Email: {emp.email}</Typography>
                                    <Typography>Phone: {emp.phone}</Typography>
                                    <Typography>Salary: ₹{emp.salary}</Typography>
                                    <Typography>Status: {emp.status}</Typography>

                                    <Stack direction="row" spacing={1} mt={2}>
                                        <Button variant="outlined" onClick={() => onEdit(emp)}>
                                            Edit
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => deleteEmployee(emp.id)}>
                                            Delete
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mx: 'auto' }}>
                        No employees found.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default EmployeeList;
