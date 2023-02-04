import React from 'react';

export type InquiryType = {
  [key: string]: {
    label: string,
    name: string,
    value: string,
    type: string,
    placeHolder?: string,
    style?: React.CSSProperties,
    required?: boolean,
    rows?: number;
  }
}

export const INQUIRY_INFO: InquiryType = {
  name: {
    name: 'お名前(漢字)',
    label: 'name',
    value: '',
    type: 'input',
    placeHolder: '山田 太郎'
  },
  katakanaName: {
    name: 'お名前(カタカナ)',
    label: 'katakanaName',
    value: '',
    type: 'input',
    placeHolder: 'ヤマダ タロウ'
  },
  address: {
    name: 'メールアドレス',
    label: 'address',
    value: '',
    type: 'input',
    placeHolder: 'TaroYamada@gmail.com'
  },
  content: {
    name: 'お問い合わせ内容',
    label: 'content',
    value: '',
    type: 'textArea',
    rows: 5,
  },
  remarks: {
    name: '備考',
    label: 'remarks',
    value: '',
    type: 'input',
    required: false
  }
};