import { ReactNode } from 'react';
import { Anchor } from '../../Atoms/Anchor/Anchor';
import { Image } from '../../Atoms/Image/Image';
import {
  ELECT_PATH,
  GAME_PATH,
  HOME_URL,
  INQUIRY_PATH,
  MEDIA_PATH,
  QUESTION_PATH,
  WEB_PATH
} from '../../constants/path';
import { FOOTER_CLASS_NAME } from '../../constants/text';
import twitterIcon from '../../static/svg/icon_twitter.svg';
import youtubeIcon from '../../static/svg/icon_youtube.svg';

const listStyle = {
  fontSize: '1em',
  marginTop: 16,
  marginLeft: 16,
  color: 'white',
  width: 'fit-content',
  transition: '.3s',
};

export const FOOTER_INFO: {
  [key: string]: {
    [key: string]: {
      name: string | ReactNode;
      path: string;
      style?: React.CSSProperties;
      className?: string;
    }
  }
} = {
  club: {
    top: {
      name: 'トップページ',
      path: '#',
      style: listStyle,
      className: FOOTER_CLASS_NAME
    },
    siteMap: {
      name: 'サイトマップ',
      path: '#',
      style: listStyle,
      className: FOOTER_CLASS_NAME
    },
    activity: {
      name: '活動について',
      path: HOME_URL,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    }
  },
  activity: {
    game: {
      name: 'ゲーム作品',
      path: GAME_PATH,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    },
    media: {
      name: 'メディア作品',
      path: MEDIA_PATH,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    },
    web: {
      name: 'web作品',
      path: WEB_PATH,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    },
    elect: {
      name: '電子工作品',
      path: ELECT_PATH,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    }
  },
  help: {
    question: {
      name: 'よくあるご質問',
      path: QUESTION_PATH,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    },
    inquiry: {
      name: 'お問い合わせ',
      path: INQUIRY_PATH,
      style: listStyle,
      className: FOOTER_CLASS_NAME
    }
  },
  sns: {
    twitter: {
      name: <Anchor
        blank={true}
        link='https://twitter.com/meisei_denkibu'
        content={<Image styles={{ width: 88 }} src={twitterIcon} preview={false} />}
      />,
      path: '#',
      style: {
        listStyle: 'none',
        width: 96,
      }
    },
    youtube: {
      name: <Anchor
        blank={true}
        link='https://www.youtube.com/channel/UC8mW4b5AgJsmDdX_oxM6t-w'
        content={<Image styles={{ width: 88 }} src={youtubeIcon} preview={false} />}
      />,
      path: '#',
      style: {
        listStyle: 'none',
        width: 96,
        position: 'relative' as const,
        left: 120,
        bottom: 88
      }
    }
  }
};

export const INFO_TITLE: {
  [key: string]: string;
} = {
  'club': '部活情報',
  'activity': 'コンテンツ',
  'help': 'ヘルプ',
  'sns': 'SNS'
};