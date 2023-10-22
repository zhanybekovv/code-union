import { useState } from 'react';
import { Modal, Select, Space, Input } from 'antd';
import isMobile from '../../consts/isMobile';
import MenuIcon from '../../icons/menuIcon.svg';
import Search from '../Search';
import CloseIcon from '../../icons/closeIcon.svg';
import PERMISSIONS from '../../consts/permissions';
import './styles.scss';


const { Option } = Select;

const PageHeader = (props) => {
  const { title, onUserAdd, filterUsers, users, toggleSideMenu } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [email, setEmail] = useState();
  const [permissions, setPermissions] = useState([]);

  const [searchIsClicked, setSearchIsClicked] = useState(false);

  const handleSearchClick = () => {
    setSearchIsClicked((prevState) => !prevState);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEmail('')
    setPermissions([])
  };

  const handleUserAdd = () => {
    setIsModalOpen(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePermissionsChange = (values) => {
      setPermissions(values)
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
    onUserAdd({
      email,
      permissions,
    })
    setEmail('')
    setPermissions([])
  }

  const handleClose = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div className="header">
      <span className="title">
        {isMobile && <img src={MenuIcon} alt="menu-icon" className="menuIcon" onClick={toggleSideMenu}/>}
        {title}
      </span>
      <div className={`buttons ${searchIsClicked ? 'fullWidth' : ''}` }>
        <Search searchIsClicked={searchIsClicked} handleSearchClick={handleSearchClick} filterUsers={filterUsers} users={users}/>
        <button className="addUser">
          <span className="title" onClick={() => handleUserAdd()}>
            Добавить пользователя
          </span>
        </button>
      </div>
      <Modal 
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}
        width={526}
        okText={"Отправить приглашение"}
        okButtonProps={{ 
          style: {
            borderRadius: '15px',
            background: '#32C076',
            color: '#F9FAFB',
            paddingTop: '21px',
            paddingBottom: '21px',
            paddingLeft: `${isMobile ? '84px' : '118px'}`,
            paddingRight: `${isMobile ? '84px' : '118px'}`,
            display: 'flex',
            alignItems: 'center',
            marginInlineStart: 'unset'
          }
        }}
        title={<div className="modalTitle">Отправьте приглашение</div>}
        closeIcon={<img src={CloseIcon} alt="close-icon" style={{ marginBottom: '10px' }}/>}
      >
        <div className="addUserModalBody">
          <Input 
            placeholder="Email"
            aria-label="email"
            size="middle"
            value={email}
            onChange={handleEmailChange}
            style={{ paddingTop: '10px', paddingBottom: '10px', marginBottom: '8px' }}
          />
          <Select
            mode="multiple"
            style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', }}
            placeholder="Выберите права доступа"
            defaultValue={[]}
            onChange={handlePermissionsChange}
            optionLabelProp="label"
            value={permissions}
          >
            {PERMISSIONS.slice(1).map((permission) => (
              <Option value={permission.title} label={permission.title}>
                <Space>
                  {permission.title}
                </Space>
              </Option> 
            ))}
          </Select>
        </div>
      </Modal>

      <Modal 
        open={isSecondModalOpen}
        closable={false}
        onCancel={handleClose}
        onOk={handleClose}
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
            paddingLeft: `${isMobile ? '118px' : '168px'}`,
            paddingRight: `${isMobile ? '118px' : '168px'}`,
            display: 'flex',
            alignItems: 'center',
            marginInlineStart: 'unset'
          }
        }}
      >
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Приглашение отправлено на почту <br /> example@email.com
          </h3>
        </div>
      </Modal>
    </div>
  )
}

export default PageHeader;
