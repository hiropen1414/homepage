import { Title } from '../Atoms/Typography/Title';
import { Option } from '../Atoms/Typography/option';
import { Card } from '../Molecules/Card/Card';
import { CSSProperties, useEffect, useState } from 'react';
import { CardType } from './constants/CardContents';
import { isEqual } from 'lodash';
import { Space } from 'antd';
import { ADJACENT_CARD, RIGHT } from '../constants/text';
import { ACTIVITIES, TITLE } from './constants/text';


type Props = {
  headline: {
    style?: CSSProperties;
  }
}

export const Introduction = (props: Props) => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 450
      ? setIsVisible(true)
      : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const styles = {
    text: {
      fontSize: '1.25em',
      marginLeft: '4em',
      marginTop: '-2.5em',
      paddingBottom: '1.5em',
    },
    font: {
      fontSize: '3.5em',
      margin: '1.5em',
      marginTop: 56,
      paddingLeft: 28,
      height: 100,
      width: 528,
      lineHeight: 2,
      background: 'rgb(230,230,230,0.5)',
      borderLeft: 'solid 15px black'
    },
    bodyStyle: {
      width: 700,
      height: 300,
      padding: 0,
      marginRight: 0,
    },
    boxStyle: {
      position: 'relative' as const,
      marginTop: -16,
      marginBottom: 88,
      marginLeft: 48
    },
    boxStylePhilosophy: {
      width: 324,
      padding: 0,
      marginRight: 0,
      marginTop: 32,
      opacity: isVisible ? 1 : 0,
      transition: '0s',
      border: 'solid 3px rgba(30,30,30,0.4)',
      borderRadius: 5
    },
    bodyStylePhilosophy: {
      width: '100%',
      height: 200,
      marginTop: 30,
    },
    cardTextStyle: {
      width: 296,
      wordWrap: 'break-word' as const,
      paddingRight: 24
    },
    titleStyle: {
      textAlign: 'center' as const,
    }

  };
  const titleOption: Option = {
    level: 1,
  };

  return (
    <>
      {Object.keys(CardType).map((value) => {
        console.log(value);
        return (
          <>
            {Object.keys(CardType[value]).map((id) => {
              if (isEqual(CardType[value][id].type, TITLE)) {
                return (
                  <>
                    <div>
                      <Title
                        text={CardType[value][id].titleText || ''}
                        optionProps={titleOption}
                        style={styles.font}
                      />
                    </div>
                    <div>
                      <p style={props.headline.style}>
                        {CardType[value][id].text.split('\n').map((str: string) => {
                          return (
                            <>
                              {str}
                              <br />
                            </>
                          );
                        })}
                      </p>
                    </div>
                  </>
                );
              } else {
                const transitionStyle = { ...styles.boxStylePhilosophy, transition: CardType[value][id].transition };
                return (
                  <Space key={id}>
                    <div style={{
                      width: isEqual(CardType[value][id].side, RIGHT)
                        ? 448 : isEqual(CardType[value][id].side, ADJACENT_CARD) ? 64 : 0
                    }}>
                    </div>
                    {
                      (isEqual(value, ACTIVITIES)) ? (
                        <Card
                          title={<Title level={1} text={CardType[value][id].titleText} />}
                          text={CardType[value][id].text}
                          border={true}
                          style={styles.bodyStyle}
                          element={CardType[value][id].icon}
                          boxStyle={styles.boxStyle}
                        />
                      ) : (
                        <Card
                          title={<Title level={1} text={CardType[value][id].titleText} style={styles.titleStyle} />}
                          text={CardType[value][id].text}
                          border={true}
                          cardTextStyle={styles.cardTextStyle}
                          element={CardType[value][id].icon}
                          boxStyle={transitionStyle}
                          style={styles.bodyStylePhilosophy}
                        />
                      )
                    }
                  </Space>
                );
              }
            })}
          </>
        );
      })}
    </>
  );
};