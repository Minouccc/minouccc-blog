interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'React Playground',
    description: `该项目提供一个在线的可交互编辑环境，页面左边编写代码，右边实时预览。支持拖拽改变宽度、
    格式化代码、主题切换、链接分享代码、以及代码下载等功能。比如开发的组件库，可以用这个 React Playground 来实现组件的在线预览。`,
    imgSrc: '/static/images/projects/project_rp.png',
    href: 'https://react-playground.minouccc.online/',
  },
  {
    title: 'PDF旋转工具',
    description: `PDF旋转，支持PDF文件上传，旋转，下载。`,
    imgSrc: '/static/images/projects/project_pdf.png',
    href: 'https://pdf-rotate.minouccc.online',
  },
]

export default projectsData
