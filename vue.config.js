/**
 * @author Andy Shang
 * @date 2018-08-04
 */
const fs = require("fs");
module.exports = {
  baseUrl: "/",

  // 输出构建的文件的地方
  outputDir: "dist",
  // 资源目录
  assetsDir: "static",

  // 是否为保存的lint使用eslint-loader
  // 可选值： true | false | 'error'
  // 当设置为“error”时，lint错误会导致编译打包失败
  lintOnSave: true,

  // 是否使用带有浏览器编译的完整版本？
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,

  // 调整内部webpack配置
  // 查看 https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},

  // vue-loader配置
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  // 为生产构建生成sourceMap？
  productionSourceMap: true,

  // CSS相关设置
  css: {
    // 将组件中的CSS提取到一个CSS文件中（只在生产环境下）
    extract: true,

    // 启用CSS sourceMap？
    sourceMap: false,

    // 将自定义选项传递给预处理器加载器，例如：将选项传给
    // sass-loader, use { sass: { ... } }
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      sass: {
        // 处理resource
        data: fs.readFileSync("src/assets/css/lib/mixins.scss", "utf-8")
      },
      postcss: {
        // 配置rem
        // options here will be passed to postcss-loader
        // 需要按照dpr不同而分别设置大小，则在后面加上注释/*px*/，
        // 如若需要原样输出，则在后面加上注释/*no*/
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5,
            remPrecision: 5
          })
        ]
      }
    },

    // 为所有css/预编译文件启用CSS modules？
    // 不会影响到.vue文件
    modules: false
  },

  // 在生产版本中使用babel＆TS的thread-loader
  // 如果机器拥有多个核心，则默认启用
  parallel: require("os").cpus().length > 1,

  // 使用autoDLLPlugin拆分vendors？
  // 也可以时包含在DLL块中的数组
  // 参阅 https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,

  // PWA plugin插件配置
  // 参阅 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 配置webpack-dev-server行为
  devServer: {
    open: process.platform === "darwin",
    // host: "localhost",
    port: 8081,
    https: false,
    hotOnly: false,
    // 参阅 https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  },

  // 第三方插件的选项
  pluginOptions: {}
};
