import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import datajson from './data.json';
import UserList from './components/UserList';
import './App.css';
import DepartmentSelect from './components/DepartmentSelect';

const App = () => {
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    // Charger les données utilisateurs depuis le fichier data.json
    setUsers(datajson);

    // Charger les noms des départements depuis l'API api-geo
    axios
      .get('https://geo.api.gouv.fr/departements')
      .then((response) => {
        const allDepartments = response.data;
        const userDepartments = new Set(users.flatMap((user) => user.departments));
        const filteredDepartments = allDepartments.filter((department) =>
          userDepartments.has(parseInt(department.code))
        );
        setDepartments(filteredDepartments);
      });
  }, [users]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredUsers = selectedDepartment
    ? users.filter((user) =>
        user.departments.includes(parseInt(selectedDepartment))
      )
    : users;

  return (
    <div className="container mt-4"> {/* Utilisation de classes Bootstrap */}
      <h1 className="mb-4">Liste d'Utilisateurs</h1>
      <DepartmentSelect
        departments={departments}
        selectedDepartment={selectedDepartment}
        handleDepartmentChange={handleDepartmentChange}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
