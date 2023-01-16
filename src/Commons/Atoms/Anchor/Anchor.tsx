import { ReactNode } from 'react';

type Props = {
  content?: ReactNode;
  link?: string;
  blank?: boolean;
}

export const Anchor = (props: Props) => {
  return (
    <a target={(props.blank) ? '_blank' : '_self'} rel='noopener noreferrer' href={props.link}>
      {props.content}
    </a>
  );
};