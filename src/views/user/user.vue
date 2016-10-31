
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="" v-pull-to-refresh="refresh">
    <v-layer></v-layer>
    <!-- 顶部操作栏 -->
    <div class="header blue_bg width_full">
      <img src="/img/rainbow/return-btn.png" v-link="{path: '/home', replace: true}">
      <img src="/img/rainbow/exit-icon.png" @click="this.showExit=true">
    </div>

    <!-- 用户信息 -->
    <div class="user_info blue_bg">
      <div class="user_photo">
        <img src="/img/rainbow/user-photo.png">
      </div>
      <div class="user_name">
        <span>{{user.userPhone}}</span>
        <span>{{user.userName?user.userName:user.userPhone}}</span>
      </div>
    </div>

    <!-- 提现 -->
    <div class="withdrawal white_bg text_color width_full">
      <div class="withdrawal_text">
        <span>
          可提现</br>
          <font color="#cbcbcb" size="3">
            {{userAccount?userAccount:0}}
          </font>
        </span>
      </div>
      <div class="withdrawal_btn">
        <!-- <span v-link="{path: '/withdrawal', replace: true}"> -->
        <span @click="doWT()">
          提现
        </span>
      </div>
    </div>

    <!-- 账单 -->
    <div class="bill white_bg text_color width_full"
      v-link="{path: '/bill', replace: true}">
      <span>账单</span>
    </div>

    <!-- 购买记录 -->
    <div class="order_box white_bg width_full">
      <div class="order_title text_color">
        <span>购买记录</span>
      </div>
      <div class="order_list text_color"
        v-link="{path: '/order', replace: true}">
        <span>中盛阳光001彩红计划</span>
        <span>查看</span>
      </div>
    </div>
  </div>
  <div :class="this.showExit?'eject':'module_hide'">
    <div class="window">
      <span @click="logout(this.$route.router)">退出登录?</span>
      <span @click="this.showExit=false">
        取消
      </span>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import {api} from '../../util/service'
import VLayer from '../../components/PullToRefreshLayer'

export default {
  ready () {
    $.init()
    if (this.user) {
      // 获取账户信息
      this.getUserAccount()
    }
  },
  data () {
    return {
      showExit: false,
      user: JSON.parse(window.localStorage.getItem('rbUser')),
      userAccount: '-',
      userFrozeAccount: '-'
    }
  },
  methods: {
    doWT () {
      $.toast('敬请期待!')
    },
    /*
     * 刷新
     */
    refresh () {
      if (this.user) {
        $.showIndicator()
        // 执行查询
        setTimeout(function () {
          // 获取账户信息
          this.getUserAccount()
          // 加载完毕需要重置
          $.pullToRefreshDone('.pull-to-refresh-content')
          $.hideIndicator()
        }.bind(this), 800)
      }
    },
    /*
     * 获取账户信息
     */
    getUserAccount () {
      let token = window.localStorage.getItem('rbToken')
      this.$http.get(api.userCenter, {}, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {data, code, msg}})=>{
        if (code === 1) {
          this.userAccount = data.UserAccount
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('获取账户信息失败:' + e)
      })
    },
    /*
     * 退出
     */
    logout (route) {
      let token = window.localStorage.getItem('rpToken')
      this.$http.delete(api.logout, {}, {
        headers: {
          'x-token': token
        },
        emulateJSON: true
      })
      .then(({data: {data, code, msg}})=>{
        if (code === 1) {
          window.localStorage.removeItem('rbUser')
          window.localStorage.removeItem('rbToken')
          window.localStorage.removeItem('rbOpenid')
          route.go({path: '/oauth', replace: true})
        }
        $.toast(msg)
      }).catch((e)=>{
        console.error('用户退出失败:' + e)
      })
    }
  },
  components: {
    VLayer
  }
}
</script>

<style scoped>
span,img{
  display: block;
}
.blue_bg{
  background-color: #005cac;
}
.white_bg{
  background-color: white;
}
.text_color{
  color: #666666;
}
.cancel_float{
  clear:both;
}
.width_full{
  width: 100%;
}
.module_hide{
  display: none;
}
/*顶部操作栏*/
.header{
 height: 2.4rem;
 position: relative;
}
.header img:first-child,.header img:last-child{
  position: absolute;
  top: 0;
  height: 2.4rem;
}
.header img:first-child{
  padding: 0.8rem 0.4rem;
  left: 0rem;
}
.header img:last-child{
  padding: 0.6rem 0.4rem;
  right: 0rem;
}
/*用户信息*/
.user_info{
  height: 4.2rem;
  width: 100%;
}
.user_photo{
  width: 22%;
  height: 100%;
  overflow: hidden;
  float: left;
  padding-left: 4%;
}
.user_photo img{
  width: 100%;
  margin-top: 0.4rem;
}
.user_name{
  width: 78%;
  float: left;
}
.user_name span{
  margin-left: 0.6rem;
}
.user_name span:first-child{
  font-size: 1rem;
  color: white;
  line-height: 1.6rem;
}
.user_name span:last-child{
  color: #709fcd;
  font-size: 0.8rem;
}
/*提现*/
.withdrawal{
  height: 2.8rem;
}
.withdrawal_text{
  float: left;
  width: 74%;
  padding-left: 0.6rem;
}
.withdrawal_btn{
  width: 26%;
  float: right;
  padding-right: 0.6rem;
}
.withdrawal_text span{
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin-top: 0.2rem;
}
.withdrawal_btn span{
  width: 100%;
  height: 1.8rem;
  border: 0.05rem solid #0a72cc;
  border-radius: 0.1rem;
  margin-top: 0.5rem;
  text-align: center;
  line-height: 1.7rem;
  color: #0a72cc;
  font-size: 0.8rem;
}
/*账单*/
.bill{
  height: 2.6rem;
  margin-top: 1rem;
}
.bill span{
  line-height: 2.6rem;
  margin-left:0.6rem;
  font-size: 0.8rem;
}
/*购买记录*/
.order_box{
  margin-top: 0.5rem;
}
.order_title,.order_list{
  width: 96%;
  margin-left: 4%;
}
.order_title span{
  line-height: 2.6rem;
  font-size: 0.8rem;
}
.order_list{
  border-top:solid #f5f5f5 0.05rem;
  overflow: hidden;
}
.order_list span:first-child,.order_list span:last-child{
  font-size: 0.7rem;
  line-height: 2.6rem;
}
.order_list span:first-child{
  float:left;
}
.order_list span:last-child{
  float:right;
  margin-right: 0.6rem;
  color: #cbcbcb;
}
/*弹出窗口*/
.eject{
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("/img/rainbow/el_black_bg.png");
}
.window{
  width: 60%;
  height: 6.6rem;
  background-color: white;
  margin: 8rem auto;
  overflow: hidden;
}
.window span{
  width: 88%;
  display: block;
  text-align: center;
  line-height: 2.4rem;
  font-size: 0.8rem;
  margin-top: 0.6rem;
  margin-left: auto;
  margin-right: auto;
}
.window span:first-child{
  background-color: #ef4141;
  color: white;
}
.window span:last-child{
  border: solid 0.05rem #666666;
  color: #666666;
}
</style>
