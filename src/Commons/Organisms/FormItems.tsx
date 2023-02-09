import { isEqual } from 'lodash';
import { ReactNode } from 'react';
import { FormItem } from '../Atoms/Form/FormItem';
import { Input } from '../Atoms/Input/Input';
import { InputPassword } from '../Atoms/Input/InputPassword';
import { TextArea } from '../Atoms/TextArea/TextArea';
import { PASSWORD, TEXTAREA, VALIDATION_MESSAGE } from '../constants/text';
import { FormType } from '../static/FormInfo/FormInfo';

type Props = {
  onSubmit: ReactNode | (() => Promise<void>);
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
}

export const FormItems = (props: Props) => {
  const styles = {
    formItem: {
      marginBottom: 50,
    }
  };

  const { formData, setFormData } = props;

  const setInputInquiry = (value: string, id: string) => {
    if (id) {
      setFormData({ ...formData, [id]: { ...formData[id], value } });
    }
  };

  const setTextAreaInquiry = (value: string, id: string) => {
    if (id) {
      setFormData({ ...formData, [id]: { ...formData[id], value } });
    }
  };

  return (
    <>
      {Object.keys(formData).map((key) => {
        const isRequire = formData[key].required ?? true;
        return (
          <FormItem
            key={key}
            style={styles.formItem}
            name={formData[key].name}
            label={formData[key].label}
            rules={[{ required: isRequire, message: VALIDATION_MESSAGE }]}
          >
            {
              (isEqual(formData[key].type, TEXTAREA)) ? (
                <TextArea
                  rows={formData[key].rows}
                  onChange={setTextAreaInquiry}
                  id={key}
                />
              ) : (isEqual(formData[key].type, PASSWORD)) ? (
                <InputPassword
                  id={key}
                  placeholder={formData[key].placeHolder}
                  styles={formData[key].style}
                  onChange={setInputInquiry}
                />
              ) : (
                <Input
                  id={key}
                  placeholder={formData[key].placeHolder}
                  styles={formData[key].style}
                  onChange={setInputInquiry}
                />
              )
            }
          </FormItem>
        );
      })}
      {props.onSubmit}
    </>
  );
};