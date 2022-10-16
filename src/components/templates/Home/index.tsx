import { Button, ConfigProvider, Layout } from 'antd';
import { BasicFooter } from 'components/molecules/Footer/Basic';
import { BasicHeader } from 'components/molecules/Header/Basic';
import { ProductsContextProvider } from './context/Products';
import Styles from './index.module.scss';

export const HomeTemplate = () => {
  return (
    <ProductsContextProvider>
      <BasicHeader></BasicHeader>
      <Layout.Content>
        asd
      </Layout.Content>
      <BasicFooter></BasicFooter>
    </ProductsContextProvider>
  );
};