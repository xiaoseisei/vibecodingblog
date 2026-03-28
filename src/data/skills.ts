/**
 * 技能分类数据类型定义
 * 用于组织不同类别的技能展示
 */
export interface SkillCategory {
  id: number;                    // 分类唯一标识
  name: string;                  // 分类名称
  icon: string;                  // 分类图标（Lucide 图标名）
  skills: string[];              // 技能列表
}

/**
 * 技能分类数据数组
 * 集中管理所有技能展示信息
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: '编程语言',
    icon: 'Code2',
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Go',
      'Rust',
    ]
  },
  {
    id: 2,
    name: '前端框架',
    icon: 'Layout',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
    ]
  },
  {
    id: 3,
    name: '后端技术',
    icon: 'Server',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'PostgreSQL',
      'Redis',
    ]
  },
  {
    id: 4,
    name: '开发工具',
    icon: 'Wrench',
    skills: [
      'Git',
      'Docker',
      'VS Code',
      'Figma',
    ]
  },
]
