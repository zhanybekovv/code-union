import Sidebar from './components/Sidebar';
import Team from './components/Team';
import './App.scss';
import { useMemo, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('team');

  const renderCurrentPage = useMemo(() => {
    switch (currentPage) {
      case 'team':
        return <Team pageTitle={'Команда'}/>
      default:
        return <div>Lol kek</div>
    }
  }, [currentPage])

  return (
    <div className="App">
      <Sidebar />
      {renderCurrentPage}
    </div>
  );
}

export default App;
