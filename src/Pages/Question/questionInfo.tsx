import { ReactNode } from 'react';
import { Image } from '../../Commons/Atoms/Image/Image';
import campusMap from '../../Commons/static/img/campusmap.png';

export type AccordionType = {
  title: ReactNode | string;
  content: ReactNode | string;
  isOpen: boolean;
}

export const QUESTION_INFO: AccordionType[] = [
  {
    title: '電気部ってどんな活動をしてるんですか？',
    content:
      <>
        <p>電気部は<br /></p>
        <ul>
          <li>Unity等を用いたゲーム制作</li>
          <li>Aviutl等を用いたメディア作品制作</li>
          <li>webメディア作品制作</li>
          <li>電子工作</li>
        </ul>
        <p>などを活動内容としています。<br /><br />また、これに加えて、基礎的なプログラミング言語(C言語等)を学んでもらいます。</p>
      </>,
    isOpen: false
  },
  {
    title: '活動日時とか活動場所とかを知りたいです。',
    content: <p>
      活動日時は今現在は毎週水曜日18:00から行っている者が多いです。<br /><br />ただコアタイムというものはありません。
    </p>,
    isOpen: false
  },
  {
    title: '部室ってどこにあるんですか？',
    content:
      <>
        <p>電気部の部室はPonte棟の325号室です。</p>
        <Image styles={{ width: '720px' }} src={campusMap} />
      </>,
    isOpen: false
  },
  {
    title: '部員は何人くらいいるんですか？',
    content:
      <>
        <p>部員は<br /></p>
        <ul>
          <li>1年生:13人</li>
          <li>2年生:9人</li>
          <li>3年生:1人 (´;ω;｀)</li>
          <li>4年生:2人</li>
        </ul>
        <p>となっております。</p>
      </>,
    isOpen: false
  },
  {
    title: '部費ってどのくらいですか？',
    content:
      <p>部費は、年間2000円、半期で1000円徴収する予定です。</p>,
    isOpen: false
  },
  {
    title: 'まったくの未経験でも問題ないですか？',
    content:
      <p>まったく問題ないです！部員のほぼ全員が未経験から始めています。</p>,
    isOpen: false
  },
  {
    title: '入部する際パソコンって必須ですか？',
    content:
      <p>部の方で貸し出しできるパソコンがあるので、手持ちがなくても大丈夫です。</p>,
    isOpen: false
  },
];