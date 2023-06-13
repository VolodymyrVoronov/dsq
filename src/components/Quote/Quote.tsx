import { ComponentProps } from 'react';

import styles from './Quote.module.css';

interface IQuoteProps extends ComponentProps<'div'> {
  quote: string;
  author: string;
  source: string | undefined;
}

const Quote = ({
  quote,
  author,
  source,

  ...props
}: IQuoteProps): JSX.Element => {
  return (
    <div className={styles.root} {...props}>
      <span className={styles.quote}>{quote}</span>
      <span className={styles.author}>
        — {author}
        {source ? <span className={styles.source}>&nbsp;{source}</span> : null}
      </span>
    </div>
  );
};

export default Quote;
