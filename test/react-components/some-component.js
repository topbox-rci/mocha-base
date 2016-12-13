import React from 'react';
import styles from './some-style.scss';

export default function SomeComponent() {
    return (
      <button className={styles['some-style']}>Clear Checked</button>
    );
}
