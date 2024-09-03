import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton } from '@carbon/react';
import '../css/Breadcrumb.scss';


// 標準麵包屑導航
export const DefaultBreadcrumb = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/">首頁</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="/products">產品</BreadcrumbItem>
    {/* <BreadcrumbItem href="/products/electronics">電子產品</BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>智能手機</BreadcrumbItem> */}
  </Breadcrumb>
);

// 帶有溢出菜單的麵包屑導航
export const BreadcrumbWithOverflow = () => (
  <Breadcrumb noTrailingSlash>
    <BreadcrumbItem>
      <a href="/">首頁</a>
    </BreadcrumbItem>
    <BreadcrumbItem href="/products">產品</BreadcrumbItem>
    {/* 這裡應該添加OverflowMenu組件，但在此示例中省略 */}
    <BreadcrumbItem href="/products/electronics/smartphones">智能手機</BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>iPhone 13</BreadcrumbItem>
  </Breadcrumb>
);

// 骨架屏加載狀態
export const BreadcrumbSkeletonExample = () => (
  <BreadcrumbSkeleton />
);