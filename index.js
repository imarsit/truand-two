module.exports = {
	// 模版标识
	name: 'example',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '关于我们',
			// 路径
			path: 'about',
			// 预览图
			thumbnail: 'about.png',
		},
		{
			name: '服务',
			// 路径
			path: 'services',
			// 预览图
			thumbnail: 'services.png',
		},
		{
			name: '模板',
			// 路径
			path: 'typography',
			// 预览图
			thumbnail: 'typography.png',
		},
		{
			name: '地址',
			// 路径
			path: 'contact',
			// 预览图
			thumbnail: 'contact.png',
		}
	]
}
