import { useState, useEffect } from 'react';
import { USERS } from '../../users.js';
import PageWrapper from '../PageWrapper';
import PageHeader from '../PageHeader';
import User from '../User';
import './styles.scss';


const Team = ({ pageTitle }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(USERS);
  }, [])

  return (
    <PageWrapper>
      <div className="team">
        <PageHeader title={pageTitle}/>

        {
          users.map((user) => (
            <User name={user.name} email={user.email} imgUrl={user.image} tags={user.permissions}/>
          ))
        }
      </div>
    </PageWrapper>
  )
};

export default Team;
