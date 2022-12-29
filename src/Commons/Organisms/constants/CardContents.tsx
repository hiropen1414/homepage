import { FileExclamationOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { ADJACENT_CARD, ELECT, GAME, MEDIA, MISSION, VALUE, VISION, WEB } from '../../constants/text';
import { Image } from '../../Atoms/Image/Image';
import Goal from '../../static/svg/goal.svg';
import gameImage from '../../static/img/game.png';
import mediaImage from '../../static/img/media.png';
import webImage from '../../static/img/web.png';
import electImage from '../../static/img/elect.png';

import { ELECT_PATH, GAME_PATH, MEDIA_PATH, WEB_PATH } from '../../constants/path';

export const PHILOSOPHY: {
  [key: string]: {
    titleText?: string,
    text: string,
    icon?: ReactNode,
    type: string,
    side?: 'left' | 'right' | 'adjacent',
    transition?: string,
    hoverAble?: boolean
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
    text: 'ITが一般化した社会で、市場価値の高い人材を育成し、市場の発展に貢献する。',
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
    text: '基本的なプログラミングスキルを身に着け、アクティブに取り組む。',
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
    transition?: string,
    hoverAble?: boolean,
    path?: string,
  }
} = {
  title: {
    type: 'title',
    titleText: 'Activities',
    text: '実際の電気部の活動をご紹介します。'
  },
  game: {
    type: 'content',
    text: '主にUnityを用いてゲーム制作をしています。\n\n日々コーディングスキルを磨きながら、作ったゲームをweb上に公開したり、学園祭で展示したりしています。',
    titleText: 'Game',
    icon: <Image
      src={gameImage}
      preview={false}
      boxStyles={{ height: '100%' }}
      height='100%'
      className='slantingImage'
    />,
    side: 'right',
    transition: '2s',
    hoverAble: true,
    path: GAME_PATH,
  },
  media: {
    type: 'content',
    text: 'Aviutlや、ゆっくりムービーメーカーなどで動画編集をしたり、音楽作品を作ったりしています。\n\n部のYoutubeチャンネルやTwitterで紹介動画を公開しています。',
    titleText: 'Media',
    side: 'left',
    icon: <Image
      src={mediaImage}
      preview={false}
      boxStyles={{ height: '100%' }}
      height='100%'
      className='slantingImage'
    />,
    transition: '2s',
    hoverAble: true,
    path: MEDIA_PATH,
  },
  web: {
    type: 'content',
    text: '画像加工サイトや、各種ホームページなど、webサイトやwebアプリを製作しています。\n\nこのホームページもweb開発の一環です。',
    titleText: 'Web',
    side: 'right',
    icon: <Image
      src={webImage}
      preview={false}
      boxStyles={{ height: '100%' }}
      height='100%'
      className='slantingImage'
    />,
    transition: '2s',
    hoverAble: true,
    path: WEB_PATH,
  },
  elect: {
    type: 'content',
    text: 'つい最近再開した電子工作の活動です。\n\n仮想環境での練習や、実機で動かしたりなど、多岐にわたる活動をしています。',
    titleText: 'Electronic',
    side: 'left',
    icon: <Image
      src={electImage}
      preview={false}
      boxStyles={{ height: '100%' }}
      height='100%'
      className='slantingImage'
    />,
    transition: '2s',
    hoverAble: true,
    path: ELECT_PATH,
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
      transition?: string,
      hoverAble?: boolean,
      path? :string,
    }
  }
} = {
  '1': PHILOSOPHY,
  '2': ACTIVITIES
};

export const TRANS_RESTRICT_VALUES: {
  [key: string]: number;
} = {
  vision: 450,
  mission: 450,
  value: 450,
  game: 1100,
  media: 1400,
  web: 1700,
  elect: 2000,
};

export const TRANS_RESTRICT_BOOL: {
  [key: string]: {
    key: string;
    value: boolean;
  }
} = {
  vision:
  {
    key: VISION,
    value: false,
  },
  mission: {
    key: MISSION,
    value: false,
  },
  value: {
    key: VALUE,
    value: false,
  },
  game: {
    key: GAME,
    value: false,
  },
  media: {
    key: MEDIA,
    value: false,
  },
  web: {
    key: WEB,
    value: false,
  },
  elect: {
    key: ELECT,
    value: false,
  },
};