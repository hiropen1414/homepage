import { useMutation } from '@apollo/client';
import { every, isEqual } from 'lodash';
import { useState } from 'react';
import { Button } from '../../Commons/Atoms/Button/Button';
import { Form } from '../../Commons/Atoms/Form/Form';
import { FormItem } from '../../Commons/Atoms/Form/FormItem';
import { UPDATE_INQUIRY } from '../../Commons/constants/GraphQL/schema';
import { CreateInquiryInput } from '../../Commons/constants/GraphQL/schemaType';
import { CONFIRM, DONE, ENTRY, INQUIRY_TITLE } from '../../Commons/constants/text';
import { InquiryTitle, INQUIRY_TITLE_TEXT } from '../../Commons/Organisms/constants/InquiryTitle';
import { Header } from '../../Commons/Organisms/Header';
import { InquiryForm } from '../../Commons/Organisms/InquiryForm';
import { InquiryTable } from '../../Commons/Organisms/InquiryTable';
import { makeNewLine } from '../../Commons/static/function/makeNewLine';
import { INQUIRY_INFO } from '../../Commons/static/InquiryInfo/InquiryInfo';

export const Inquiry = () => {

  const styles = {
    titleBox: {
      width: 1400,
      maxWidth: '100%',
      margin: 'auto',
      marginBottom: 48,
      borderBottom: 'solid rgb(120,120,120,0.2)'
    },
    title: {
      fontSize: '2.5em',
      textAlign: 'center' as const
    },
    subTitleBox: {
      width: 1400,
      maxWidth: '100%',
      margin: 'auto',
      paddingBottom: 48,
    },
    subTitle: {
      textAlign: 'center' as const
    },
    form: {
      maxWidth: 848
    },
    nextButton: {
      width: 256,
      height: 48,
      marginLeft: 524,
      marginBottom: 88
    }
  };

  const [inquiryData, setInQuiryData] = useState(INQUIRY_INFO);
  const [inquiryTitle, setInquiryTitle] = useState<InquiryTitle>(ENTRY);
  const [isFormCheck, setIsFormCheck] = useState(false);
  const [createMutation] = useMutation(UPDATE_INQUIRY);

  //各dataに対して入力があるかチェック
  const validationCheckArray = Object.keys(inquiryData).map((key) => {
    return (!isEqual(inquiryData[key].value, '') || isEqual(inquiryData[key].required, false));
  });

  const validationCheck = every(validationCheckArray);

  //mutation
  const onSubmit = () => {
    setInquiryTitle(DONE);
    const inquiryDataValues = Object.values(inquiryData);
    const input = {
      name: inquiryDataValues[0].value,
      katakanaName: inquiryDataValues[1].value,
      address: inquiryDataValues[2].value,
      content: inquiryDataValues[3].value,
      remarks: inquiryDataValues[4].value
    } as CreateInquiryInput;
    createMutation({
      variables: {
        input
      }
    });
  };

  //入力 <=> 確認
  const checkForm = () => {
    (isFormCheck) ? setInquiryTitle(ENTRY) : setInquiryTitle(CONFIRM);
    setIsFormCheck(!isFormCheck);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <Header delete={true} />
      <div style={styles.titleBox}>
        <p style={styles.title}>{INQUIRY_TITLE}</p>
      </div>
      <div style={styles.subTitleBox}>
        <p style={styles.subTitle} >{makeNewLine(INQUIRY_TITLE_TEXT[inquiryTitle])}</p>
      </div>
      {(isFormCheck) ? (
        <InquiryTable
          inquiryData={inquiryData}
          checkForm={checkForm}
          onSubmit={onSubmit}
        />
      ) : (
        <Form
          labelCol={{ span: 13 }}
          style={styles.form}
        >
          <InquiryForm
            inquiryData={inquiryData}
            setInQuiryData={setInQuiryData}
            onSubmit={
              <FormItem name=''>
                <Button
                  style={styles.nextButton}
                  type='primary'
                  htmlType='submit'
                  label='次へ'
                  onClick={(validationCheck) ? checkForm : undefined}
                />
              </FormItem>
            }
          />
        </Form>
      )}
    </div>
  );
};