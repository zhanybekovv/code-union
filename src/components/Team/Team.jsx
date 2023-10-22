import { useState, useEffect, useCallback, useRef } from 'react';
import { Modal } from 'antd';
import PageWrapper from '../PageWrapper';
import PageHeader from '../PageHeader';
import User from '../User';
import './styles.scss';
import { USERS } from '../../users.js';
import PERMISSIONS from '../../consts/permissions.js';


const Team = ({ pageTitle }) => {
  const [users, setUsers] = useState(USERS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(users);

  useEffect(() => {
    setUsers(USERS);
  }, [])

  const filterUsers = (users) => {
    setUsers(users);
  }

  const handleAddUser = useCallback((user) => {
    const newUsers = [{ ...user, name: 'Пользователь', notAuthorized: true }, ...users]
    ref.current = newUsers;
    setUsers(newUsers);
  }, [users]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = useCallback((email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    setIsModalOpen(true);
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
        <PageHeader title={pageTitle} onUserAdd={handleAddUser} filterUsers={filterUsers} users={ref.current}/>
        {
          users.map((user) => (
            <User
              notAuthorized={user?.notAuthorized}
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
          
      <Modal 
        open={isModalOpen}
        closable={false}
        onCancel={handleCancel}
        onOk={handleCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        width={526}
        okText={"Закрыть"}
        okButtonProps={{ 
          style: {
            borderRadius: '15px',
            background: '#32C076',
            color: '#F9FAFB',
            paddingTop: '21px',
            paddingBottom: '21px',
            paddingLeft: '168px',
            paddingRight: '168px',
            display: 'flex',
            alignItems: 'center',
            marginInlineStart: 'unset'
          }
        }}
      >
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Пользователь успешно удален
          </h3>
        </div>
      </Modal>
    </PageWrapper>
  )
};

export default Team;
