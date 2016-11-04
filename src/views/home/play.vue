
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="bounce">
    <!-- 顶部操作栏 -->
    <div class="header blue_bg width_full">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/home', replace: true}">
      <span>玩法介绍</span>
    </div>

    <div class="el_rule_content">
      <h3>《彩红计划》</h3>
      <h6 style="margin-top:0;">郑重提示：本产品为竞彩合买产品，彩票有风险，投注需谨慎。禁止未满18周岁的青少年购买本产品。</h6>
      <h6>【导言】</br>欢迎您使用中盛阳光（北京）科技有限公司（以下简称“中盛阳光公司”）提供的竞彩合买平台（以下简称”本平台“）服务！</h6>
      <h5>一、什么是合买？</h5>
      <h6>指由两个或两个以上的个人共同出资购买彩票。合买方案发起人在方案发起时规定每份彩票的金额，参与者根据自身的意愿认购至少一份以上的彩票，方案进度达到90%，方案成交，一般由网站或组织投注站代理出票。如果参与的合买方案中奖，扣除个人所得税后，根据购买的份额总数计算出每份彩票的奖金，参与者个人所得奖金=购买份数*平均奖金。这种利用募集资金的合买方式既能用小资金共同购买大额彩票，又能提高参与者的中奖机率、降低个人全购高金额彩票的风险，在足球彩票玩法比较常见。</h6>
      <h5>二、什么是合买保底？</h5>
      <h6>为保证合买方案最大可能成功，发起人可以对合买方案承诺保底。合买方案保底发起后，承诺的保底金额会被暂时冻结。
        </br>在合买截止时间到后，若用户方案未全部跟满，则会使用承诺的保证金额购买未满部分，若承诺的保底金额还有剩余，则多余金额退回保底人账户；若承诺的保底金额扔不够买满产品，则方案将被撤单，所有投注资金全部退回会员各自账户。
        </br>保底金额=保底份数×每份方案金额。
      </h6>
      <h5>三、什么是佣金提成？</h5>
      <h6>当中奖金额大于方案金额时，才可以获得佣金。
        </br>产品发起人可获得的佣金=中奖金额（税后）减去方案金额乘以设定的佣金比例。
        </br>中盛阳光平台现阶段只对盈利率高于30%的产品收取佣金，盈利未达到30%不对用户收取任何佣金。
      </h6>
      <h5>四、合买规则</h5>
      <h6>合买保底发起时，系统将会先冻结发起人支付宝帐户相应的金额，若合买失败保底资金将自动退回到发起人的支付宝帐户。
        </br>提供发起人撤单功能，如果发起人对已发起的合买方案不满意，且该方案的认购份数不足50%，发起人可进行撤单。所有该方案的合买资金将自动返还到参与该合买的方案的支付宝账号中。 当合买方案用户认购份数超过50%（含50%）以后，发起人将不能再撤单。系统也将自动关闭该方案的撤单功能。
        </br>合买彩票是一个基于彩票互联网投注平台上的延伸性服务，与个人提交投注订单不同，合买彩票的票据因发起人与认购人都占有一定比例的所有权，因此本平台将不会向任一方提供彩票兑奖订单凭据服务，发起人或认购人可提前24小时预约到本平台处查阅合买彩票成功交易订单号。
      </h6>
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
        showTabs: 1
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
body,ul{
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6{
  padding: 0;
  margin: 0;
}
ul,a,p{
  margin: 0;
  padding: 0;
  list-style: none;
}
.blue_bg{
  background-color: #005cac;
}
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
.header span{
  display: block;
  color: white;
  line-height: 2.4rem;
  text-align: center;
  font-size: 0.8rem;
}
.el_rule_content{
  width: 100%;
  background-color: white;
  overflow: hidden;
  padding-top:0.4rem;
  padding-bottom:3rem;
}
.el_rule_content h3{
  display: block;
  width: 100%;
  text-align: center;
  padding:0;
  margin:0;
  line-height: 2.5rem;
}
.el_rule_content h6,.el_rule_content h5{
  display: block;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;
  margin-top:0.5rem;
  color:#666666;
  line-height: 1rem;
}
</style>
