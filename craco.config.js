const WebpackBar = require('webpackbar');
const CracoAntDesignPlugin = require('craco-antd');
const CracoBase64Loader = require('craco-base64-inline-loader');
const path = require('path');

module.exports = {
	babel: {
		plugins: [
			['@babel/plugin-proposal-decorators', { legacy: true }] // MobX
		]
	},
	eslint: {
		enable: false
	},
	jest: {
		configure: {
			moduleDirectories: ['.', 'node_modules'],
			moduleNameMapper: {
				'^@api(.*)$': '<rootDir>/src/api$1',
				'^@assets(.*)$': '<rootDir>/src/assets$1',
				'^@components(.*)$': '<rootDir>/src/components$1',
				'^@containers(.*)$': '<rootDir>/src/containers$1',
				'^@enums(.*)$': '<rootDir>/src/enums$1',
				'^@logger(.*)$': '<rootDir>/src/logger$1',
				'^@models(.*)$': '<rootDir>/src/models$1',
				'^@pages(.*)$': '<rootDir>/src/pages$1',
				'^@proto(.*)$': '<rootDir>/src/proto$1',
				'^@router(.*)$': '<rootDir>/src/router$1',
				'^@store(.*)$': '<rootDir>/src/store$1',
				'^@theme(.*)$': '<rootDir>/src/theme$1',
				'^@themes(.*)$': '<rootDir>/src/theme/default$1',
				'^@utils(.*)$': '<rootDir>/src/utils$1'
			}
		}
	},
	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				customizeThemeLessPath: path.join(__dirname, 'src/theme/default/index.less')
			}
		},
		{
			plugin: CracoBase64Loader,
			options: {
				test: /\.(jpg|svg|png?)$/i,
				limit: 30000
			}
		}
	],
	webpack: {
		alias: {
			'@api': path.resolve(__dirname, 'src/api'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@enums': path.resolve(__dirname, 'src/enums'),
			'@logger': path.resolve(__dirname, 'src/logger'),
			'@models': path.resolve(__dirname, 'src/models'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@proto': path.resolve(__dirname, 'src/proto'),
			'@router': path.resolve(__dirname, 'src/router'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@theme': path.resolve(__dirname, 'src/theme'),
			'@themes': path.resolve(__dirname, `src/theme/default`),
			'@utils': path.resolve(__dirname, 'src/utils/')
		},
		plugins: [
			new WebpackBar({ profile: true }),
			...(process.env.NODE_ENV === 'development' ? [] : [])
		]
	}
};
