import Top from './Top/Top';
import { Game } from './Game/Game';
import { Error } from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  CLUB_MEMBER_TOP_PATH,
  ERROR_PATH,
  GAME_PATH,
  HOME_URL,
  INQUIRY_PATH,
  LOGIN_PATH,
  MEDIA_PATH,
  QUESTION_PATH
} from '../Commons/constants/path';
import { NOT_FOUND_CODE } from '../Commons/constants/errorcode';
import { NOT_FOUND } from '../Commons/constants/text';
import { ScrollToTop } from '../Commons/static/function/ScrollToTop';
import { Media } from './Media/Media';
import { Question } from './Question/Question';
import { Inquiry } from './Inquiry/Inquiry';
import { Login } from './Login/Login';
import { ClubMemberTop } from './ClubMemberTop/ClubMemberTop';

const App = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename='/new-denki_homepage'>
      <ScrollToTop>
        <Routes>
          <Route path={HOME_URL} element={<Top />} />
          <Route path={GAME_PATH} element={<Game />} />
          <Route path={MEDIA_PATH} element={<Media />} />
          <Route path={QUESTION_PATH} element={<Question />} />
          <Route path={INQUIRY_PATH} element={<Inquiry />} />
          <Route path={ERROR_PATH} element={<Error state={{ errorCode: NOT_FOUND_CODE, errorMessage: NOT_FOUND }} />} />
          <Route path='*' element={<Error state={{ errorCode: NOT_FOUND_CODE, errorMessage: NOT_FOUND }} />} />

          {/* 以下のLogin直下のchildrenに、ログイン後のprivateページを作成する */}
          <Route path={LOGIN_PATH} element={<Login />}>
            <Route path={CLUB_MEMBER_TOP_PATH} element={<ClubMemberTop />} />
          </Route>

        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
