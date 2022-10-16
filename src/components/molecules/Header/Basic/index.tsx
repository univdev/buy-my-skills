import React from "react";
import { BasicHeaderProps } from "./types";
import Styles from './index.module.scss';
import { Layout } from "antd";

export const BasicHeader = (props: BasicHeaderProps) => {
  return (
    <Layout.Header className={Styles.BasicHeader}>
      { props.children }
    </Layout.Header>
  );
};
