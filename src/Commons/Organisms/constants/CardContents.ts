import { ADJACENT_CARD } from '../../constants/text';
import conferenceImage from '../../static/img/conference.png';
import taskImage from '../../static/img/task.png';


export const PHILOSOPHY: {
  [key: string]: {
    titleText?: string,
    text: string,
    src?: string,
    type:string,
    side?:'left' | 'right',
  }
} = {
  title:{
    type:'title',
    titleText:'Philosophy',
    text: 'サークルではなく、部活として活動している電気部。\n\nその電気部が活動するうえでの基本理念をご紹介します。',
  },
  philosophy: {
    type:'content',
    titleText:'Vision',
    text: '活動する全員が有用なスキルを身に着け発揮できる場となる。',
    src: conferenceImage,
    side:'right',
  },
  mission:{
    type:'content',
    titleText:'Mission',
    text: 'ITが一般化した社会で、市場価値の高い人材を育成し、より市場の発展に貢献する。',
    src: taskImage,
    side:'left',
  },
  value:{
    type:'content',
    titleText:'Value',
    text:'基本的なプログラミングスキルを身に着け、自主性を持ってアクティブに取り組む。',
    src: taskImage,
    side:'right',
  }
};

export const ACTIVITIES: {
  [key: string]: {
    titleText?: string,
    text: string,
    src?: string,
    type:string,
    side?: 'left' | 'right' | 'adjacent',
  }
} = {
  title:{
    type:'title',
    titleText:'Activities',
    text:'実際の電気部の活動をご紹介します。'
  },
  game: {
    type:'content',
    text: 'aa',
    titleText:'ゲーム制作',
    // src: taskImage,
    side: ADJACENT_CARD,
    
  },
  media: {
    type:'content',
    text: 'aa',
    titleText:'メディア制作',
    side: ADJACENT_CARD,
    // src: taskImage,
  },
  web: {
    type:'content',
    text: 'aa',
    titleText:'web制作',
    side: ADJACENT_CARD,
    // src: taskImage,
  },
  elect: {
    type:'content',
    text: 'aa',
    titleText:'電子工作',
    side: ADJACENT_CARD,
    // src: taskImage,
  },
};
export const CardType: {
  [key: string]: {
    [key: string]: {
      titleText?: string,
      text: string,
      src?: string,
      type:string,
      side?:'left' | 'right' | 'adjacent',
    }
  }
} = {
  '1': PHILOSOPHY,
  '2': ACTIVITIES
};