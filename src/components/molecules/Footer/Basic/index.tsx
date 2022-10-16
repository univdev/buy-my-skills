import { Layout } from 'antd';
import Styles from './index.module.scss';
import { BasicFooterProps } from './types';

export const BasicFooter = (props: BasicFooterProps) => {
  return (
    <Layout.Footer
      className={Styles.BasicFooter}
    >
      { props.children }
    </Layout.Footer>
  );
};
