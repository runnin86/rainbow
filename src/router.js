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
    },
    '/buy': {
      name: 'buy',
      component (resolve) {
        require(['./views/home/buy'], resolve)
      }
    },
    '/user': {
      component (resolve) {
        require(['./views/user/user'], resolve)
      }
    },
    '/login': {
      component (resolve) {
        require(['./views/user/login'], resolve)
      }
    },
    '/order': {
      component (resolve) {
        require(['./views/user/order'], resolve)
      }
    },
    '/bill': {
      component (resolve) {
        require(['./views/user/bill'], resolve)
      }
    },
    '/withdrawal': {
      component (resolve) {
        require(['./views/user/withdrawal'], resolve)
      }
    },
    '/complete': {
      component (resolve) {
        require(['./views/user/complete'], resolve)
      }
    },
    '/agreement': {
      component (resolve) {
        require(['./views/user/agreement'], resolve)
      }
    },
    '/play': {
      component (resolve) {
        require(['./views/home/play'], resolve)
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
