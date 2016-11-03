<script>
// import $ from 'zepto'

export default {
  ready () {
    let appid = 'wx74e81e3aa7edce63'
    let redirect_uri = 'http://reg.zqsml.com/user/subForward.do'
    let oauthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
    'appid=' + appid +
    '&redirect_uri=' + redirect_uri +
    '&response_type=code&scope=snsapi_base&state=sub#wechat_redirect'
    window.location.href = oauthUrl
  }
}
</script>
