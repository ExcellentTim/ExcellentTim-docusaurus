import React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  // description: JSX.Element;
  [key:string]:any
};

export default (props:FeatureItem):JSX.Element=> {
  const { title } = props
  return (
    <section>
      <div className={styles.headBox}>
        <div className={styles.title}>
          首页组件
          <div>{title}</div>
        </div>
      </div>
    </section>
  );
}
