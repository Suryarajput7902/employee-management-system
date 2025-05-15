import React, { useEffect, useState } from 'react';
import {
    TextField, Button, Paper, Stack, Typography
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
        if (form.id) {
            await API.put(`/employees/${form.id}/`, form);
        } else {
            await API.post('/employees/', form);
        }
        onSuccess();
        setForm(initialState);
    };

    return (
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>{form.id ? 'Edit' : 'Add'} Employee</Typography>
            <Stack spacing={2}>
                <TextField label="Full Name" name="full_name" value={form.full_name} onChange={handleChange} />
                <TextField label="Email" name="email" value={form.email} onChange={handleChange} />
                <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                <TextField label="Department" name="department" value={form.department} onChange={handleChange} />
                <TextField label="Designation" name="designation" value={form.designation} onChange={handleChange} />
                <TextField label="Salary" name="salary" type="number" value={form.salary} onChange={handleChange} />
                <TextField label="Date of Joining" name="date_of_joining" type="date" value={form.date_of_joining} onChange={handleChange} InputLabelProps={{ shrink: true }} />
                <TextField label="Status" name="status" value={form.status} onChange={handleChange} />
                <Button variant="contained" onClick={handleSubmit}>
                    {form.id ? 'Update' : 'Create'}
                </Button>
            </Stack>
        </Paper>
    );
};

export default EmployeeForm;
