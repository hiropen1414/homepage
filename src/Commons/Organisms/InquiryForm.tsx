import { isEqual } from 'lodash';
import { ReactNode } from 'react';
import { FormItem } from '../Atoms/Form/FormItem';
import { Input } from '../Atoms/Input/Input';
import { TextArea } from '../Atoms/TextArea/TextArea';
import { TEXTAREA, VALIDATION_MESSAGE } from '../constants/text';
import { InquiryType } from '../static/InquiryInfo/InquiryInfo';

type Props = {
  onSubmit: ReactNode;
  inquiryData: InquiryType;
  setInQuiryData: React.Dispatch<React.SetStateAction<InquiryType>>;
}

export const InquiryForm = (props: Props) => {
  const styles = {
    formItem: {
      marginBottom: 50,
    }
  };

  const { inquiryData, setInQuiryData } = props;

  const setInputInquiry = (value: string, id: string) => {
    if (id) {
      setInQuiryData({ ...inquiryData, [id]: { ...inquiryData[id], value } });
    }
  };

  const setTextAreaInquiry = (value: string, id: string) => {
    if (id) {
      setInQuiryData({ ...inquiryData, [id]: { ...inquiryData[id], value } });
    }
  };

  return (
    <>
      {Object.keys(inquiryData).map((key) => {
        const isRequire = inquiryData[key].required ?? true;
        return (
          <FormItem
            key={key}
            style={styles.formItem}
            name={inquiryData[key].name}
            label={inquiryData[key].label}
            rules={[{ required: isRequire, message: VALIDATION_MESSAGE }]}
          >
            {
              (isEqual(inquiryData[key].type, TEXTAREA)) ? (
                <TextArea
                  rows={inquiryData[key].rows}
                  onChange={setTextAreaInquiry}
                  id={key}
                />
              ) : (
                <Input
                  id={key}
                  placeholder={inquiryData[key].placeHolder}
                  styles={inquiryData[key].style}
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