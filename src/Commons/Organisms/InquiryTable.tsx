import { useEffect, useState } from 'react';
import { Button } from '../Atoms/Button/Button';
import { DataType } from '../Atoms/Table/dataType';
import { Table } from '../Atoms/Table/Table';
import { PROPERTY_NAME, PROPERTY_VALUE } from '../constants/text';
import { makeNewLine } from '../static/function/makeNewLine';
import { FormType } from '../static/FormInfo/FormInfo';
import { InquiryDone } from './InquiryDone';

type Props = {
  inquiryData: FormType;
  onSubmit: () => void;
  checkForm: () => void;
}

export const InquiryTable = (props: Props) => {

  const styles = {
    table: {
      width: 900,
      maxWidth: 1400,
      margin: 'auto',
    },
    backButton: {
      background: 'rgb(250, 90, 90)',
      border: 'none',
      color: 'white',
      width: 128,
      height: 50,
      flex: 1
    },
    submitButton: {
      background: 'rgb(90, 250, 90)',
      border: 'none',
      color: 'white',
      width: 128,
      height: 50,
      flex: 1,
      marginLeft: 128,
    },
    buttonBox: {
      width: 600,
      maxWidth: 1400,
      margin: 'auto',
      marginTop: 48,
      paddingBottom: 88,
      display: 'flex'
    },
    confirm: {
      textAlign: 'center' as const,
      fontSize: '2em'
    }
  };

  const { inquiryData, checkForm } = props;
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const dataSet = (
      Object.keys(inquiryData).map((key, id) => {
        return {
          key: id,
          propertyName: inquiryData[key].name,
          propertyValue: makeNewLine(inquiryData[key].value)
        };
      })
    );

    setDataSource(dataSet);
  }, []);

  const columns = [
    {
      title: '項目',
      width: 256,
      dataIndex: PROPERTY_NAME,
      key: PROPERTY_NAME,
    },
    {
      title: '内容',
      dataIndex: PROPERTY_VALUE,
      key: PROPERTY_VALUE,
    },
  ];

  const setSubmitFunc = () => {
    props.onSubmit();
    setSubmit(true);
  };

  return (
    <>
      {(submit) ? (
        <InquiryDone />
      ) : (
        <>
          <p style={styles.confirm}>送信内容確認</p>
          <div style={styles.table}>
            <Table
              pagiNation={false}
              bordered={true}
              dataSource={dataSource}
              columns={columns} />
            <div style={styles.buttonBox}>
              <Button
                style={styles.backButton}
                label='修正する'
                type='primary'
                onClick={checkForm} />
              <Button
                style={styles.submitButton}
                label='送信する'
                type='primary'
                onClick={setSubmitFunc} />
            </div>
          </div>
        </>
      )}
    </>
  );
};