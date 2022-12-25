import { HORIZONTAL } from '../constants';
import { SEARCH } from '../constants/text';
import { Menu } from '../Molecules/Menu/Menu';
import { Search } from '../Molecules/Serach';
import { Image } from '../Atoms/Image/Image';
import logo from '../static/svg/icon_header.svg';

export const Header = () => {
  const style = {
    headerDesign: {
      margin: 'auto',
      display: 'flex',
      width: '90vw',
    },
    defaultImage: {
      height: 80,
      margin: '10px 0',
      display: 'block',
      float: 'left' as const,
      width: 250,
    },
    menu: {
      boxShadow: 'rgba(122,122,122,0.0588235) 0px 0px 24px 20px',
    },
    search: {
      marginLeft: 750,
      marginTop: 35
    },
    menuBox: {
      display: 'table',
      width: '100vw',
      maxWidth: '1440px',
    }
  };
  return (
    <>
      <div style={style.headerDesign}>
        <Image src={logo} styles={style.defaultImage} preview={false} />
        <div style={style.search}>
          <Search holder={SEARCH} />
        </div>
      </div>
      <div style={style.menuBox}>
        <Menu theme='light' mode={HORIZONTAL} style={style.menu} />
      </div>
    </>
  );
};