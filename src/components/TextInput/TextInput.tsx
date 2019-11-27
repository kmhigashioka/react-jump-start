import React from 'react';
import styles from './TextInput.module.scss';

const TextInput: React.FC<React.HTMLProps<HTMLInputElement>> = (
  props,
): React.ReactElement => (
  <input className={`${styles['text-input']}`} {...props} />
);

export default TextInput;
