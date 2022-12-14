import Top from './Top';
import { Game } from './Game';
import { Error } from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GAME_PATH } from '../Commons/constants/path';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path={GAME_PATH} element={<Game />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
