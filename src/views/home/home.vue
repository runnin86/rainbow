
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="">
    <!-- 顶部操作栏 -->
    <div class="header width_full">
      <span class="header_title blue_bg width_full">中盛阳光001彩红计划</span>
      <img class="user_photo" src="/img/rainbow/user_photo_round.png"
        v-link="{path: '/user', replace: true}">
    </div>

    <!-- 预期收益率 -->
    <div class="expect blue_bg width_full">
      <span class="expect_title">预期收益率(%)</span>
      <span class="expect_number">30.00</span>
    </div>

    <!-- 购买条件 -->
    <div class="condition blue_bg width_full">
      <div class="cycle">
        <span>周期(天)</span>
        <span>10</span>
      </div>
      <div class="condition_line o_h">
        &nbsp
      </div>
      <div class="minimum">
        <span>起购(元)</span>
        <span>1000.00</span>
      </div>
    </div>

    <!-- 进度条 -->
    <div class="progress blue_bg width_full">
      <div class="progress_bar o_h">
        <div class="value">
        </div>
      </div>
      <div class="mark o_h">
        <span>·总额<font color="white">100000.00</font></span>
        <span>·剩余<font color="white">0.00</font></span>
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
            <span>开启日期&nbsp&nbsp2016/10/27</span>
            <span>结束日期&nbsp&nbsp2016/11/07</span>
            <span>购买金额&nbsp&nbsp1000.00元起购</span>
            <span>购买限额&nbsp&nbsp不限</span>
            <span>购买时间&nbsp&nbsp2016/10/23nbsp至&nbsp2016/10/26</span>
            <span>資產類型應收賬款、債權</span>
            <span>贖回說明投資人一旦購買成功，則在產品未到期前不得贖回</span>
            <span>費用說明免手續費，美易理財目前為用戶支付買入與退出產生的手續費</span>
            <span>產品協議<font color="#3a71b5">【查看產品協議】</font></span>
            <span style="margin-top: 1.6rem;">「新手專享」系列是國美金融旗下美易理財為新用戶專門設立的專享投資產品，「新手專享」系列資產項目來源於商業保理公司提供的供應鏈應收賬款債權、實體企業的債權轉讓，還款來源真實可靠。「新手專享」系列不限投資次數，但每人累計投資金額不超過10000元。該系列產品起投金額為100元，100元遞增，當項目剩餘可投餘額小於100元時，需要一次性申購全部餘額。</span>
            <span style="margin-top: 1.6rem; margin-bottom: 4rem;">平台免責聲明：美易理財作為交易服務平台進行信息發佈，不對任何投資人及/或任何交易提供任何擔保,無論是明示、默示或法定的。美易理財平台提供的各種信息及資料僅供參考,投資人應依其獨立判斷做出決策。投資人據此進行投資交易的,產生的投資風險由投資人自行承擔。</span>
          </div>
        </div>
      </div>

      <!-- 购买记录 -->
      <div class="record_content width_full o_h"
        :class="this.showTabs===2?'record_content':'module_hide'">
        <ul>
          <li>
            <span>2016.10.21  15:10:36</span>
            <span>156****3355</span>
          </li>
          <li>
            <span>1000.00</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="buy_btn blue_bg"
    v-link="{path: '/buy', replace: true}">
    <span>马上购买</span>
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
        showTabs: 1
      }
    },
    methods: {
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
