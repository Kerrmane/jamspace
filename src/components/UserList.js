import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
const UserList = ({ users }) => {
  return (
    <div>
      <Table striped bordered hover size="sm" >
      <thead>
      <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Departements</th>
        </tr>
      </thead>
        {users.map((user) => (
          <tbody key={user.id}>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.departments.join(' , ')}</td>
          </tr>
        </tbody>
          
        ))}
      </Table>
    </div>
  );
};

export default UserList;

        
      
    
