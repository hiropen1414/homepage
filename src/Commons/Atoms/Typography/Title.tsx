import { Typography } from 'antd';
import { Option } from './option';
type Props = {
  level?: 1 | 5 | 2 | 3 | 4 | undefined;
  text?: string;
  optionProps?: Option;
  style?:React.CSSProperties;
}

export const Title = (props: Props) => {

  const { Title } = Typography;

  return (
    <Title
      {...props.optionProps}
      style={props.style}
    >
      {props.text}
    </Title>
  );
};