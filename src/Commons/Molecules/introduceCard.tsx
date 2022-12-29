import { ForwardOutlined } from '@ant-design/icons';
import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Card } from '../Atoms/Card/Card';

type Props = {
  border?: boolean;
  style?: React.CSSProperties;
  element?: ReactNode;
  boxStyle?: CSSProperties;
  text?: string | React.ReactNode;
  title?: ReactNode;
  cardTextStyle?: CSSProperties;
  hoverAble?: boolean;
  isTransition?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const IntroduceCard = (props: Props) => {

  const styles = {
    icon: {
      position: 'absolute' as const,
      right: 16,
      bottom: 1,
      fontSize: '2.5em'
    }
  };

  return (
    <div onClick={props.onClick} style={props.boxStyle}>
      <Card
        border={props.border}
        style={props.style}
        element={props.element ?? null}
        hoverAble={props.hoverAble}
        content={
          <>
            {props.title}
            <p style={props.cardTextStyle}>
              {props.text}
            </p>
            {(props.isTransition) && <ForwardOutlined style={styles.icon} />}
          </>
        }
      />
    </div>
  );
};