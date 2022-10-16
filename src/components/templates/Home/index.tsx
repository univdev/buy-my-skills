import { BasicFooter } from 'components/molecules/Footer/Basic';
import { BasicHeader } from 'components/molecules/Header/Basic';

import { ProductsContextProvider } from './context/Products';

export const HomeTemplate = () => {
  return (
    <ProductsContextProvider>
      <BasicHeader />
      <Layout.Content>
        Good!
      </Layout.Content>
      <BasicFooter />
    </ProductsContextProvider>
  );
};
