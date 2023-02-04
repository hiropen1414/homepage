import Top from './Top/Top';
import { Game } from './Game/Game';
import { Error } from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ERROR_PATH, GAME_PATH, HOME_URL, INQUIRY_PATH, MEDIA_PATH, QUESTION_PATH } from '../Commons/constants/path';
import { NOT_FOUND_CODE } from '../Commons/constants/errorcode';
import { NOT_FOUND } from '../Commons/constants/text';
import { ScrollToTop } from '../Commons/static/function/ScrollToTop';
import { Media } from './Media/Media';
import { Question } from './Question/Question';
import { Inquiry } from './Inquiry/Inquiry';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={HOME_URL} element={<Top />} />
          <Route path={GAME_PATH} element={<Game />} />
          <Route path={MEDIA_PATH} element={<Media />} />
          <Route path={QUESTION_PATH} element={<Question />} />
          <Route path={INQUIRY_PATH} element={<Inquiry />} />
          <Route path={ERROR_PATH} element={<Error state={{ errorCode: NOT_FOUND_CODE, errorMessage: NOT_FOUND }} />} />
          <Route path='*' element={<Error state={{ errorCode: NOT_FOUND_CODE, errorMessage: NOT_FOUND }} />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
