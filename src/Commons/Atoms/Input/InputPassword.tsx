import { Input as AntInput } from 'antd';

type Props = {
  placeholder?: string;
  styles?: React.CSSProperties;
  id: string;
  onChange: (value: string, id: string) => void;
}

export const InputPassword = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value, props.id);
  };
  return (
    <AntInput.Password
      style={props.styles}
      placeholder={props.placeholder ?? undefined}
      id={props.id}
      onChange={handleChange}
    />
  );
};