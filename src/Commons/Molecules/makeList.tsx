import { useNavigate } from 'react-router';
import { List } from '../Atoms/List/List';
import { FOOTER_INFO, INFO_TITLE } from '../Organisms/constants/footerList';

export const MakeList = () => {
  const navigate = useNavigate();
  const styles = {
    listBoxStyle: {
      width: 256,
    },
    box: {
      display: 'flex',
      paddingTop:48,
      marginBottom: 16,
      marginLeft: 56,
      paddingLeft: 56
    },
    title: {
      marginBottom: 32,
      fontSize: '1.5em',
      color: 'white',
    }
  };

  return (
    <div style={styles.box}>
      {Object.keys(FOOTER_INFO).map((key) => {
        return (
          <List
            key={key}
            type='ul'
            listStyle={styles.listBoxStyle}
            content={
              <>
                <p style={styles.title}>
                  {INFO_TITLE[key]}
                </p>
                {Object.keys(FOOTER_INFO[key]).map((id) => {
                  return (
                    <li
                      className={FOOTER_INFO[key][id].className}
                      style={FOOTER_INFO[key][id].style}
                      key={id}
                      onClick={() => { navigate(FOOTER_INFO[key][id].path); }}
                    >
                      {FOOTER_INFO[key][id].content}
                    </li>
                  );
                })
                }
              </>
            }
          />
        );
      })}
    </div>
  );
};