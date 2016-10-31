
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
          <input id="phone" type="text" name="phone" v-model="userPhone" placeholder="请输入手机号">
          <input id="pass_word" type="passWord" name="pass_word" v-model="password" placeholder="请输入密码">
        </div>
        <div class="login_btn blue_bg" @click="login ()">
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
        <div class="reg_btn blue_bg" @click="register()">
          <span>注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'zepto'

  export default {
    ready () {
      $.init()
    },
    data () {
      return {
        showTabs: 1,
        uphone: null,
        uname: null,
        upass: null,
        alipayid: null,
        protocol: true,
        submitBtn: false
      }
    },
    login () {
    },
    methods: {
      register () {
        if (!this.uphone) {
          $.toast('请输入手机号')
          return
        }
        else if (!(/^1[34578]\d{9}$/.test(this.uphone)))
        {
          $.toast('请输入正确的手机号')
          return
        }
        if (!this.alipayid) {
          $.toast('请输入支付宝账号')
          return
        }
        else if (!(/^1[34578]\d{9}$/.test(this.alipayid) || (/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/.test(this.alipayid))))
        {
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
</style>
