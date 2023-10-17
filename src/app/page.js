// pages/page.js

import React from 'react';
import styles from './page.module.css'; // Import a CSS module

const Page = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>This is the Page component mad byme for me </h1>
      <p>This is a basic Next.js page.</p>
    </div>
  );
};

export default Page;
