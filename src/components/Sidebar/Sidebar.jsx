import { slide as Menu } from 'react-burger-menu'
import isMobile from '../../consts/isMobile';
import SidebarItem from './SidebarItem';
import ProfileMenuIcon from '../../icons/profileMenuIcon.svg'
import ChartIcon from '../../icons/chartIcon.svg';
import UserProfileIcon from '../../icons/userProfileIcon.svg';
import TaskIcon from '../../icons/taskIcon.svg';
import AssetsIcon from '../../icons/assetsIcon.svg';
import PeopleIcon from '../../icons/peopleIcon.svg';
import FileIcon from '../../icons/fileIcon.svg';
import DollarIcon from '../../icons/dollarIcon.svg';
import ExitIconMobile from '../../icons/exitIconMobile.svg';
import NoteIcon from '../../icons/noteIcon.svg';


import CompanyLogo from '../../icons/CompanyLogo';
import ProfileMenu from '../../icons/ProfileMenu';
import ChartLogo from '../../icons/ChartLogo';
import UserProfileLogo from '../../icons/UserProfileLogo';
import TaskLogo from '../../icons/TaskLogo';
import AssetsLogo from '../../icons/AssetsLogo';
import PeopleLogo from '../../icons/PeopleLogo';
import FileLogo from '../../icons/FileLogo';
import DollarLogo from '../../icons/DollarLogo';
import DatabaseLogo from '../../icons/DatabaseLogo';
import ExitLogo from '../../icons/ExitLogo';
import './styles.scss';

const Sidebar = (props) => {
  const { isMenuOpen } = props;
  return (
    <>
    {
      isMobile ? 
      (<Menu width={250} isOpen={isMenuOpen} customBurgerIcon={false}>
        <div className="sidebar">
          <div className="logos">
            <div className="mobileProfile">
              <img src={ProfileMenuIcon} alt='profile-menu' width={55} height={55} />
              <span className="profileInfo">
                <div className="name">
                  Артем Иванов
                </div>
                <div className="title">
                  Собственник
                </div>
              </span>
            </div>
            <SidebarItem imgUrl={ChartIcon} title="Аналитика" />
            <SidebarItem imgUrl={UserProfileIcon} title="Профиль" />
            <SidebarItem imgUrl={TaskIcon} title="Модерация" />
            <SidebarItem imgUrl={NoteIcon} title="Чаты" />
            <SidebarItem imgUrl={AssetsIcon} title="Баннеры" />
            <SidebarItem imgUrl={PeopleIcon} title="Команда" />
            <SidebarItem imgUrl={FileIcon} title="Блог" />
            <SidebarItem imgUrl={DollarIcon} title="Курс валют" />
            <SidebarItem imgUrl={ExitIconMobile} title="Выйти" color="#FF9E90" />
          </div>
        </div>
      </Menu>
      ) :
      (<div className="sidebar">
        <div className="logos">
          <CompanyLogo />
          <ProfileMenu />
          <ChartLogo />
          <UserProfileLogo />
          <TaskLogo />
          <AssetsLogo />
          <PeopleLogo />
          <FileLogo />
          <DollarLogo />
          <DatabaseLogo />
          <ExitLogo />
        </div>
      </div>)
    }
    </>
  )
}

export default Sidebar;