import { ComponentProps } from 'react';

import styles from './Button.module.css';

interface IButtonProps extends ComponentProps<'button'> {}

const Button = ({ children, ...props }: IButtonProps): JSX.Element => {
  return (
    <button className={styles.root} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
