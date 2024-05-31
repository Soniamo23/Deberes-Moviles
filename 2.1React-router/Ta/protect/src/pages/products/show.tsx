import { Show, useRecord } from "@refinedev/antd";

export const BlogPostShow = () => {
  const { record } = useRecord();

  return (
    <Show>
      <div>Title: {record.title}</div>
      <div>Content: {record.content}</div>
      <div>Category: {record.category?.name}</div>
      <div>Status: {record.status}</div>
      <div>Product: {record.product?.name}</div>
    </Show>
  );
};
