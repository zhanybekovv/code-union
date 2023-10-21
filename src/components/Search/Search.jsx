import SearchLogo from '../../icons/searchLogo.svg';
import './styles.scss';

const Search = (props) => {
  const { searchIsClicked, handleSearchClick } = props;

  const handleChange = (e) => {
    console.log('e', e.target.value)
  };

  return (
    <div className="search">
      {
        searchIsClicked ? (
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
