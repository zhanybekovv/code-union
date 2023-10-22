import Tag from '../Tag';
import Dots from '../../icons/dots.svg';
import UnknownIcon from '../../icons/unknownIcon.svg';
import './styles.scss';
import { useState } from 'react';
import { Dropdown, Modal } from 'antd';
import PERMISSIONS from '../../consts/permissions';
import USER_ACTIONS from '../../consts/userActions';

const User = (props) => {
  const { name, email, tags, imgUrl, onChangeUserPermissions, onChangeUserDelete, notAuthorized = false } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = ({ key }) => {
    if (key === 'changeRights') {
      setIsModalOpen(true)
    }
    if (key === 'deleteUser') {
      onChangeUserDelete(email);
    }
  };

  return (
    <div className="user" key={email}>
       <img src={imgUrl || UnknownIcon} alt="userLogo" className="logo" width={64} height={64}/>
      <span className="info">
        <div className="personalData">
          <span className="name">
            {name}
          </span>
          {
            notAuthorized && <span className="notAuthorized">Не авторизирован</span>
          }
          <span className="email">
            {email}
          </span>
        </div>
        <div className="tags">
          {
            tags.map((tag) => (
              <Tag title={tag}/>
            ))
          }
        </div>
      </span>
      <Dropdown trigger={['click']} menu={{ style: {borderRadius: '15px'}, items: USER_ACTIONS, onClick: handleClick }}>
        <img src={Dots} alt='dots' className="userChange"/>
      </Dropdown>
      <Modal 
        open={isModalOpen}
        closable={false}
        onCancel={handleCancel}
        footer={null}
        cancelButtonProps={{ style: { display: 'none' } }}
        width={280}
      >
        <div className="permissions">
          {PERMISSIONS.map((permission) => (
            <label className="checkbox">
              <input type='checkbox' checked={tags.includes(permission.title) || tags.length === PERMISSIONS.length - 1} value={permission.title} onChange={(e) => onChangeUserPermissions(e.target.checked, e.target.value, email)}/>
              <p className="checkboxTitle">
                {permission.title}
              </p>
            </label>
          ))}
        </div>
      </Modal>
    </div>
  )
};

export default User;
