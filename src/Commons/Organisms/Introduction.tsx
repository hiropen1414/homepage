import { Title } from '../Atoms/Typography/Title';
import { Option } from '../Atoms/Typography/option';
import { Card } from '../Molecules/Card/Card';
import { CSSProperties } from 'react';
import { CardType } from './constants/CardContents';
import { isEqual } from 'lodash';
import { PHILOSOPHY, TITLE } from './constants/text';
import { Space } from 'antd';
import { ADJACENT_CARD, RIGHT } from '../constants/text';


type Props = {
  headline: {
    style?: CSSProperties;
  }
}

export const Introduction = (props: Props) => {
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
    },
    bodyStyle: {
      width: 700,
      height: 300,
      padding: 0,
      marginRight: 0,
    },
    coverImageStyle: {
      width: 325,
      height: 300,
      '&::before': {
        content: '',
        position: 'absolute' as const,
        bottom: 0,
        left: 0,
        borderBottom: ' 10vw solid #fff',
        borderLeft: '100vw solid transparent',
      }
    },
    boxStyle: {
      position: 'relative' as const,
      marginTop: -16,
      marginBottom: 88,
      marginLeft: 48
    },
    boxStyleCarousel: {
      width: 500,
      height: 300,
      marginBottom:128,
    },
    bodyStyleCarousel: {
      width: 500,
      height: 300,
    },

  };
  const titleOption: Option = {
    level: 1,
  };
  return (
    <>
      {Object.keys(CardType).map((value) => {
        console.log(value, PHILOSOPHY);
        return (
          <>
            {Object.keys(CardType[value]).map((id) => {
              if (isEqual(CardType[value][id].type, TITLE)) {
                return (
                  <>
                    <Title
                      text={CardType[value][id].titleText || ''}
                      optionProps={titleOption}
                      style={styles.font}
                    />
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
                  </>
                );
              } else {
                return (
                  <Space key={id}>
                    <div style={{
                      width: isEqual(CardType[value][id].side, RIGHT)
                        ? 448 : isEqual(CardType[value][id].side, ADJACENT_CARD) ? 80 : 0
                    }}>
                    </div>
                    {
                      (isEqual(value, PHILOSOPHY)) ? (
                        <Card
                          title={<Title level={1} text={CardType[value][id].titleText} />}
                          text={CardType[value][id].text}
                          border={true}
                          style={styles.bodyStyle}
                          cover={CardType[value][id].src}
                          imgStyle={styles.coverImageStyle}
                          boxStyle={styles.boxStyle}
                        />
                      ) : (
                        <Card
                          title={<Title level={1} text={CardType[value][id].titleText} />}
                          text={CardType[value][id].text}
                          border={true}
                          cover={CardType[value][id].src}
                          imgStyle={styles.coverImageStyle}
                          boxStyle={styles.boxStyleCarousel}
                          style={styles.bodyStyleCarousel}
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