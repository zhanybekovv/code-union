import Sidebar from './components/Sidebar';
import Team from './components/Team';
import './App.scss';
import { useCallback, useMemo, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('team');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);

  const renderCurrentPage = useMemo(() => {
    switch (currentPage) {
      case 'team':
        return <Team pageTitle={'Команда'} toggleSideMenu={toggle}/>
      default:
        return <div>Lol kek</div>
    }
  }, [currentPage, toggle])

  return (
    <div className="App">
      <Sidebar isMenuOpen={isMenuOpen} />
      {renderCurrentPage}
    </div>
  );
}

export default App;
