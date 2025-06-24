学习到的知识点:

1. 在首页搭建时尽量使用 header, aside, footer 等语义化便签, 可以便于 seo 优化
2. border-b-black/50 /50 是 50%的透明度
3. header menu 实线的实现过程
4. use client 声明客户端组件, 因为某些 hook 只能在客户端进行使用
5. usePathname: 获取当前页面的路径（pathname），即 URL 中域名后面的部分（不包括查询参数和 hash）
6. 使用 usePathname 为什么要加上 use client?
   1). 在 Next.js 13+ 的 App Router 架构下，组件默认是服务端组件（Server Component），只能在服务器上运行，不能使用浏览器相关的 API（如 window、document、hooks 等）
   2). 加上 "use client" 的作用：
   明确告诉 Next.js 这个组件需要在客户端渲染（Client Side Rendering）。
   允许在组件中使用 React 的 hooks（如 useState、useEffect、usePathname 等）。
   允许访问浏览器 API。
