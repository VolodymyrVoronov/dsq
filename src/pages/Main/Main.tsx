import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import quotesData from '../../../data/quotes.json';

import getRandomItemFromArray from '../../helpers/getRandomItemFromArray';

import Quote from '../../components/Quote/Quote';
import Button from '../../components/Button/Button';

import repeatIcon01 from '../../assets/icons/repeat-svgrepo-icon-01.svg';

import styles from './Main.module.css';

const buttonRotateVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 0.5,
    },
  },
  stop: {
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Main = (): JSX.Element => {
  const [quoteData, setQuote] = useState<{
    quote: string;
    author: string;
    source: string | undefined;
  }>({
    quote: '',
    author: '',
    source: undefined,
  });
  const [rotated, setRotated] = useState(false);

  const onButtonClick = () => {
    const { quote, author, source } = getRandomItemFromArray(quotesData);

    setQuote({
      quote,
      author,
      source,
    });

    setRotated(() => true);

    const timerId = setTimeout(() => {
      setRotated(() => false);

      clearTimeout(timerId);
    }, 500);
  };

  useEffect(() => {
    onButtonClick();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={styles.root}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={quoteData.quote}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Quote {...quoteData} />
        </motion.span>
      </AnimatePresence>

      <Button onClick={onButtonClick}>
        <motion.img
          src={repeatIcon01}
          variants={buttonRotateVariants}
          animate={rotated ? 'rotate' : 'stop'}
          alt="repeat icon"
        />
      </Button>
    </motion.div>
  );
};

export default Main;
