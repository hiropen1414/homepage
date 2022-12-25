import { FileExclamationOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { ADJACENT_CARD } from '../../constants/text';
import { Image } from '../../Atoms/Image/Image';
import Goal from '../../static/svg/goal.svg';

export const PHILOSOPHY: {
  [key: string]: {
    titleText?: string,
    text: string,
    icon?: ReactNode,
    type: string,
    side?: 'left' | 'right' | 'adjacent',
    transition?: string;
  }
} = {
  title: {
    type: 'title',
    titleText: 'Philosophy',
    text: 'サークルではなく、部活として活動している電気部。\n\nその電気部が活動するうえでの基本理念をご紹介します。',
  },
  vision: {
    type: 'content',
    titleText: 'Vision',
    text: '活動する全員が有用なスキルを身に着け発揮できる場となる。',
    icon: <Image preview={false} src={Goal} styles={{
      width: '100%',
      marginTop: 32,
      marginBottom: -24
    }} />,
    side: ADJACENT_CARD,
    transition: '0.5s',
  },
  mission: {
    type: 'content',
    titleText: 'Mission',
    text: 'ITが一般化した社会で、市場価値の高い人材を育成し、より市場の発展に貢献する。',
    icon: <FileExclamationOutlined style={{
      color: '#00FF7F',
      fontSize: '7em',
      marginTop: 65,
    }} />,
    side: ADJACENT_CARD,
    transition: '2s',
  },
  value: {
    type: 'content',
    titleText: 'Value',
    text: '基本的なプログラミングスキルを身に着け、自主性を持ってアクティブに取り組む。',
    icon: <ThunderboltOutlined style={{
      color: '#FFFF00',
      fontSize: '7em',
      marginTop: 65,
    }} />,
    side: ADJACENT_CARD,
    transition: '3.25s',
  }
};

export const ACTIVITIES: {
  [key: string]: {
    titleText?: string,
    text: string,
    icon?: ReactNode,
    type: string,
    side?: 'left' | 'right' | 'adjacent',
  }
} = {
  title: {
    type: 'title',
    titleText: 'Activities',
    text: '実際の電気部の活動をご紹介します。'
  },
  game: {
    type: 'content',
    text: 'aa',
    titleText: 'ゲーム制作',
    // src: taskImage,
    side: 'right',

  },
  media: {
    type: 'content',
    text: 'aa',
    titleText: 'メディア制作',
    side: 'left',
    // src: taskImage,
  },
  web: {
    type: 'content',
    text: 'aa',
    titleText: 'web制作',
    side: 'right',
    // src: taskImage,
  },
  elect: {
    type: 'content',
    text: 'aa',
    titleText: '電子工作',
    side: 'left',
    // src: taskImage,
  },
};
export const CardType: {
  [key: string]: {
    [key: string]: {
      titleText?: string,
      text: string,
      icon?: ReactNode,
      type: string,
      side?: 'left' | 'right' | 'adjacent',
      transition?: string
    }
  }
} = {
  '1': PHILOSOPHY,
  '2': ACTIVITIES
};