
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="" v-pull-to-refresh="refresh">
    <v-layer></v-layer>
    <!-- 顶部操作栏 -->
    <div class="header width_full blue_bg">
      <span class="header_title width_full">{{info.NAME}}</span>
      <img class="user_photo" src="/img/rainbow/user_photo_round.png"
        v-link="{path: '/user', replace: true}">
    </div>

    <!-- 预期收益率 -->
    <div class="expect blue_bg width_full">
      <span class="expect_title">预期收益率(%)</span>
      <span class="expect_number">{{info.exReturn | currency ''}}</span>
    </div>

    <!-- 购买条件 -->
    <div class="condition blue_bg width_full">
      <div class="cycle">
        <span>周期(天)</span>
        <span>{{info.exDays}}</span>
      </div>
      <div class="condition_line o_h">
        &nbsp
      </div>
      <div class="minimum">
        <span>起购(元)</span>
        <span>{{info.minSubAmount | currency ''}}</span>
      </div>
    </div>

    <!-- 进度条 -->
    <div class="progress blue_bg width_full">
      <div class="progress_bar o_h">
        <div class="value"
          :style="{width: ((info.totalMount-info.lastAmount)/info.totalMount)*100+'%'}">
        </div>
      </div>
      <div class="mark o_h">
        <span>
          ·总额
          <font color="white">
            {{info.totalMount | currency ''}}
          </font>
        </span>
        <span>
          ·剩余
          <font color="white">
            {{info.lastAmount | currency ''}}
          </font>
        </span>
      </div>
    </div>

    <!-- 产品信息 -->
    <div class="presentation_box o_h">
      <ul class="options width_full o_h">
        <li @click="this.showTabs = 1"
          :class="this.showTabs===1?'blue_text':'gray_text'">
        产品信息</li>
        <li @click="this.showTabs = 2"
          :class="this.showTabs===2?'blue_text':'gray_text'">
        购买记录</li>
      </ul>
      <div class="information_content"
        :class="this.showTabs===1?'information_content':'module_hide'">
        <div class="icon_box width_full o_h">
          <img src="/img/rainbow/profits-icon.png">
          <img src="/img/rainbow/rockets-icon.png">
          <img src="/img/rainbow/shield-icon.png">
        </div>
        <div class="slogan width_full o_h">
          <div class="slogan_top width_full o_h">
            <span>臻品&nbsp高收益</span>
            <span>高效&nbsp超短期</span>
            <span>专业&nbsp更安全</span>
          </div>
          <div class="slogan_bottom width_full o_h">
            <span>预期收益30%</span>
            <span>10天超短周期</span>
            <span>亿元级专家团</span>
          </div>
          <div class="limit width_full o_h">
            <span>开启日期&nbsp&nbsp{{info.Sdate}}</span>
            <span>结束日期&nbsp&nbsp -</span>
            <span>购买金额&nbsp&nbsp{{info.minSubAmount | currency ''}}元起购</span>
            <span>购买限额&nbsp&nbsp不限</span>
            <span>购买时间&nbsp&nbsp{{info.SubSdate}}&nbsp至&nbsp{{info.SubEdate}}</span>
            <span>赎回说明&nbsp&nbsp投资人一旦购买成功，则在产品未到期前不得赎回。</span>
            <span>费用说明&nbsp&nbsp免手续费，终生阳光目前为用户支付买入与退出产生的手续费。</span>
            <span>产品玩法<font color="#3a71b5" v-link="{path: '/play', replace: true}">【查看产品玩法】</font></span>
            <span style="margin-top: 1.6rem;">[合买倍投计划]是我们采取众筹的模式进行足彩倍投的一个长期盈利计划，投入资金按照1000块钱为一个单位（可以复投）每天分得投入本金得1％作为回报，10天为一个周期，每天每人分红投入本金的1％（利润每天进行分发和一个周期结束与本金一起返还都可以），10天后返还本金，进行下一轮众筹反复循环。充值方法采用微信注册，支付宝转账的方法进行操作，支付宝转账给每个大团队领导人，团队领导人进行记账在下午3:00报给平台，平台进行资金录入，我们在晚8:00之前把所有投入账目录入完毕，会员进行查看，如有错误报给团队领导人然后进行更改。</span>
            <span style="margin-top: 1.6rem; margin-bottom: 4rem;">平台免责声明：中盛阳光平台所发布的竞彩合买产品均有最高收益限制和最低返还比例，购买人应依其独立判断做出决策。</span>
          </div>
        </div>
      </div>

      <!-- 购买记录 -->
      <div class="record_content width_full o_h"
        :class="this.showTabs===2?'record_content':'module_hide'">
        <ul v-for="sl in info.subList | orderBy 'subDate' -1" track-by="$index">
          <li>
            <span>{{sl.subDate | dataFilter 'yyyy.MM.dd HH:mm:ss'}}</span>
            <span>{{sl.userPhone | phoneFilter}}</span>
          </li>
          <li>
            <span>{{sl.subAmount | currency ''}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="buy_btn blue_bg" @click="doBuy(info)">
    <span>马上购买</span>
  </div>
</template>

<script>
import $ from 'zepto'
import Vue from 'vue'
import {api} from '../../util/service'
import {dateFormat} from '../../util/util'
import VLayer from '../../components/PullToRefreshLayer'

Vue.filter('dataFilter', function (value, format) {
  return dateFormat(new Date(value), format)
})

Vue.filter('phoneFilter', function (value) {
  var reg = /^(\d{3})\d{4}(\d{4})$/
  value = value.replace(reg, '$1****$2')
  return value
})

export default {
  ready () {
    $.init()
    // 获取信息
    this.getInfo()
  },
  data () {
    return {
      showTabs: 1,
      info: []
    }
  },
  methods: {
    /*
     * 刷新
     */
    refresh () {
      $.showIndicator()
      if (window.localStorage.getItem('rbUser')) {
        // 执行查询
        setTimeout(function () {
          this.getInfo()
          // 加载完毕需要重置
          $.pullToRefreshDone('.pull-to-refresh-content')
          $.hideIndicator()
        }.bind(this), 800)
      }
    },
    /*
     * 获取信息
     */
    getInfo () {
      let token = window.localStorage.getItem('rbToken')
      this.$http.post(api.mainInfo, {}, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, data, msg}})=>{
        if (code === 1) {
          this.info = data
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('获取主页主要信息失败:' + e)
      })
    },
    /*
     * 购买跳转
     */
    doBuy (info) {
      // 跳转至模拟收益
      this.$route.router.go({
        name: 'buy',
        query: {
          pid: info.Pid,
          name: info.NAME,
          day: info.exDays,
          er: info.exReturn
        },
        replace: false
      })
    }
  },
  components: {
    VLayer
  }
}
</script>

<style scoped>
ul{
  padding: 0
}
span,li,img{
  display: block;
}
.o_h{
  overflow: hidden
}
.blue_text{
  color: #005cac;
}
.gray_text{
  color: #999999;
}
.blue_bg{
  background-color: #005cac;
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
.header_title{
  line-height: 2.4rem;
  text-align: center;
  color: white;
  font-size: 0.8rem;
}
.user_photo{
  position: absolute;
  padding: 0.6rem;
  right: 0;
  top: 0;
  width: 2.4rem;
  height: 2.4rem;
}
/*预期收益*/
.expect{
  height: 7.65rem;
}
.expect span{
  text-align: center;
}
.expect_title{
  line-height: 2rem;
  color: #709fcd;
  font-size: 0.7rem;
}
.expect_number{
  font-size: 3.2rem;
  color: white;
}
/*购买条件*/
.condition{
  height: 3.75rem;
}
.cycle{
  float: left;
}
.cycle,.minimum{
  height: 100%;
  width: 49.8%;
}
.minimum{
  float: right;
}
.condition_line{
  float: left;
  width: 0.4%;
  height: 2.2rem;
  background-color: #1469b3;
  margin-top: 0.4rem;
}
.cycle span,.minimum span{
  text-align: center;
}
.cycle span:first-child,.minimum span:first-child{
  color: white;
  color: #709fcd;
  font-size: 0.7rem;
}
.cycle span:last-child,.minimum span:last-child{
  color: white;
  line-height: 2.25rem;
  font-size: 1rem;
}
/*进度条*/
.progress{
  height: 2.45rem;
}
.progress_bar{
  width: 92%;
  margin: 0 auto;
  background-color: #004f95;
  height: 0.1rem;
}
.value{
  height: 100%;
  background-color: #efeff5;
}
.mark{
  width: 92%;
  margin: 0 auto;
}
.mark span{
  width: 50%;
  font-size: 0.7rem;
  float: left;
  color: #709fcd;
  line-height: 1.6rem;
}
.mark span:first-child{
  text-align: left;
}
.mark span:last-child{
  text-align: right;
}
/*产品详情*/
.presentation_box{
  width: 96%;
  margin: 0 auto;
  background-color: white;
  margin-top: -0.6rem;
}
.options{
  margin: 0;
  padding: 0;
  border-bottom: 0.05rem solid #f5f5f5;
}
.options li{
  float: left;
  text-align: center;
  line-height: 2.4rem;
  width: 50%;
  font-size: 0.7rem;
}
.icon_box{
  margin-top: 1rem;
}
.icon_box img{
  width: 33.33%;
  float: left;
}
.slogan_top span{
  font-size: 0.7rem;
  color: #3a71b5;
  margin-top: 0.6rem;
}
.slogan_bottom span,.slogan_top span{
  float: left;
  width: 33.33%;
  text-align: center;
}
.slogan_bottom span{
  font-size: 0.6rem;
  color: #cbcbcb;
  margin-top: 0.2rem;
}
.limit{
  margin-top: 1.8rem;
}
.limit span{
  width: 92%;
  margin: 0 auto;
  line-height: 1.6rem;
  font-size: 0.7rem;
  color: #999999;
}
/*购买记录*/
.record_content{
  padding-bottom: 4rem;
}
.record_content ul{
  width: 92%;
  margin: 0 auto;
  list-style-type: none;
  border-bottom: 0.05rem solid #f5f5f5;
  height: 2.8rem;
}
.record_content ul li{
  float: left;
  width: 50%;
  height: 2.8rem;
}
.record_content ul li:first-child span:first-child{
  color: #cbcbcb;
  font-size: 0.6rem;
  line-height: 1.5rem;
  margin: 0;
}
.record_content ul li:first-child span:last-child{
  color: #666666;
  font-size: 0.7rem;
  line-height: 0.8rem;
}
.record_content ul li:last-child span{
  color: #666666;
  text-align: right;
  line-height: 2.8rem;
  font-size: 0.7rem;
}
/*购买按钮*/
.buy_btn{
  width: 14rem;
  height: 2.4rem;
  border-radius: 0.1rem;
  position: fixed;
  left: 50%;
  margin-left: -7rem;
  bottom: 0.6rem;
  -webkit-box-shadow:0 6px 4px #dbdbdb;
  -moz-box-shadow:0 6px 4px #dbdbdb;
  box-shadow:0 6px 4px #dbdbdb;
}
.buy_btn span{
  width: 100%;
  color: white;
  text-align: center;
  line-height: 2.4rem;
}
</style>
