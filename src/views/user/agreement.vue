
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="bounce">
    <!-- 顶部操作栏 -->
    <div class="header blue_bg width_full">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/login', replace: true}">
      <span>用户协议</span>
    </div>
    <div class="el_rule_content">
      <h3>《用户协议》</h3>
      <h5>一、“中盛阳光竞彩专家服务平台”（以下简称“平台”）服务条款的接受</h5>
      <h6>平台为注册会员提供体育竞彩专家方案购买服务，注册为平台会员的用户，以及未注册为平台会员但浏览平台内容的顾客应遵守本声明的相关条款之规定，平台的服务按照本声明、会员服务条款与规则、以及其他页面说明而提供。平台的各项基于互联网以及通信网的相关服务（以下称"服务"）的所有权及经营运作权，归收中盛阳光（北京）络科技有限公司所有。中盛阳光竞彩专家服务平台提供的服务将完全按照其发布服务条款和操作规则严格执行。平台服务条款所称的会员是指完全同意所有条款并完成注册程序或未经注册而使用平台网站服务（以下简称“平台服务 ”）的会员。会员使用平台网站服务即视作认同并接受本服务条款。</h6>
      <h5>二、服务条款的变更和修改</h5>
      <h6>平台有权随时对服务条款进行修改，并且一旦发生服务条款的变动，平台将在页面上提示修改的内容。会员如果不同意服务条款的修改，可及时主动取消已经获得的网络服务或注销会员身份，平台将做好善后事宜；如会员继续享受网络服务，则视为会员已经接受服务条款的修改。平台将不时提供其它服务，而这些其它服务可能是受不同的服务条款和条件约束的，若新服务未发布服务条款和条件时，则适用于本条款，其未尽事宜，收米拉竞彩专家服务平台拥有最终解释权利。</h6>
      <h5>三、服务范围：</h5>
      <h6>服务范围包括：提供体育竞彩中盛阳光专家方案购买平台；提供彩票相关资讯；提供彩票信息交互平台；提供在线充值支付派奖结算服务。</h6>
      <h5>四、会员应遵守以下法律及法规：</h5>
      <h6>1、会员同意遵守《中华人民共和国保守国家秘密法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》以及其他有关计算机及互联网规定的法律和法规、实施办法。在任何情况下，平台合理地认为会员的行为可能违反上述法律、法规，平台可以在任何时候，不经事先通知终止向该会员提供服务。
        </br>2、会员应了解互联网的无国界性，应特别注意遵守当地所有有关的法律和法规。
        </br>3、禁止未成年人购买彩票。如会员为未成年人，请不要在本站购买专家方案；如未成年人提供虚假注册信息冒充成年人的，一经发现，该会员账户将被注销，其在本站进行的一切购买行为将自始无效，由此给本站及其本人造成的损失均由该未成年人及其法定代理人承担。
      </h6>
      <h5>五、会员隐私信息</h5>
      <h6>1、当会员注册平台的服务时，会员须提供个人真实信息。平台收集个人信息的目的是为会员提供尽可能多的个人化网上服务。
        </br>2、为更好的服务会员，平台有权保留并正当使用会员的各种注册信息、交易信息、参与促销活动信息及使用cookie。
        </br>3、平台不会在未经合法会员授权时，公开、编辑或透露其个人信息及保存在平台中的非公开内容，除非有下列情况：
        </br style="text-indent:2;">3.1.有关法律规定或平台合法服务程序规定；
        </br style="text-indent:2;">3.2.在紧急情况下，为维护会员及公众的权益；
        </br style="text-indent:2;">3.3.为维护平台的商标权；
        </br style="text-indent:2;">3.4.其他需要公开、编辑或透露个人信息的情况。
        </br>4、在以下（包括但不限于）几种情况下，平台有权使用会员的个人信息：
        </br style="text-indent:2;">4.1.在进行相关促销活动时，平台可能会与赞助商共享会员的个人信息，在这些情况下平台会在发送会员信息之前进行提示，并且会员可以通过不参与来终止传送过程。
        </br style="text-indent:2;">4.2.平台可以将会员信息与第三方数据匹配。
        </br style="text-indent:2;">4.3.平台会通过透露合计会员统计数据，向未来的合作伙伴、广告商及其他第三方以及为了其他合法目的而描述平台的服务。
        </br style="text-indent:2;">4.4.平台会向会员发送关于平台不同产品和服务的信息或者平台认为会员会感兴趣的其他产品和服务。另外，平台会竭尽全力保护会员的信息，但平台不能确信或保证任何个人信息的安全性，会员须自己承担风险。比如会员联机公布可被公众访问的个人信息时，会员有可能会收到未经会员同意的消息；平台的合作伙伴和可通过平台访问的第三方因特网站点和服务或通过抽奖、促销等活动得知会员个人信息的其他第三方会进行独立的数据收集工作等活动，平台对会员及其他任何第三方的上述行为，不承担任何责任。</h6>
      <h5>六、会员账号、密码和安全</h5>
      <h6>1、会员一旦注册成功，便成为平台的合法会员，会员有义务保证密码和账号的安全。会员对利用该密码和账号所进行的一切活动负全部责任；因此所衍生的任何损失或损害，平台无法也不负担任何责任。
        </br>2、会员的密码和账号遭到未授权的使用或发生其他任何安全问题，会员可以立即通知平台，并且会员在每次连线结束，应结束账号使用，否则会员可能得不到平台的安全保护。</h6>
      <h5>七、对会员信息的存储和限制</h5>
      <h6>平台不对会员所发布信息的删除或储存失败负责。平台有权判断会员的行为是否符合平台服务条款规定的权利，如果平台认为会员违背了服务条款的规定，平台有中断向其提供网络服务的权利。</h6>
      <h5>八、会员除非得到授权不得对平台服务进行复制、出售或用作其他商业用途。</h5>
      <h5>九、平台有权规定并修改使用平台服务的一般措施。</h5>
      <h6>如平台未能储存或删除平台服务的内容或其他讯息，平台不负任何责任。对于会员6个月未使用且无资金的账号，平台有权删除。</h6>
      <h5>十、与广告商的商业交易</h5>
      <h6>会员经由平台服务 与广告商进行通讯联系或商业往来或参与促销活动，完全属于会员与广告商之间的行为，与平台无任何关系，对于前述交易或前述广告商因平台服务 所生之任何损害或损失，平台不承担任何责任。平台无义务对广告及广告商进行甄别或审查。</h6>
      <h5>十一、接受商业、交易类信息的相关服务</h5>
      <h6>会员从平台服务 接受到的任何有关其他公司或个人的商业、交易信息，平台服务 对正确性、适用性，均不负任何责任。基于上述资料，会员所进行的交易或投资决定，由会员承担全部后果和责任。</h6>
      <h5>十二、关于链接</h5>
      <h6>平台服务 可能会提供与其他互联网网站或资源进行链接。对于前述网站或资源是否可以利用，平台不负保证责任。因使用或依赖上述网站或资源所生的损失或损害，平台亦不负任何责任。</h6>
      <h5>十三、平台的知识产权及其他权利</h5>
      <h6>1、平台对平台服务 及平台服务 所使用的软件包含受知识产权或其他法律保护的资料享有相应的权利；
        </br>2、经由平台服务 传送的资讯及内容未经平台明示授权许可，会员不得进行修改、出租、散布或衍生其他作品。
        </br>3、平台的设计图样、文案以及其他产品及服务名称，均为平台--收米拉网络科技有限公司所享有的商标。任何人不得使用、复制或用作其他用途。
      </h6>
      <h5>十四、免责声明</h5>
      <h6>1、用户资料泄露。由于用户将密码告知他人或与他人共享注册账户，或由于用户的疏忽，由此导致的任何个人资料泄露，以及由此产生的纠纷，中盛阳光竞彩专家服务平台不承担任何法律责任。无论何种原因导致的用户资料未授权使用、修改，用户密码、个人帐号或注册信息被未授权篡改、盗用而产生的一切后果，中盛阳光竞彩专家服务平台不承担任何法律责任。
        </br>2、 不可抗力及不可预见的情势发生。不可抗力和不可预见情势包括：自然灾害、政府行为、罢工、战争等；黑客攻击、计算机病毒侵入或发作、政府管制、彩票发行和销售机构的原因、彩票出票机或服务网络的故障、通信网络故障、国家政策变化、法律法规之变化等。因不可抗力和不可预见情势造成：网站全部或部分业务长期或暂时性关闭，用户资料被盗用、被篡改或方案购买等，中盛阳光竞彩专家服务平台未能收到委托指令等，以及由此产生的纠纷，中盛阳光竞彩专家服务平台不承担任何赔偿责任。因不可抗力和不可预见的情势造成本协议不能履行的，中盛阳光竞彩专家服务平台不承担任何赔偿责任。
        </br>3、 用户原因或第三方原因造成损失。由于用户自身原因、或违反法律法规，以及第三方的原因，造成用户无法使用中盛阳光竞彩专家服务平台服务或产生其他损失的，中盛阳光竞彩专家服务平台不承担任何赔偿责任。
        </br>4、 用户因购买专家方案而产生的损失。用户根据本平台进行购买的专家方案投注而发生的直接、间接的损害，中盛阳光竞彩专家服务平台不承担任何赔偿责任。
        </br>5、 用户使用链接或下载资料产生的损害。由于使用与中盛阳光竞彩专家服务平台链接的其它网站，或者使用通过中盛阳光竞彩专家服务平台下载或取得的资料，造成用户资料泄露、用户电脑系统损坏等情况及由此而导致的任何争议和后果，中盛阳光竞彩专家服务平台不承担任何赔偿责任。
        </br>6、 拒绝购买或中止购买的损失。中盛阳光竞彩专家服务平台在包括但不限于质疑用户资金来源的合法性、质疑用户未满18周岁等情况下，中盛阳光竞彩专家服务平台有权拒绝接受用户的方案购买；且有权在接受该用户方案购买后、完成出票前随时终止执行用户的购买指令，恢复原状。拒绝接受或中止执行用户方案购买指令，中盛阳光竞彩专家服务平台不承担任何其他法律责任。
        </br>7、 由于不可归咎于平台的互联网络原因、相关彩票发行中心服务器原因以及相关彩票发行中心提供的出票机故障等原因造成会员购买方案行为最终无法完成以及最终无法兑奖的，平台不承担任何责任。
        </br>8、 用户因使用中盛阳光竞彩专家服务平台提供的参考数据、选择专家方案等造成的损失。中盛阳光竞彩专家服务平台提供的参考数据、专家方案，如图表分析、过滤软件、SP值等，仅供用户参考，不保证及时性、准确性、正确性，用户因使用参考数据、专家方案造成的损失由用户自己承担，中盛阳光竞彩专家服务平台不承担任何赔偿责任。
        </br>9、平台有权改善或更正我站服务任何部分之任何疏漏、错误。
        </br>10、平台不保证（包括但不限于）：
        </br style="text-indent:2;">10.1.平台服务完全满足会员个人要求；
        </br style="text-indent:2;">10.2.平台服务不受干扰，及时、安全、可靠或不出现错误；
        </br style="text-indent:2;">10.3.会员经由平台服务取得的任何产品、服务或其他材料符合会员的期望；
        </br>11、基于以下原因而造成的利润、商业信誉、资料损失或其他有形或无形损失，平台不承担任何直接、间接、附带、衍生或惩罚性的赔偿：
        </br style="text-indent:2;">11.1.我站服务因第三方无法使用；
        </br style="text-indent:2;">11.2.经由我站服务购买或取得的任何产品、资料或服务；
        </br style="text-indent:2;">11.3.会员资料遭到未授权的使用或修改；
        </br style="text-indent:2;">11.4.其他与我站服务相关的事宜
        </br>12、用户应以本人所使用的手机号注册会员并使用本人名下的支付宝、银行卡等方式提现；若未使用本人名下支付宝或银行卡等结算；客服提醒后，后果由会员本人承担，平台不承担任何赔偿。
        </br>13、平台原出处为本公司，其它个人或公司盗用或用于其它目的，本公司有权追究法律责任。
      </h6>
      <h5>十五、由于会员经由平台服务张贴或传送内容、与平台服务连线、违反平台服务条款或侵害其他人的任何权利导致任何第三人提出权利主张，会员同意自行承担相关法律责任。</h5>
      <h5>十六、结算及财务通知</h5>
      <h6>1、会员可以随时进行账户余额核查，服务平台在网上向会员提供账户明细对账单；
        </br>2、会员中奖所获得奖金将按照国家体彩中心当期公布中奖金额并按照相应的扣税规则扣税后返至会员奖金账户。平台会不定期上传操盘记录。
        </br>3、会员可提现账户存有金额时，可根据需要对提现账户进行提款。提款过程中所产生的银行转帐手续费由平台承担。
        </br>4、会员完成提现操作后，所体现金额将在3个工作日内转到注册时所填写的支付宝账号中。
      <h5>十七、服务的修改和终止</h5>
      <h6>平台有权在任何时候，暂时或永久地修改或终止平台服务 （或任何一部分），并于相关网页上做适当通知。平台对平台服务 的修改或终止对会员和任何第三人不承担任何责任。平台有权基于合理理由，终止会员的账号、密码或使用平台服务 ，或删除、转移会员存储、发布在平台服务 的内容，且对会员和任何第三人不承担任何责任。</h6>
      <h5>十八、通知</h5>
      <h6>平台向会员发出的通知，采用电子邮件或页面公告或常规信件的形式。服务条款的修改或其他事项变更时，平台将会以上述形式进行通知。</h6>
      <h5>十九、协议的组成</h5>
      <h6>本法律声明为会员注册协议的有效组成部分，平台拥有对法律本声明的最终解释权。</h6>
      <h5>二十、法律的适用和管辖</h5>
      <h6>平台服务条款的生效、履行、解释及争议的解决均适用中华人民共和国法律，发生的争议提交北京仲裁委员会，其仲裁裁决是最终的。</h6>
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
