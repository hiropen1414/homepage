import { INQUIRY_SUBTITLE_CONFIRM, INQUIRY_SUBTITLE_DONE, INQUIRY_SUBTITLE_ENTRY } from '../../constants/text';

export const INQUIRY_TITLE_TEXT: {
  [key:string]:string;
} = {
  entry: INQUIRY_SUBTITLE_ENTRY,
  confirm: INQUIRY_SUBTITLE_CONFIRM,
  done: INQUIRY_SUBTITLE_DONE,
};

export type InquiryTitle = 'entry' | 'confirm' | 'done';