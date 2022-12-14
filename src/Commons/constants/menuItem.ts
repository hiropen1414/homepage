import { MenuProps } from 'antd';
import { ELECT, GAME, INQUIRY, MEDIA, WEB, HOME, ACTIVITY } from './index';
import { ACTIVITY_TEXT, ELECT_TEXT, GAME_TEXT, HOME_TEXT, INQUIRY_TEXT, MEDIA_TEXT, MENU_LIST, WEB_TEXT } from './text';

export const MENU_ITEMS: MenuProps['items'] = [
  {
    label: HOME_TEXT,
    key: HOME,
  },
  {
    label: MENU_LIST,
    key: 'app',
    children: [
      {
        label: GAME_TEXT,
        key: GAME,
      },
      {
        label: MEDIA_TEXT,
        key: MEDIA,
      },
      {
        label: WEB_TEXT,
        key: WEB,
      },
      {
        label: ELECT_TEXT,
        key: ELECT,
      },
    ]
  },
  {
    label: ACTIVITY_TEXT,
    key: ACTIVITY,
  },
  {
    label: INQUIRY_TEXT,
    key: INQUIRY,
  }
];