import React, { useState } from 'react';
import { Container } from '@mui/material';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setSelected(null);
    setRefresh(!refresh);
  };

  return (
    <Container maxWidth="md">
      <EmployeeForm selected={selected} onSuccess={handleSuccess} />
      <EmployeeList key={refresh} onEdit={setSelected} />
    </Container>
  );
};

export default App;
