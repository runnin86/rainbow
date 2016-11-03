
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="">
    <!-- 顶部操作栏 -->
    <div class="header blue_bg width_full">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/home', replace: true}">
    </div>

    <!-- 登录/注册 -->
    <div class="login_box white_bg text_color">
      <div class="options">
        <span
          @click="this.showTabs = 1"
          :class="this.showTabs===1?'blue_text':''">
          登录
        </span>
        <span
          @click="this.showTabs = 2"
          :class="this.showTabs===2?'blue_text':''">
          注册
        </span>
      </div>
      <div class="login"
        :class="this.showTabs===1?'':'module_hide'">
        <div class="login_input">
          <input type="tel" v-model="userPhone" class="rb_phone" placeholder="请输入手机号">
          <a class="clear" style="margin-left: 77%;"
            :style="{display: userPhone?'block':'none'}"
            @click="this.userPhone=null"></a>
          <input type="password" v-model="password" class="rb_password" placeholder="请输入密码">
          <a class="clear" style="margin-left: 77%;"
            :style="{display: password?'block':'none'}"
            @click="this.password=null"></a>
        </div>
        <div class="login_btn blue_bg" @click="login()"
          :style="{backgroundColor: (loginSubmit ? '' : '#c8c9cb')}">
          <span>登录</span>
        </div>
      </div>
      <div class="reg"
        :class="this.showTabs===2?'':'module_hide'">
        <div class="reg_input">
          <input id="phone" type="text" name="phone" v-model="uphone" placeholder="请输入手机号">
          <input id="zfb" type="text" name="zfb" v-model="alipayid" placeholder="请输入支付宝账号">
          <input id="name" type="text" name="name" v-model="uname" placeholder="请输入姓名(与支付宝相一致)">
          <input id="pass_word" type="passWord" name="pass_word" v-model="upass" placeholder="请输入密码">
        </div>
        <div class="agreement_box">
          <input type="checkbox" class="agreement" v-model="protocol" name="agreement" id="agreement">
          <span for="agreement">已阅读并同意<font color="#005cac">《用户协议》</font></span>
        </div>
        <div class="reg_btn blue_bg" @click="register()"
          :style="{backgroundColor: (submitBtn ? '#1a6be4' : '#c8c9cb')}">
          <span>注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import {api} from '../../util/service'

export default {
  ready () {
    $.init()
  },
  data () {
    return {
      showTabs: 1,
      userPhone: window.localStorage.getItem('rbPhone') ? window.localStorage.getItem('rbPhone') : '',
      password: '',
      loginSubmit: false,
      uname: null,
      uphone: null,
      upass: null,
      alipayid: null,
      protocol: true,
      submitBtn: false
    }
  },
  methods: {
    /*
     * 登录
     */
    login () {
      window.localStorage.setItem('rbPhone', this.userPhone)
      if (!this.userPhone || !this.password) {
        $.toast('请输入手机号或密码')
        return
      }
      $.showIndicator()
      let spcarInfos = {
        'uphone': this.userPhone,
        'upass': this.password,
        'code': this.code ? this.code : '123'
      }
      // let postBody = JSON.stringify(spcarInfos)
      this.$http.post(api.login, spcarInfos, {
        emulateJSON: true
      })
      .then(({data: {data, code, msg}})=>{
        if (code === 1) {
          if (data) {
            if (data.user.userStatus === 0) {
              $.toast('账户禁用')
            }
            else if (data.user.userStatus === 1) {
              window.localStorage.setItem('rbUser', JSON.stringify(data.user))
              window.localStorage.setItem('rbToken', data.token)
              window.localStorage.setItem('rbOpenid', data.openid)
              this.$route.router.go({path: '/home', replace: true})
            }
          }
        }
        $.toast(msg)
      }).catch((e)=>{
        $.alert('服务器连接中断...')
        console.error('无法连接服务器:' + e)
      }).finally(()=>{
        $.hideIndicator()
      })
    },
    /*
     * 注册
     */
    register () {
      if (!this.uphone) {
        $.toast('请输入手机号')
        return
      }
      if (!(/^1[34578]\d{9}$/.test(this.uphone))) {
        $.toast('请输入正确的手机号')
        return
      }
      if (!this.alipayid) {
        $.toast('请输入支付宝账号')
        return
      }
      if (!(/^1[34578]\d{9}$/.test(this.alipayid) || (/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/.test(this.alipayid)))) {
        $.toast('请输入正确的付宝账号')
        return
      }
      if (!this.uname) {
        $.toast('请输入姓名')
        return
      }
      if (!this.upass) {
        $.toast('请输入密码')
        return
      }
      if (!this.protocol) {
        // $.toast('您未同意本平台用户条款')
        return
      }
      this.submitBtn = false
      // 提交注册
      this.$http.post(api.register, {
        uname: this.uname,
        upass: this.upass,
        uphone: this.uphone,
        alipayid: this.alipayid
      })
      .then(({data: {code, msg}})=>{
        $.toast(msg)
        setTimeout(() => {
          if (code === 1) {
            this.uname = null
            this.uphone = null
            this.upass = null
            this.alipayid = null
            this.showTabs = 1
          }
          else {
            this.submitBtn = true
          }
        }, 1500)
      }).catch((e)=>{
        console.error(this.from + '用户注册失败:' + e)
      })
    }
  },
  watch: {
    'userPhone,password': {
      handler: function (newVal, oldVal) {
        this.loginSubmit = this.userPhone && this.password
      }
    },
    'forgetPhone,vCode,newPwd': {
      handler: function (newVal, oldVal) {
        this.forgetSubmit = this.forgetPhone && this.vCode && this.newPwd
      }
    },
    '[uname,uphone,upass,alipayid,protocol]': {
      handler: function (newVal, oldVal) {
        let flag = true
        newVal.map((v, k)=>{
          if (v === null || v === '' || !v) {
            flag = false
            return
          }
        })
        // 注册按钮是否灰化
        this.submitBtn = flag
        // console.log(flag)
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
.blue_text{
  color: #005cac;
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
.header img:first-child{
  position: absolute;
  top: 0;
  height: 2.4rem;
  padding: 0.8rem 0.4rem;
  left: 0rem;
}
.login_box{
  width: 90%;
  margin: 1rem auto;
  overflow: hidden;
}
.options{
  height: 2.4rem;
}
.options span{
  float: left;
  line-height: 2.4rem;
  font-size: 0.8rem;
  width: 50%;
  text-align: center;
}
.options span:first-child{
  border-right: 0.05rem #f5f5f5 solid;
}
.login,.reg{
  overflow: hidden;
}
.login_input,.reg_input{
  overflow: hidden;
  padding-bottom: 0.6rem;
  border-top: 0.05rem #f5f5f5 solid;
  border-bottom: 0.05rem #f5f5f5 solid;
}
.login_input input,.reg_input input{
  width: 92%;
  margin: 0.6rem 4% 0 4%;
  border:none;
  background-color: #f5f5f5;
  height: 2.4rem;
  padding-left: 0.4rem;
  font-size: 0.7rem;
  border-radius: 0;
}
.login_btn,.reg_btn{
  width: 92%;
  margin: 0.6rem 4%;
  height: 2.4rem;
}
.login_btn span,.reg_btn span{
  font-size: 0.8rem;
  text-align: center;
  line-height: 2.4rem;
  color: white;
}
.agreement_box{
  margin-top: 0.6rem;
  margin-left: 0.6rem;
  overflow: hidden;
}
.agreement{
  border-color: #999999;
  background-color: white;
  float: left;
  width: 0.8rem;
  height: 0.8rem;
}
.agreement_box span{
  line-height: 0.8rem;
  font-size: 0.7rem;
  color: #666666;
  float: left;
  margin-left: 0.2rem;
}
.rb_phone,.rb_password{
  padding-left: 0.5rem;
  font-size: 0.7rem;
  width: 94%;
  border: none;
  background-color: #f5f5f5;
  height: 2.5rem;
  margin: 0.475rem 3%;
  border-radius: 0;
}
.clear{
  background:no-repeat center center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKnRSTlMAAQIDBAUHCQoLDA0ODxASGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjOWCMFEAAABUklEQVR4Xo3U4W6CMBSG4a8dcyo4FUVAHCpa4bv/G1xiOJm1B9j7+0lz0rQHfibZlFeSzbnYriyGm2cPvtTmMfS+KgbVSwWatKPWIRgjOnGgy8yXXzcO5mJPPjhS9w0JUcPR2oVI88OJblFPUwH3YEyxeX/xckuFLXx5tLnY5EmPIg1M4UkDI/b8PLSXjQHEigSsDLUCkLEvhdg/aUr2lYB1DKwi2UVYkoFVJLnGhpqtAsk9SipWkaxxpWIVSQdHxSqSRMfAipyklZF7eAtOkbrFVZHquQ6lL+1zzlSxNTaKJBW7x1KTml3DulBqtouALJCqLV+e9l2kZ72njUpWjhEp9uXUi/8ND1ak2F7KocBu8HM3Igt5RPW/Vwai+/Qikubt9HqTFmNLM4HX5+C8zQxv2V2nyvwDYbMihNUceovMu4pHHmOkeFudHdmeT2lifPALZUK7MQNh4w4AAAAASUVORK5CYII=);
  background-size: 15px 15px;
  width:40px;
  height:40px;
  position: absolute;
  margin-top: -2.2rem;
  margin-right: 1rem;
  margin-bottom: 0;
  /*margin: -2.76rem 0.2rem 0 86%;*/
  /*display: none;*/
}
</style>
