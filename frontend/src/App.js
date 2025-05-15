import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setSelected(null);
    setRefresh(!refresh);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }} align="center">
        Employee Management System
      </Typography>

      <EmployeeForm selected={selected} onSuccess={handleRefresh} />
      <EmployeeList key={refresh} onEdit={setSelected} />
    </Container>
  );
}

export default App;
