import { useState, useEffect, useCallback } from 'react';
import PageWrapper from '../PageWrapper';
import PageHeader from '../PageHeader';
import User from '../User';
import './styles.scss';
import { USERS } from '../../users.js';
import PERMISSIONS from '../../consts/permissions.js';


const Team = ({ pageTitle }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(USERS);
  }, [])

  const handleAddUser = useCallback(() => {

  }, []);

  const handleDeleteUser = useCallback((email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
  }, [users]);

  const handleChangeUserPermissions = useCallback((select, value, email) => {
    const updatedUsers = users.map((user) => {
      if (user.email === email) {
        const newUser = { ...user };
        let newPermissions = [...user.permissions];
        if (select) {
          if (value === 'Все') {
            newPermissions = PERMISSIONS.slice(1).map(({ title }) => title);
          } else {
            newPermissions.push(value);
          }
        } else {
          if (value === 'Все') {
            newPermissions = [];
          } else {
            newPermissions = newPermissions.filter((permission) => permission !== value);
          }
        }
        newUser.permissions = newPermissions;
        return newUser;
      } return user;
    });
    setUsers(updatedUsers);
  }, [users])

  return (
    <PageWrapper>
      <div className="team">
        <PageHeader title={pageTitle}/>
        {
          users.map((user) => (
            <User 
              name={user.name} 
              email={user.email} 
              imgUrl={user.image} 
              tags={user.permissions}
              onChangeUserPermissions={handleChangeUserPermissions}
              onChangeUserDelete={handleDeleteUser}
            />
          ))
        }
      </div>
    </PageWrapper>
  )
};

export default Team;
