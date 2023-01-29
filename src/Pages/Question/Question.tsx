import { Accordion } from '../../Commons/Organisms/FAQAccordion';
import { QUESTION_TITLE } from '../../Commons/constants/text';
import { Header } from '../../Commons/Organisms/Header';
import { QUESTION_INFO } from './questionInfo';
import { Footer } from '../../Commons/Organisms/Footer';

export const Question = () => {

  const styles = {
    titleBox: {
      width: 1400,
      maxWidth: '100%',
      margin: 'auto'
    },
    title: {
      fontSize: '2.5em',
      marginTop: 56,
      textAlign: 'center' as const
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <Header />
      <div style={styles.titleBox}>
        <p style={styles.title}>{QUESTION_TITLE}</p>
      </div>
      <Accordion content={QUESTION_INFO} />;
      <Footer />
    </div>
  );
};