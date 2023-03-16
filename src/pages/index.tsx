import React,{useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
// 引入公共状态
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.scss';

export default (): JSX.Element => {
  // 获取公共状态
  const {siteConfig} = useDocusaurusContext();

  // 数据
  const [count,setCount] = useState<number>(0)
  const countValue = useRef<number>(0)

  useEffect(() => {
    // 组件挂载Mount
    console.log('组件挂载Mount');
    
    return () => {
      // 组件卸载Unmount
      console.log('组件卸载Unmount');
    }
  },[])

  // 监听某个或某些数据变化触发回调
  useEffect(() => {
    console.log('监听到count+1后为:',count);
  },[count])

  const addCount = () => {
    setCount(count+1)
    // 此时还未更新
    console.log('count为：',count);

    countValue.current = countValue.current+1
    // 使用useRef改变值时此时已经更新（除非特定情况外不推荐）
    console.log('countValue为：',countValue.current);
    
  }

  return (
    <Layout title={`首页`}>
      <main>
        <HomepageFeatures title={siteConfig.title} />
        <div>
          首页内容
        </div>
        <div>count:{count}</div>
        <div>countValue:{countValue.current}</div>
        <button onClick={addCount}>Count++</button>
        <br />
        <a href="https:www.baidu.com">百度一下</a>
        <br />
        <div>
          <Link to="/help">帮助中心</Link>
        </div>
        <HomepageFeatures title={'title'} />
      </main>
    </Layout>
  );
}
