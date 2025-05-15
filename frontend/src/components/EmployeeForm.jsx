import React, { useEffect, useState } from 'react';
import {
    TextField, Button, Paper, Stack, Typography, Box
} from '@mui/material';
import API from '../api';

const initialState = {
    full_name: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    salary: '',
    date_of_joining: '',
    status: 'Active'
};

const EmployeeForm = ({ selected, onSuccess }) => {
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        if (selected) {
            setForm(selected);
        } else {
            setForm(initialState);
        }
    }, [selected]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (form.id) {
                await API.put(`/employees/${form.id}/`, form);
            } else {
                await API.post('/employees/', form);
            }
            onSuccess();
            setForm(initialState);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Box
            component={Paper}
            elevation={6}
            sx={{
                padding: 3,
                borderRadius: 4,
                mb: 3,
                background: '#f7fafd',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                {form.id ? 'Edit' : 'Add'} Employee
            </Typography>

            <Stack spacing={2}>
                <TextField label="Full Name" name="full_name" value={form.full_name} onChange={handleChange} fullWidth />
                <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth />
                <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} fullWidth />
                <TextField label="Department" name="department" value={form.department} onChange={handleChange} fullWidth />
                <TextField label="Designation" name="designation" value={form.designation} onChange={handleChange} fullWidth />
                <TextField label="Salary" name="salary" type="number" value={form.salary} onChange={handleChange} fullWidth />
                <TextField
                    label="Date of Joining"
                    name="date_of_joining"
                    type="date"
                    value={form.date_of_joining}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                />
                <TextField label="Status" name="status" value={form.status} onChange={handleChange} fullWidth />
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 2,
                        borderRadius: 3,
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                        textTransform: 'none',
                        background: 'linear-gradient(to right, #2196f3, #21cbf3)'
                    }}
                    onClick={handleSubmit}
                >
                    {form.id ? 'Update' : 'Create'}
                </Button>
            </Stack>
        </Box>
    );
};

export default EmployeeForm;
