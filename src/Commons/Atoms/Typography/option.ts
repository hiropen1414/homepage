import { TooltipProps } from 'antd';
import { ReactNode } from 'react';

export type Option = {
  code?: boolean;
  // copyable?: boolean | copyable;
  delete?: boolean;
  disabled?: boolean;
  // editable?: boolean | editable;
  // ellipsis?: boolean | Omit<ellipsis, 'expandable' | 'rows' | 'onExpand'>;
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  mark?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  italic?: boolean;
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  underline?: boolean;
}

// type ellipsis = {
//   rows: number;
//   expandable: boolean;
//   suffix: string;
//   symbol: ReactNode;
//   tooltip: boolean | ReactNode | TooltipProps;
//   onExpand: (event: { target: HTMLElement }) => any;
//   onEllipsis: (arg0: ellipsis) => any;
// }

// type copyable = {
//   text: string;
//   onCopy: (event: HTMLElement) => any;
//   icon: ReactNode;
//   tooltips: false | [ReactNode, ReactNode];
//   format: 'text/plain' | 'text/html';
// }

// type editable = {
//   icon: ReactNode;
//   tooltip: boolean | ReactNode;
//   editing: boolean;
//   maxLength: number;
//   autoSize: boolean | { minRows: number, maxRows: number };
//   text: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onCancel: any;
//   onStart: any;
//   onEnd: any;
//   triggerType: ('icon' | 'text')[];
//   enterIcon: ReactNode;
// }