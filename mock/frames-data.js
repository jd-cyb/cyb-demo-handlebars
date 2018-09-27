const frameList = [{
  title: "Nodejs",
  desc: "CYB 构建在 NodeJS 基于 Chrome V8 引擎的 JavaScript 运行环境，其事件驱动非阻塞的特性，极其快速的编译前端各种资源",
  viewMore: {
    text: "更多信息",
    href: "https://nodejs.org/"
  }
}, {
  title: "NPM",
  desc: "CYB 使用 NPM 接入全球最大的开源生态系统，具备无限的功能扩展能力，可整合国际前沿的开源框架，适应瞬息万变的技术更替",
  viewMore: {
    text: "更多信息",
    href: "https://www.npmjs.com/"
  }
}, {
  title: "Gulp",
  desc: "CYB 整合Gulp的众多插件，编译、优化和组织前端复杂的模块及静态资源，喝着可乐儿、哼着小曲儿，自动化完成前端大量重复工作",
  viewMore: {
    text: "更多信息",
    href: "http://gulpjs.com/"
  }
}, {
  title: "Webpack",
  desc: "CYB 使用 webpack 模块化组织和管理项目的功能模块，极大提升项目的可维护性、功能复用性，并实现积木式的搭建网页",
  viewMore: {
    text: "更多信息",
    href: "https://webpack.js.org/"
  }
}, {
  title: "Bower",
  desc: "CYB 可配置使用 Bower 搜索、安装、更新和卸载如JavaScript、CSS之类的网络资源，通过自动化注入技术完美解决复杂的框架包管理问题",
  viewMore: {
    text: "更多信息",
    href: "https://bower.io/"
  }
}, {
  title: "BorwserSync",
  desc: "CYB 使用Browsersync实时快速响应文件更改并自动更新浏览器页面，可将页面点击和滚动操作实时同步到各种终端，提高至少30%的开发效率",
  viewMore: {
    text: "更多信息",
    href: "https://browsersync.io/"
  }
}]

export default (req, res) => {
  const { id } = req.body
  if (id) {
    for (let item of frameList) {
      if (item.title === id) {
        res.send({
          errno: 0,
          msg: '',
          data: item
        })
      }
    }
  } else {
    res.send({
      errno: 0,
      msg: '',
      data: frameList
    })
  }

}
