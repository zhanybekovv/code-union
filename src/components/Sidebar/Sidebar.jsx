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

const Sidebar = () => {
  return (
    <div className="sidebar">
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
    </div>
  )
}

export default Sidebar;