import { Form } from 'antd';
import { Rule } from 'antd/lib/form';
import { ReactNode } from 'react';

type Props = {
  label?: string;
  name: string;
  style?: React.CSSProperties;
  rules?: Rule[];
  children: ReactNode;
}

export const FormItem = (props: Props) => {
  return (
    <Form.Item
      name={props.name}
      label={props.name}
      style={props.style}
      rules={props.rules}
    >
      {props.children}
    </Form.Item>
  );
};