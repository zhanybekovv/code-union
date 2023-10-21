import { useState } from 'react';
import Search from '../Search';
import './styles.scss';

const PageHeader = (props) => {
  const { title } = props;

  const [searchIsClicked, setSearchIsClicked] = useState(false);

  const handleSearchClick = () => {
    setSearchIsClicked((prevState) => !prevState);
  }


  return (
    <div className="header">
      <span className="title">
        {title}
      </span>
      <div className={`buttons ${searchIsClicked ? 'fullWidth' : ''}` }>
        <Search searchIsClicked={searchIsClicked} handleSearchClick={handleSearchClick}/>
        <button className="addUser">
          <span className="title">
            Добавить пользователя
          </span>
        </button>
      </div>
    </div>
  )
}

export default PageHeader;
