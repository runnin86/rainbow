import $ from 'zepto'

export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/oauth': {
      component (resolve) {
        require(['./views/oauthWechat'], resolve)
      }
    },
    '/home': {
      component (resolve) {
        require(['./views/home/home'], resolve)
      }
    }
  })

  router.beforeEach(({abort, to, from, next, redirect}) => {
    // let toPath = to.path
    let fromPath = from.path
    // console.log('to: ' + toPath + ' from: ' + fromPath)
    // 进入详情页时需要记录滚动条距离头部距离
    if (fromPath === '/home') {
      router.app.planScrolltop = $('.content').scrollTop()
    }
    next()
  })

  router.afterEach(function (transition) {
    // console.log('成功浏览到: ' + transition.to.path)
    $.refreshScroller()
  })
}
