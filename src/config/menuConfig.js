const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },

  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },
  {
    title: '设备',
    key: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: '设备分组',
        key: '/category',
        icon: 'bars'
      },
      {
        title: '设备管理',
        key: '/device',
        icon: 'tool'
      },
    ]
  },


  // {
  //   title: '图形图表',
  //   key: '/charts',
  //   icon: 'area-chart',
  //   children: [
  //     {
  //       title: '柱形图',
  //       key: '/charts/bar',
  //       icon: 'bar-chart'
  //     },
  //     {
  //       title: '折线图',
  //       key: '/charts/line',
  //       icon: 'line-chart'
  //     },
  //     {
  //       title: '饼图',
  //       key: '/charts/pie',
  //       icon: 'pie-chart'
  //     },
  //   ]
  // },

  {
    title: '工单管理',
    key: '/order',
    icon: 'windows',
  },
]

export default menuList