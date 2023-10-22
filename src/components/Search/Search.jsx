import { useRef } from 'react';
import SearchLogo from '../../icons/searchLogo.svg';
import './styles.scss';

const Search = (props) => {
  const { searchIsClicked, handleSearchClick, filterUsers, users } = props;
  // const isMobile = window.innerWidth() <= 400;
  const isMobileRef = useRef(window.innerWidth <= 400);

  const handleChange = (e) => {
    const { value = '' } = e.target;
    const newUsers = users.filter((user) => user.email.includes(value));
    filterUsers(newUsers);
  };

  return (
    <div className="search">
      {
        searchIsClicked || isMobileRef.current ? (
          <div className="animation_trigger">
            <input className="searchInput" placeholder="Поиск по Email" aria-label="search" onChange={handleChange} />
            <img
                className="searchIcon"
                src={SearchLogo}
                alt="search icon"
              />
          </div>
        ) : <img
              onClick={handleSearchClick}
              className="searchIcon"
              src={SearchLogo}
              alt="search icon"
            />
      }
    </div>  
)
}

export default Search;
