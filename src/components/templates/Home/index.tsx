import { Layout } from 'antd';
import { BasicFooter } from 'components/molecules/Footer/Basic';
import { BasicHeader } from 'components/molecules/Header/Basic';

import { ProductsContextProvider } from './context/Products';

export function HomeTemplate() {
  return (
    <ProductsContextProvider>
      <BasicHeader />
      <Layout.Content>
        asd
      </Layout.Content>
      <BasicFooter />
    </ProductsContextProvider>
  );
}
