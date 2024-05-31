import { List, useList } from "@refinedev/antd";

export const ProductList = () => {
  const { data, isLoading } = useList({
    resource: "products",
  });

  return (
    <List
      resource="products"
      isLoading={isLoading}
      dataSource={data?.data}
      rowKey="id"
      renderItem={item => <List.Item>{item.name}</List.Item>}
    />
  );
};
