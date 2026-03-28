/**
 * 项目数据类型定义
 * 用于约束项目卡片的数据结构
 */
export interface Project {
  id: number;                    // 项目唯一标识
  title: string;                 // 项目名称
  description: string;           // 项目描述
  image: string;                 // 项目截图路径
  tags: string[];                // 技术栈标签
  githubLink?: string;           // GitHub 源码链接（可选）
  demoLink?: string;             // 在线演示链接（可选）
}

/**
 * 项目数据数组
 * 集中管理所有展示的项目信息
 */
export const projects: Project[] = [
  // 初始占位项目数据
  // TODO: 添加实际项目数据
]
