import Top from './Top';
import { Game } from './Game';
import { Error } from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GAME_PATH, HOME_URL } from '../Commons/constants/path';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Top />} />
        <Route path={GAME_PATH} element={<Game />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
