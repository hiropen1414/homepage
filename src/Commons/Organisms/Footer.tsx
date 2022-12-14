import { Image } from '../Atoms/Image/Image';
import logo from '../static/img/footer.png';
export const Footer = () => {
  const style = {
    footer: {
      background: 'rgb(38, 38, 38)',
      width: '100vw',
      height: 500,
      maxWidth: '1440px',
    },
    image: {
      width:450,
      position:'absolute' as const,
      left: 430,
    }
  };

  return (
    <div style={style.footer}>
      <Image src={logo} styles={style.image} preview={false} />
    </div>
  );
};