/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check


// type: type 决定了侧边栏项的类型。常用的类型有 category 和 autogenerated。

// type: 'category': 定义一个分类项（类别）。在这种情况下，label 将作为类别的名称，items 包含该类别下的子项。
// type: 'autogenerated': 自动生成侧边栏，基于文档文件夹结构。
// label: label 是分类或项在侧边栏中的显示名称。这是用户在侧边栏中看到的文本。例如，如果 label 是 Tutorial Basics，用户在侧边栏中会看到这个名称。

// items: items 是一个数组，包含这个分类中的子项或文档。每个子项可以是一个文档 ID、另一个分类，或者其他类型的侧边栏项。

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    '说明', // 直接引用文档项，文档 ID 对应 docs/docs-1.md
    
    {
      type: 'category',
      label: 'GPT', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: 'GPT' }], // 自动生成 '文件夹1' 目录下的内容
    },
    {
      type: 'category',
      label: 'AI绘画', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: 'AI绘画' }], // 自动生成 '文件夹1' 目录下的内容
    },
    {
      type: 'category',
      label: 'AI视频', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: 'AI视频' }], // 自动生成 '文件夹1' 目录下的内容
    },
    {
      type: 'category',
      label: 'AI音乐', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: 'AI音乐' }], // 自动生成 '文件夹1' 目录下的内容
    },
    {
      type: 'category',
      label: 'AI音频', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: 'AI音频' }], // 自动生成 '文件夹1' 目录下的内容
    },
    {
      type: 'category',
      label: 'Agent', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: 'Agent' }], // 自动生成 '文件夹1' 目录下的内容
    },
    {
      type: 'category',
      label: '数字人', // 分类的显示名称是 '文件夹1'
      items: [{ type: 'autogenerated', dirName: '数字人' }], // 自动生成 '文件夹1' 目录下的内容
    },
    
    // {
    //   type: 'category',
    //   label: '文件夹3', // 分类的显示名称是 '文件夹3'
    //   items: [
    //     {
    //       type: 'category',
    //       label: '文件夹4', // 子分类的显示名称是 '文件夹4'
    //       items: [{ type: 'autogenerated', dirName: 'AI绘画' }], // 自动生成 '文件夹3/文件夹4' 目录下的内容
    //     },
    //     {
    //       type: 'category',
    //       label: '文件夹5', // 子分类的显示名称是 '文件夹5'
    //       items: [{ type: 'autogenerated', dirName: '文件夹3/文件夹5' }], // 自动生成 '文件夹3/文件夹5' 目录下的内容
    //     },
    //   ],
    // },
  ],
};

export default sidebars;





// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

//   // But you can create a sidebar manually
  
//   tutorialSidebar: [
//     'intro',
//     'hello',
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['tutorial-basics/create-a-document'],
//     },
//   ],
   
// };

// export default sidebars;



// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // 手动创建侧边栏
//   tutorialSidebar: [
//     'docs-1', // 文档 ID 对应 docs/docs-1.md
    
//     {
//       type: 'category', // 这是一个分类
//       label: '文件夹1', // 分类的显示名称是 '文件夹1'
//       items: [
//         '文件夹1/2', // 文档 ID 对应 docs/文件夹1/2.md
//       ],
//     },
    
//     {
//       type: 'category', // 另一个分类
//       label: '文件夹3', // 分类的显示名称是 '文件夹3'
//       items: [
//         {
//           type: 'category', // 子分类
//           label: '文件夹4', // 子分类的显示名称是 '文件夹4'
//           items: [
//             '文件夹3/文件夹4/3', // 文档 ID 对应 docs/文件夹3/文件夹4/3.md
//           ],
//         },
//         {
//           type: 'category', // 子分类
//           label: '文件夹5', // 子分类的显示名称是 '文件夹5'
//           items: [
//             '文件夹3/文件夹5/4', // 文档 ID 对应 docs/文件夹3/文件夹5/4.md
//             '文件夹3/文件夹5/5', // 文档 ID 对应 docs/文件夹3/文件夹5/5.md
//           ],
//         },
//       ],
//     },
//   ],
// };

// export default sidebars;



