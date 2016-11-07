
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" :transition="pageTransition">
    <!-- 顶部操作栏 -->
    <div class="header">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/user', replace: true}">
    </div>
    <div class="withdrawal_header blue_bg">
      <span>可提现(元)</span>
      <span>
        {{userAccount ? userAccount : 0}}
      </span>
    </div>
    <div class="zfb_box white_bg">
      <img src="/img/rainbow/zfb-icon.png">
      <span>{{user.userAlipayId}}</span>
    </div>
    <div class="mark">
      <span>请确认上方支付宝账号正确无误后再进行提现!</span>
    </div>
    <div class="amount">
      <input v-model="withdrawMoney" class="el_withdrawals_balance_input"
        placeholder="请输入提现金额，提取金额仅能为整数" type="number" min=10 max={{userAccount}}
        onKeyPress="if(event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;"
        onKeyUp="this.value=this.value.replace(/\D/g,'')"/>
    </div>
    <div class="withdrawal_btn" @click="submitWithdraw()">
      <span>确定</span>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import {api} from '../../util/service'

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
      pageTransition: this.$route.query.pageTransition,
      user: JSON.parse(window.localStorage.getItem('rbUser')),
      userAccount: '-',
      withdrawMoney: null
    }
  },
  methods: {
    /*
     * 获取账户
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
     * 提交提现
     */
    submitWithdraw () {
      if (!this.user.userAlipayId) {
        $.toast('账户支付宝账户为空,无法提现!')
        return
      }
      if (this.withdrawMoney < 10) {
        $.toast('提现金额必须大于10元!')
        this.withdrawMoney = null
        return
      }
      if (this.withdrawMoney > this.userAccount) {
        $.toast('提现金额大于账户余额!')
        this.withdrawMoney = null
        return
      }
      // 提交请求
      let token = window.localStorage.getItem('rbToken')
      this.$http.post(api.withdraw, {
        wamount: this.withdrawMoney,
        fee: 0
      }, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, msg}})=>{
        if (code === 1) {
          this.$set('pageTransition', 'fade')
          setTimeout(function () {
            this.$route.router.go({path: '/complete?m=' + (this.withdrawMoney), query: { pageTransition: 'bounce' }, replace: false})
          }.bind(this), 100)
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('提现失败:' + e)
      })
    }
  },
  watch: {
    'withdrawMoney': {
      handler: function (newVal, oldVal) {
        if (newVal * 0.03 < 1) {
          this.poundage = 1
        }
        else {
          this.poundage = newVal * 0.03
          // 手续费向上取整
          this.poundage = Math.ceil(this.poundage)
        }
      }
    }
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
 width: 100%;
 height: 2.4rem;
 background-color: #005cac;
 position: relative;
}
.header img:first-child{
  position: absolute;
  height: 2.4rem;
  padding: 0.8rem 0.4rem;
  left: 0rem;
  top: 0rem;
}
.withdrawal_header{
  overflow: hidden;
  height: 4.4rem;
}
.withdrawal_header span:first-child{
  text-align: center;
  color: #709fcd;
  font-size: 0.7rem;
  line-height: 0.8rem;
}
.withdrawal_header span:last-child{
  text-align: center;
  color: white;
  font-size: 1.8rem;
  margin-top: 0.2rem;
}
.zfb_box{
  height: 2.6rem;
  width: 100%;
}
.zfb_box img{
  float: left;
  width: 1.2rem;
  margin-top: 0.7rem;
  margin-left: 0.6rem;
}
.zfb_box span{
  float: left;
  margin-left: 0.6rem;
  line-height: 2.6rem;
  color: #666666;
}
.mark{
  width: 100%;
  height: 1.2rem;
  background-color: #ffc343;
}
.mark span{
  text-align: center;
  font-size: 0.6rem;
  line-height: 1.2rem;
  color: white;
}
.amount{
  width: 100%;
  height: 4rem;
  background-color: white;
  overflow: hidden;
}
.amount input{
  display: block;
  border-radius: 0;
  border:none;
  background-color: #f6f6f6;
  width: 94%;
  height: 2.4rem;
  margin: 0.8rem auto;
  font-size: 0.7rem;
  text-align: center;
}
.withdrawal_btn{
  width: 94%;
  overflow: hidden;
  height: 2.6rem;
  border-radius: 0.1rem;
  background-color: #01a1ea;
  margin: 1rem auto;
  -webkit-box-shadow:0 6px 4px #dbdbdb;
  -moz-box-shadow:0 6px 4px #dbdbdb;
  box-shadow:0 6px 4px #dbdbdb;
}
.withdrawal_btn span{
  text-align: center;
  line-height: 2.6rem;
  color: white;
}
</style>
