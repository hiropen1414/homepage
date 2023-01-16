import { ReactNode } from 'react';

type Props = {
  type: 'ul' | 'ol';
  content?: ReactNode;
  listStyle?: React.CSSProperties;
}

export const List = (props: Props) => {
  const ListType = props.type;
  return (
    <ListType style={props.listStyle}>
      {props.content}
    </ListType>
  );
};