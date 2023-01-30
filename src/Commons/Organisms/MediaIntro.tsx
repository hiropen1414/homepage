import { MEDIA_INFO } from '../../Pages/Media/mediaInfo';
import { DESCRIBE } from '../constants/text';
import { makeNewLine } from '../static/function/makeNewLine';

export const MediaIntro = () => {
  const styles = {
    describeBox: {
      display: 'block',
    },
    titleBox: {
      width: 400,
      display: 'inline-block',
      position: 'relative' as const,
      left: 88,
      height: 'auto',
      lineHeight: 60,
      textAlign: 'center' as const,
      padding: '7px 0',
      fontSize: 18,
      background: '#F7B977',
      color: '#ffffff',
      boxSizing: 'border-box' as const,
    },
    explanationBox: {
      display: 'table',
      position: 'relative' as const,
      top: 54,
      left: 64,
      height: 236,
      width: 440,
      border: 'solid 3px rgb(100,100,128,0.8)',
    },
    introBox: {
      display: 'flex',
      marginTop: 32,
      marginLeft: 17,
      paddingTop: 88,
      paddingBottom: 64,
      borderTop: 'dashed 4px black',
    },
    mediaTitle: {
      textAlign: 'center' as const,
      fontSize: '2em',
      marginBottom: 48,
      margin: 0,
      padding: '0 30px',
      borderTop: 'dashed 2px rgba(255, 255, 255, 0.5)',
      borderBottom: 'dashed 2px rgba(255, 255, 255, 0.5)',
      lineHeight: '42px',
    },
    movieBox: {
      position: 'relative' as const,
      left: 144,
    },
    boxTitle: {
      position: 'absolute' as const,
      display: 'inline-block',
      top: -27,
      left: -3,
      padding: '0 9px',
      height: 25,
      fontSize: '1.25em',
      background: 'rgb(100,100,128,0.8)',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: '5px 5px 0 0',
    },
    explanation: {
      display: ' table-cell',
      textAlign: 'center' as const,
      margin: '1em 1em',
      verticalAlign: 'middle',
      fontSize: '1.25em',
    },
  };

  return (
    <>
      {Object.keys(MEDIA_INFO).map((key) => {
        return (
          <div key={key} style={styles.introBox}>
            <div style={styles.describeBox}>
              <div style={styles.titleBox} className='titleBox'>
                <p style={styles.mediaTitle}>{MEDIA_INFO[key].name}</p>
              </div>
              <div style={styles.explanationBox}>
                <span style={styles.boxTitle}>{DESCRIBE}</span>
                <p style={styles.explanation}>{makeNewLine(MEDIA_INFO[key].explanation)}</p>
              </div>
            </div>
            <div style={styles.movieBox}>
              <iframe
                width='600'
                height='355'
                src={MEDIA_INFO[key].moviePath}
                title='YouTube video player'
                allow='
                accelerometer; 
                autoplay;
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share'
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
        );
      })
      }
    </>
  );
};