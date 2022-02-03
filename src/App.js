import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
