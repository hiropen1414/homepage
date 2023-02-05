import { Input } from 'antd';

type Props = {
  rows?: number;
  onChange: (value: string, id: string) => void;
  id: string;
}

export const TextArea = (props: Props) => {
  const { TextArea } = Input;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(event.target.value, props.id);
  };
  return (
    <TextArea
      rows={props.rows}
      id={props.id}
      onChange={handleChange}
    />
  );
};