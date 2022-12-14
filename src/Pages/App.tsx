import Top from './Top';
import { Game } from './Game';
import { Error } from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DEPLOY_PAGE, GAME_PATH } from '../Commons/constants/path';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/' || DEPLOY_PAGE } element={<Top />} />
        <Route path={GAME_PATH} element={<Game />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
