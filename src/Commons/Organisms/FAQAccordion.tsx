import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { isEqual } from 'lodash';
import { useState } from 'react';
import { Image } from '../Atoms/Image/Image';
import IconQuestion from '../static/svg/question-chat.svg';
import IconAnswer from '../static/svg/check-circle.svg';
import { AccordionType } from './constants/questionInfo';

type Props = {
  content: AccordionType[];
}

export const Accordion = (props: Props) => {
  const styles = {
    questionTitle: {
      display: 'flex',
      width: '100%',
    },
    icon: {
      width: 48,
      marginBottom: 16,
    },
    questionSentence: {
      margin: '0px 8px',
      fontSize: '1.75em',
    },
    questionBox: {
      width: 1400,
      maxWidth: '100%',
      paddingLeft: 48,
    },
    openCheckButton: {
      fontSize: '2.5em',
      color: 'rgb(255,120,120)',
      marginTop: 4,
    },
    closeCheckButton: {
      fontSize: '2.5em',
      color: 'rgb(80,200,255)',
      marginTop: 4,
    },
    qaBox: {
      width: 'fit-content',
    },
    answerBox: {
      display: 'flex'
    },
    answerContent: {
      display: 'block',
      fontSize: '1.5em',
      marginLeft: 8,
      marginTop: 8
    },
    bottomBorder: {
      marginLeft: -48,
      marginBottom: 32,
      borderBottom: '1px dashed lightgray'
    }
  };

  const [accordions, setAccordions] = useState<AccordionType[]>(props.content);
  const toggleAccordion = (id: number) => {
    setAccordions(
      accordions.map((accordion, accordionId) => {
        if (isEqual(accordionId, id)) {
          return { ...accordion, isOpen: !accordion.isOpen };
        }
        return accordion;
      })
    );
  };

  return (
    <div style={styles.questionBox}>
      {accordions.map((accordion, accordionId) => (
        <>
          <div style={styles.qaBox} key={accordionId}>
            <div style={styles.questionTitle} onClick={() => toggleAccordion(accordionId)}>
              <Image styles={styles.icon} src={IconQuestion} preview={false} />
              <p style={styles.questionSentence} >
                {accordion.title}
              </p>
              {(accordion.isOpen)
                ? <CaretDownOutlined style={styles.closeCheckButton} />
                : <CaretUpOutlined style={styles.openCheckButton} />
              }
            </div>
            {accordion.isOpen &&
              <div style={styles.answerBox}>
                <Image styles={styles.icon} src={IconAnswer} preview={false} />
                <div style={styles.answerContent}>
                  {accordion.content}
                </div>
              </div>
            }
          </div>
          <div style={styles.bottomBorder}></div>
        </>
      ))}
    </div>
  );
};