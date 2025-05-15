import React, { useEffect, useState } from 'react';
import {
    Table, TableHead, TableBody, TableRow, TableCell,
    Paper, Typography,

} from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import API from '../api';

const EmployeeList = ({ onEdit }) => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        const response = await API.get('/employees/');
        setEmployees(response.data);
    };

    // const handleDelete = async (id) => {
    //     await API.delete(`/employees/${id}/`);
    //     fetchEmployees(); // refresh
    // };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>Employee List</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Designation</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(emp => (
                        <TableRow key={emp.id}>
                            <TableCell>{emp.full_name}</TableCell>
                            <TableCell>{emp.email}</TableCell>
                            <TableCell>{emp.department}</TableCell>
                            <TableCell>{emp.designation}</TableCell>
                            <TableCell>
                                {/* <button onClick={() => onEdit(emp)}>Edit<button>
                                    <button onClick={() => handleDelete(emp.id)}> Delete<button> */}
                                {/* <IconButton onClick={() => onEdit(emp)}><EditIcon /></IconButton>
                                <IconButton onClick={() => handleDelete(emp.id)}><DeleteIcon /></IconButton> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default EmployeeList;
