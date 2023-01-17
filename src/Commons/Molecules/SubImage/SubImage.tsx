import { css } from '@emotion/react';
import { extend, isEqual } from 'lodash';
import { ReactNode, useEffect, useState } from 'react';
import { GameInfo } from '../../../Pages/Game/gameInfo';

type Props = {
  gameImageNode: ReactNode[];
  gameIndex: number;
  gameInfo: GameInfo;
}

export const SubImage = (props: Props) => {
  const [pictureArray, setPictureArray] = useState([0]);
  const { gameImageNode, gameIndex, gameInfo } = props;
  const styles = {
    mainImage: {
      marginTop: 24,
      width: 624,
      height: 356,
      border: 'solid 2px black',
    },
    subImageBox: {
      display: 'flex',
      marginTop: 16,
    }
  };

  useEffect(() => {
    const initArray = Object.keys(gameInfo).map(() => { return 0; });
    setPictureArray({ ...initArray });
  }, []);

  const onImgClick = (index: number, nodeIndex: number) => {
    setPictureArray({ ...pictureArray, [index]: nodeIndex });
  };

  return (
    <>
      <div style={styles.mainImage}>
        {gameImageNode[pictureArray[gameIndex]]}
      </div>
      <div style={styles.subImageBox}>
        {gameImageNode.map((imageContent, nodeIndex) => {
          const isChosenImage = isEqual(pictureArray[gameIndex], nodeIndex);
          return (
            <div
              key={nodeIndex}
              style={{
                opacity: (isChosenImage) ? 0.5 : 1,
                border: `solid ${(isChosenImage) ? '2px red' : '1px rgb(70,70,70)'} `,
                width: 88,
                marginRight: 24,
              }}
              onClick={() => onImgClick(gameIndex, nodeIndex)}
              className='subImage'
            >
              {imageContent}
            </div>
          );
        })}
      </div>
    </>
  );
};