import isMobile from '../../consts/isMobile';
import SearchIcon from '../../icons/searchIcon.svg';
import './styles.scss';

const Search = (props) => {
  const { searchIsClicked, handleSearchClick, filterUsers, users } = props;

  const handleChange = (e) => {
    const { value = '' } = e.target;
    const newUsers = users.filter((user) => user.email.toLowerCase().includes(value.toLowerCase()));
    filterUsers(newUsers);
  };

  return (
    <div className="search">
      {
        searchIsClicked || isMobile ? (
          <div className="animation_trigger">
            <input className="searchInput" placeholder="Поиск по Email" aria-label="search" onChange={handleChange} />
            <img
                className="searchIcon"
                src={SearchIcon}
                alt="search icon"
              />
          </div>
        ) : <img
              onClick={handleSearchClick}
              className="searchIcon"
              src={SearchIcon}
              alt="search icon"
            />
      }
    </div>  
)
}

export default Search;
