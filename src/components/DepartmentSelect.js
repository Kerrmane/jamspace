import React from 'react';


const DepartmentSelect = ({ departments, selectedDepartment, handleDepartmentChange }) => {
  return (
    <div>
      <label>Sélectionnez le département :</label>
      
      <select value={selectedDepartment} onChange={handleDepartmentChange}>
        <option value="">Tous les départements</option>
        {departments.map((department) => (
          <option key={department.code} value={department.code}>
            {department.nom}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentSelect;
