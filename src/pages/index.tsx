import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
// 引入公共状态
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


export default function Home(): JSX.Element {
  // 获取公共状态
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`首页`}>
      <main>
        <HomepageFeatures />
        <div>
          首页内容
        </div>
        <br />
        <a href="https:www.baidu.com">百度一下</a>
        <br />
        <div>
         
        <Link to="/help">帮助中心</Link>
        </div>
      </main>
    </Layout>
  );
}
