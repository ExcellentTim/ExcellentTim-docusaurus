import React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: JSX.Element;
// };

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className={styles.headBox}>
        <div className={styles.title}>
          首页组件
        </div>
      </div>
    </section>
  );
}
