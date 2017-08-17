<style scoped>
	input{
		outline:0;
	}
	*{
		margin: 0;
		padding:0; 
		list-style: none;
	}
	.body_c{
		width:100%;
		height: 100vh;
		overflow: auto;
		background: #f5f5f5;
	}
	.right{
		float: right;
	}
	.left{
		float: left;
	}

	/*我的 头*/
	.topContent{
		height: 250px;
		background: #fff;
	}
	.topContainer{
		padding-top: 10px;
		width:100%;
	}
	.topContainer .wode{
		/*color: #fff;*/
		overflow:hidden;
	}
	.topContainer p span:nth-child(1){
		color:#fff;
		font-size: 14px;
		display: inline-block;
		width:80%;
		margin: 0 auto;
		float: left;
	}	
	.settingIcon{
		margin-left: 10px;
	}
	.mailIcon{
		margin-right: 10px;
	}
	/*.shuxian{
		color: #fff;
	}*/
	/*v-if*/
	.circle_pic{
		width:80px;
		height:80px;
		border:1px solid #fff;
		border-radius:40px;
		margin:0 auto;
		margin-top: 40px;
		background: url('http://www.ddzrp.com:3001/static/img/tx2_3.png') 0 0 no-repeat;
		background-size: 80px 80px;
	}
	.center_adr{
		width:100%;
		padding-top: 35px;
		margin:0 auto;
	}
	.center_adr .mu-raised-button{
		background: transparent;
		border: none;
		box-shadow: none;
		/*color: #fff;*/
	}
	.mu-raised-button{
		min-width: 50px;
	}
	/*v-else*/
	.center_else_adr{
		margin-top: 60px;
	}
	.up_info{
		overflow: hidden;
		padding-left: 20px;
	}
	.circle_pic1{
		width:80px;
		height:80px;
		border:1px solid #fff;
		border-radius:40px;
		background: url('http://www.ddzrp.com:3001/static/img/tx2_3.png') 0 0 no-repeat;
		background-size: 80px 80px;
	}
	.user_info{
		margin-left: 20px;
		padding-top: 10px;
	}
	.user_info p{
		text-align: left;
		line-height: 30px;
	}
	.user_info p:nth-child(1){
		font-size: 20px;
		color:#333;
	}
	.user_info p:nth-child(2){
		color:#ccc;
	}
	.go{
		margin-top: 10px;
		margin-left: 35px;
	}
	.user_jifen{
		margin-top: 10px;
		width:100%;
		border-top: 1px solid #eee;
	}
	.user_jifen a:nth-child(1){
		display: inline-block;
		padding: 10px 40px;
		margin-top: 5px;
		color:#333;
	}
	.user_jifen a:nth-child(2){
		display: inline-block;
		padding: 10px 40px;
		border-left: 1px solid #eee;
		color:#333;
		margin-top: 5px;
	}
	.user_jifen a:nth-child(3){
		display: inline-block;
		padding: 10px 40px;
		color:#333;
		margin-top: 15px;
		border-left: 1px solid #eee;
	}
	/*收藏列表*/
	.collection{
		width:100%;
		padding: 10px;
		overflow:hidden;
		border-bottom: 1px solid #eee;
		box-shadow: 0 1px 1px #eee;
		background: #fff;
	}
	.collection li{
		float: left;
		display: inline-block;
		width:25%;
		padding: 0 10px;
		text-align: center;
	}

	/*我的订单*/
	.my_order{
		width: 100%;
		overflow:hidden;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #eee;
		margin-top: 10px;
		background: #fff;

	}
	.my_order a{
		color: #333;
		margin-left: 20px;
		font-size: 16px;
	}
	.my_order .mu-icon{
		height: 50px;
		line-height: 50px;
	}
	.pay_collection{
		overflow:hidden;
		background: #fff;
		border-bottom: 1px solid #eee;
		margin-bottom: 10px;
		box-shadow: 0 1px 1px #eee;
	}
	.pay_collection li{
		float: left;
		display: inline-block;
		width:25%;
		padding: 10px 10px;
		text-align: center;
	}

	/*其他*/
	.others{
		background: #fff;
		margin-bottom: 55px;
	}
	.others ul li {
		display: block;
		overflow:hidden;
		position: relative;
		height: 50px;
		border-bottom: 1px solid #eee;
		line-height: 50px;
	}
	.others ul li a{
		float: left;
		color:#333;
		margin-left: 20px;
	}
	.others ul li small{
		position: absolute;
		margin-right: 20px;
		right:15px;
		line-height: 50px;
		color:#ccc;
	}
	.others ul li .mu-icon{
		line-height: 50px;
	}
	/*login*/
	.mu-drawer {
		width:100%;
	}
	.mu-appbar{
		border: none;
		box-shadow: none;
		background:#fff;
	}
	.close_login{
		position: fixed;
		left: 10px;
		top:10px;
		color:red;
	}
	.mu-drawer{
		position: absolute;
		top:0;
		z-index: 20000;
	}
	.dengluBtn{
		width: 180px;
		margin: 0 auto;
		font-size: 16px;
	}
	.dengluP{
		font-size: 22px;
		color: #333;
		margin-top: 30px;
	}
	.nn{
		font-size: 20px;
		width:340px;
		height: 40px;
		margin-top: 20px;
	}
	.forgetMm{
		float: left;
		margin-top: 10px;
		font-size: 16px;
	}
	.changeToReg{
		float: right;
		margin-top: 10px;
		font-size: 16px;
	}
	.fl{
		float: left;
		font-size: 16px;
		margin-top: 10px;
		color:#FD4D37;
	}
	.fl1{
		float: right;
		font-size: 16px;
		margin-top: 10px;
		color:#FD4D37;
	}

	/*忘记密码*/
	.forget_name{
		border:none;
		border-bottom: 1px solid #eee;
		margin-top: 30px;
		width: 90%;
		padding:10px;
		height: 40px;
	}
	.forget_name1{
		border:none;
		border-bottom: 1px solid #eee;
		width: 90%;
		padding:10px;
		height: 40px;
	}
	.forget_psd{
		border:none;
		border-bottom: 1px solid #eee;
		width: 60%;
		padding:10px;
		height: 40px;
	}
	.demo-flat-button{
		height: 40px;
	}
	.titleP{
		margin-top: 20px;
		display: inline-block;
		padding:5px 25px;
		margin-bottom: 30px;
		border:1px solid #FD4D37;
		color:  #fff;
		background:#FD4D37; 
	}
	.titleY{
		margin-top: 20px;
		display: inline-block;
		padding:5px 25px;
		margin-bottom: 30px;
		border:1px solid #FD4D37;
		color:  #FD4D37;
	}
	.taps{
		text-align: left;
		width:90%;
		margin: 0 auto;
		margin-top: 20px;
		color: #ccc;
	}
	.alert{
		background:#666;
		border-radius: 2px;
		width: 50%;
		margin-bottom: 60px;
		margin-left: 80px;
	}
	/*设置*/
	.wode  .settingBg{
		background: #f5f5f5;
		font-size: 16px;
	}
	.setting_backToMe{
		display: inline-block;
		width:50px;
		height: 50px;
		position: fixed;
		left: 10px;
		top:13px;
		background:url('http://www.ddzrp.com:3001/static/img/draw_vector_arrow_left_primary.png') 0 0 no-repeat;
		background-size: 30px 30px;
		z-index: 20000;
		margin-top:3px;
	}
	.settingTitle{
		width: 100%;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
		background-color: #fff;
		font-size: 20px;
	}
	.settingConent p{
		text-align: left;
		padding-left: 20px;
		width: 90%;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}
	.demo-switch-div{
		width:100%;
		background: #fff;
		line-height: 40px;
		height:40px;
	}
	.demo-switch {
		width:92%;
		margin-left: 10px;
	  	margin-bottom: 16px;
	}
	.sina_div{
		width:100%;
		background-color: #fff;
		height: 40px;
	}
	.sina{
		width:92%;
		margin-left: 10px;
	  	margin-bottom: 16px;
		background: url('http://www.ddzrp.com:3001/static/img/draw_vector_platform_sina_recipe_day_night.png') 0 5px no-repeat;
		background-size: 30px 30px;
		line-height: 50px;
		height: 40px;
		padding-left: 40px;
		padding-top: 10px;
	}
	.setting_others_list li{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #fff;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.setting_others_list .li_name{
		text-align: left;
		display: block;
		width: 90%;
		margin-left: 20px;
		color: #333;
		height: 50px;
		line-height: 50px;
	}
	.ruanjianDir{
		display: inline-block;
		margin-top: -35px;
	}
	.huancun{
		position: absolute;
		right:35px;
		top:3px;
		font-size: 14px;
	}
	/*消息提醒设置*/
	.msgPosition{
		position: fixed;
		top:0;
		background: #f5f5f5;
	}
	.setting_others_list .msgTitle{
		width:100%;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 10px;
		line-height: 40px;
		height: 50px;
		background: #fff;
		border-bottom: 1px solid #ccc;
	}
	.sixin{
		height: 70px;
		width:100%;
		background-color: #fff;
		margin-bottom: 20px;
	}
	.sixinBtn{
		width:90%;
		font-size: 16px;
		margin-top: 20px;
	}
	.setting_others .sixin .sixinDetail{
		font-size: 12px;
		margin-top: -10px;
		color: #aaa;
	}
	.Msjtext{
		margin-bottom: 60px;
	}
	.dropDenglu{
		/*margin-bottom: 40px;*/
	}
	/*修改个人信息*/
	.personalInfo{
		height: 100vh;
		overflow: auto;
		background: white;
	}
	.openOne_drawer{
		width:100%;
		position: fixed;
		top:0;
		background-color: #f5f5f5;
	}
	.shareandback{
		position: absolute;
		width: 100%;
		padding:5px 10px;
		z-index: 2;
		display: flex;
		justify-content: space-between;
	}
	.shareandback p{
		width: 100%;
    	line-height: 45px;
    	font-size: 18px;
	}
	.backTohongbei{
		display: inline-block;
		width:30px;
		height: 30px;
		background:url('http://www.ddzrp.com:3001/static/img/draw_vector_arrow_left_grey.png') 0 0 no-repeat;
		background-size: 30px 30px;
		z-index: 200;
		margin-top:5px;
	}
</style>

<template>
  <div class="body_c">
  	<div class="topContent">
  		<!-- 用户信息 -->
  		<div class="topContainer">
  			<p class="wode">
  				<mu-icon class="left settingIcon" value="settings"  @click="settingData()"/>
				<mu-drawer right :open="settingOpen" @close="settingData()" class="settingBg">
  					<a class="setting_backToMe"  @click="settingOpen = false"></a>
  					<p class="settingTitle">设置</p>
  					<div class="settingConent">
  						<p>网络设置</p>
  						<div class="demo-switch-div">
  							<mu-switch label="2G/3G/4G网络下显示图片" v-model="toggle" labelLeft class="demo-switch" />
  						</div>
  						<p>分享授权</p>
  						<div class="sina_div">
  							<mu-switch label="新浪微博" labelLeft class="sina" />
  						</div>
  						<p>设置</p>
  						<div class="setting_others">
  							<ul class="setting_others_list">
  								<li @click="msgClose()">
  									<a class="li_name">消息提醒设置</a>
  								</li>
  								<mu-drawer right :open="msgOpen" @close="msgClose()" class="msgPosition">
								   	<a class="setting_backToMe"  @click="msgOpen = false"></a>
										<p class="msgTitle">消息提醒设置</p>
									<div class="sixin">
											<mu-switch label="私信通知" labelLeft  class="sixinBtn" v-model="toggle2"/>
											<p class="sixinDetail">美食杰小伙伴给你发私信的提醒</p>
									</div>
									<div class="sixin">
											<mu-switch label="新动态" labelLeft  class="sixinBtn"v-model="toggle3"/>
											<p class="sixinDetail">点赞、评论、收藏内容的提醒</p>
									</div>
									<div class="sixin">
											<mu-switch label="文章推送" labelLeft  class="sixinBtn" v-model="toggle4"/>
											<p class="sixinDetail">美食杰精彩内容及优惠活动提醒</p>
									</div>
								</mu-drawer>
  								<li>
  									<mu-switch label="GPS定位提示" v-model="toggle1" labelLeft class="demo-switch" />
  								</li>
  								<li>
  									<a class="li_name">账号绑定</a>
  								</li>
  								<li>
  									<a class="li_name">软件评分</a>
		  							<mu-icon class="right  ruanjianDir" value="keyboard_arrow_right" color="#ccc"/>
  								</li>
  								<li @click="showBox">
  									<a class="li_name" >检查更新</a>
		  							<mu-icon class="right  ruanjianDir" value="keyboard_arrow_right" color="#ccc"/>
									 <mu-toast v-if="checkUpdate" message="当前版本(V6.3.1)是最新版本，感谢您对美食杰的支持" @close="hideToast" class="Msjtext"/>
  								</li>
  								<li>
  									<a @click="alertKuang()" class="li_name">清楚缓存</a>
  									<small class="right  huancun">0B</small>
		  							<mu-icon class="right  ruanjianDir" value="keyboard_arrow_right" color="#ccc"/>
		  							<div>
										<!-- <mu-raised-button label="dialog" @click="alertKuang()"/> -->
										<mu-dialog :open="dialog" title="提示" @close="closeKuang">
										    确认清楚缓存？
										<mu-flat-button slot="actions" @click.preventDefault="closeKuang" primary label="取消"/>
										<mu-flat-button slot="actions" primary @click.preventDefault="closeKuang" label="确定"/>
										</mu-dialog>
									</div>
  								</li>
  								<li>
  									<a class="li_name">关于我们</a>
		  							<mu-icon class="right  ruanjianDir" value="keyboard_arrow_right" color="#ccc"/>
  								</li>
		  						<div class="dropDenglu">
		  							<mu-raised-button label="退出登录"  color="#fff"  class="nn" backgroundColor="#FD4D37" @click.preventDefault="removeLocal()" fullWidth/>
		  						</div>
  								
  							</ul>
  						</div>
  					</div>
				</mu-drawer>
  				<span>我的</span> 
  				<mu-icon  class="right mailIcon"value="mail_outline" />
  			</p>
	  		<div>
	  			<div v-if="show_headPic" class="center_adr">
	  				<div class="circle_pic">
	  				</div>
					<p>
						<mu-raised-button label="登录"   @click.preventDefault="login()" />
						<mu-drawer right :open="open" @close="login()"  @hide="toLogin()">
							<mu-appbar title=""/>
							<mu-list>
								<p class="dengluP">登录账号</p>
								<div>
									<mu-list-item class="left close_login" @click.native="open = false" title="取消" v-model="this.cancel"/>
									<input type="text" placeholder="请输入手机号/邮箱" class="forget_name" v-model="Lg_name" @blur="loginNum()"><br>
									<input type="password" placeholder="请输入密码(6-12位数字)" class="forget_name1" v-model="lg_psd" @blur="loginPsd()"><br>
								</div>
								<!-- 弹框 -->
								<mu-toast v-if="lg_name1" message="手机号不正确" @close="hideToast" class="alert"/>
								<mu-toast v-if="lg_psd1" message="密码格式不正确" @close="hideToast" class="alert"/>
								<mu-toast v-if="lg_check" message="用户名或密码不正确" @close="hideToast" class="alert"/>

								<mu-raised-button label="登录"  color="#fff"  class="nn" backgroundColor="#FD4D37" @click.preventDefault="toLoginTrue()" :disabled="disDL" fullWidth/>
							</mu-list>
							<mu-raised-button label="忘记密码？"  @click.preventDefault="forgetMm()"  class="fl"/>

							<!-- 忘记密码 -->
							<mu-drawer right :open="open2" @close="forgetMm()"  @hide="toLogin()">
								<mu-appbar title=""/>
								<mu-list>
									<p class="dengluP">找回密码</p>
									<a class="titleP" @click="showPhone">手机</a><a class="titleY" @click.preventDefault="showEmail">邮箱</a>
									<!-- 找回密码里面的手机找回和邮箱找回部分 -->
									<div v-if="showP">
										<mu-list-item class="left close_login" @click.native="open2 = false" title="取消" v-model="cancel"/>
										<input type="text" placeholder="手机号" class="forget_name" v-model="findPNum" @blur="checkFindPname()"><br>
										<input type="text" placeholder="验证码" class="forget_psd" :disabled="forbidden" @blur="checkfindYan()" v-model="findYanzheng">
										<mu-flat-button label="请获取验证码" class="demo-flat-button  getpassword1" @click.preventDefault="getpassword()" :disabled="forbidden1"/>
										<input type="password" placeholder="密码 6-12位字母数字组合" class="forget_name1" v-model="findPpsd" @blur="checkFindPpsd()"><br>
										<mu-raised-button label="重设密码"  color="#fff"  class="nn" backgroundColor="#FD4D37" @click.preventDefault="UpdateTrue1()" fullWidth/>
										<mu-toast v-if="sixNum1" message="验证码不正确" @close="hideToast" class="alert"/>
									</div>

									<div v-else>
										<mu-list-item class="left close_login" @click.native="open2 = false" title="取消" v-model="cancel"/>
										<input type="text" placeholder="邮箱" class="forget_name" @blur="checkFindEmail()" v-model="emailData"><br>
										<p class="taps">输入您注册时的邮箱地址，我们会以邮件形式将重置密码链接发送至您的邮箱</p>
										<mu-raised-button label="发送"  color="#fff"  class="nn" backgroundColor="#FD4D37" @click.preventDefault="UpdateTrue2()"  :disabled="forbiddenSearch"fullWidth/>
									</div>
								</mu-list>
								<mu-toast v-if="findEmailData" message="邮箱不正确" @close="hideToast" class="alert"/>
								<mu-toast v-if="findEmailData1" message="请查看邮箱" @close="hideToast" class="alert"/>
							</mu-drawer>
							<!-- 手机或者邮箱找回结束 -->

							<mu-raised-button label="注册"  @click.preventDefault="dengluToZhuce()"  class="fl1"/>
						</mu-drawer>
						<span class="shuxian">|</span>
						<mu-raised-button label="注册"   @click.preventDefault="register()" />
						<mu-drawer right :open="open1" @close="register()" >
							<mu-appbar title=""/>
							<mu-list>
							<p class="dengluP">手机号注册</p>
							<div>
								<mu-list-item class="left close_login" @click.native="open1 = false" title="取消" v-model="cancel1"/>
								<input type="text" placeholder="请输入手机号/邮箱"  class="forget_name" v-model="userName"  @blur="checkName()"><br>
								<input type="text" placeholder="验证码" class="forget_psd"  v-model="yanzhengNum"@blur="checkYanzheng()" :disabled="disInp">
								<mu-flat-button label="请获取验证码"  class="demo-flat-button  getMm" @click.preventDefault="getMm()"   :disabled="forbidden2"/>
								<input type="password" placeholder="密码 6-12位字母数字组合" class="forget_name1" v-model="userPsd" @blur="checkPassword()"><br>
							</div>
							<mu-raised-button label="注册"  color="#fff"  class="nn" backgroundColor="#FD4D37" @click.preventDefault="toRegisterTrue()" :disabled="btnDis" fullWidth/>
							</mu-list>
							<!-- 弹框 -->
							<mu-toast v-if="toast" message="手机号不正确" @close="hideToast" class="alert"/>
							<mu-toast v-if="sixNum" message="验证码不匹配" @close="hideToast" class="alert"/>
							<mu-toast v-if="Mm" message="密码不正确" @close="hideToast" class="alert"/>
						</mu-drawer>
					</p>
	  			</div>
	  			<div v-else class="center_else_adr">
	  				<div class="up_info" @click="togglethis()">
	  					<div  class="circle_pic1 left"></div>
		  				<div class="user_info left">
			  				<div class="left">
			  					<p >{{user_name}}</p>
			  					<p>正在通往美食达人的路上...</p>
			  				</div>
		  					<div class="right go">
		  						<mu-icon class="left settingIcon" value="keyboard_arrow_right" color="#999"/>
		  					</div>
		  				</div> 
	  				</div>
	  				<mu-drawer right :open="open4" @close="togglethis()" class="openOne_drawer">
	  					<div class="personalInfo">
	  						<div class="shareandback">
								<a class="backTohongbei" @click="back"></a>
								<p>个人信息</p>
							</div>
							<personalInformation ></personalInformation>
	  					</div>
				  	</mu-drawer>
	  				<div class="user_jifen">
	  					<a >{{guanzhu}}关注</a>
	  					<a >{{fans}}粉丝</a>
	  					<a >{{num}}积分</a>
	  				</div>
	  			</div>
	  		</div>
  		</div>
  	</div>
	<!-- 收藏列表 -->
	<div class="shoucang">
		<ul class="collection"> 
			<li>
				<mu-icon class=" settingIcon" value="favorite" color="#FC4C36"/>
				<p>收藏</p>
			</li>
			<li>
				<mu-icon class=" settingIcon" value="book" color="orange"/>
				<p>发布</p>
			</li>
			<li>
				<mu-icon class="settingIcon" value="settings" color="#3184DE"/>
				<p >任务</p>
			</li>
			<li>
				<mu-icon class="settingIcon" value="shopping_basket" color="#78C85C"/>
				<p>菜篮子</p>
			</li>
		</ul>
	</div>
	<!-- 我的订单 -->
	<div class="order">
		<div class="my_order">
			<a class="left">我的订单</a>
		  	<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
		</div>
		<div class="pay_list">
			<ul class="pay_collection"> 
			<li>
				<mu-icon class=" settingIcon" value="account_balance_wallet" color="#ccc"/>
				<p>待付款</p>
			</li>
			<li>
				<mu-icon class=" settingIcon" value="assignment" color="#ccc"/>
				<p>待评价</p>
			</li>
			<li>
				<mu-icon class="settingIcon" value="shopping_cart" color="#ccc"/>
				<p >购物车</p>
			</li>
			<li>
				<mu-icon class="settingIcon" value="room" color="#ccc"/>
				<p>收货地址</p>
			</li>
		</ul>
		</div>
	</div>
	<!-- 站内信 巴拉巴拉-->
	<div class="others">
		<ul>
			<li>
				<a href="">站内信</a>
		  		<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
			</li>
			<li>
				<a href="">草稿箱</a>
				<small >0</small>
		  		<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
			</li>
			<li>
				<a href="">我的足迹</a>
		  		<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
			</li>
			<li>
				<a href="">美食DNA</a>
				<small >0</small>
		  		<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
			</li>
			<li>
				<a href="">意见反馈</a>
		  		<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
			</li>
			<li>
				<a>服务热线</a>
				<small >4006-921-621</small>
		  		<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999"/>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
import personalInformation from "./personalInformation.vue"
export default {
	components:{
		personalInformation
	},
	data () {
	    return {
	    		open4:false,
	    		checkUpdate:false,
	    		toggle1:true,
	    		toggle2:true,
	    		toggle4:true,
	    		toggle3:true,
	    		toggle:true,
	    		disDL:true,
	    		btnDis:true,
	    		userPsd:null,
	    		userName:null,
	    		showP:true,
	    		show_headPic:true,
	    		cancel:true,
	    		cancel1:true,
	    		user_name:'joo',
	    		guanzhu:1,
	    		fans:0,
	    		num:24,
	    		open: false,
	    		open2: false,
	    		open1: false,
	    		settingOpen:false,
	    		msgOpen:false,
	    		toast: false,
	    		yanzhengNum:null,
	    		sixNum:false,
	    		disInp:true,
	    		Mm:false,
	    		Lg_name:null,
	    		lg_name1:false,
	    		lg_psd:null,
	    		lg_psd1:false,
	    		lg_check:false,
	    		findPNum:null,
	    		findPpsd:null,
	    		forbidden:true,
	    		forbidden1:false,
	    		forbidden2:false,
	    		findYanzheng:null,
	    		sixNum1:false,
	    		emailData:null,
	    		findEmailData:false,
	    		forbiddenSearch:true,
	    		findEmailData1:false,
	    		dialog: false
	    }
	},
  	methods: {
  		togglethis(){
  			this.open4 = !this.open4
  		},
  		back(){
  			this.open4 = false
  		},
  		// 注册失焦触发正则
  		checkName(){
  			if(this.userName == null || this.userName.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) == -1){
  				this.showToast ();
  			}else{
  				
  				return true;
  			}
  		},
  		// 获取手机注册验证码 按钮定时
  		getMm(){
  			this.disInp = false;
  			var timer= 59;
  			var countDown = setInterval (go,1000);
  			function go(){	
  				$(".getMm").text(timer+"秒");
  				timer-=1;
  				if(timer == 0){
  					$(".getMm").text("重新获取验证码");
  					clearInterval(countDown);
  					timer=59;

  				}
  			}
  		},
  		// 验证用户名时显示弹框
  		showToast () {
		      this.toast = true
		      if (this.toastTimer) clearTimeout(this.toastTimer)
		      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
		    },
		// 验证用户名时隐藏弹框
		hideToast () {
		      this.toast = false
		      if (this.toastTimer) clearTimeout(this.toastTimer)
		    },
		// 正则验证验证码
		checkYanzheng(){
			if(this.yanzhengNum ==null){
	        		this.showsixNum();
	        	}else if(this.yanzhengNum.search( /^\d{6}$/) == 0  ){
	        		return true;
	        	}else{
	        		this.showsixNum();
	        		this.yanzhengNum=null;
	        	}
		  },
		  // 验证验证码弹框
		showsixNum(){
		      this.sixNum = true
		      if (this.toastTimer1) clearTimeout(this.toastTimer1)
		      this.toastTimer1 = setTimeout(() => { this.sixNum = false }, 2000)
		},
		// 失焦正则验证密码
		checkPassword(){
			if(this.userPsd ==null){
	        		this.showPsd();
	        	}else if(this.userPsd.search( /^[A-Za-z0-9]{6,12}$/) == 0  ){
	        		if(this.checkName() == true && this.checkYanzheng() == true){
	        			this.btnDis= false;
	        			return true;
	        		}
	        	}else{
	        		this.showPsd();
	        		this.userPsd=null;
	        		this.btnDis= true;
	        	}
		},
		// 验证密码弹框
		showPsd(){
			this.Mm = true
		       if (this.toastTimer2) clearTimeout(this.toastTimer2)
		       this.toastTimer2 = setTimeout(() => { this.Mm = false }, 2000)
		},
		// 检测登录用户名
		loginNum(){
			if(this.Lg_name == null ){
				this.disDL=true;
  				this.showLg ();
  			}else if(this.Lg_name.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)==0||this.Lg_name.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==0){
  					return true;
  			}else{
  				this.Lg_name=null;
  				this.showLg ();
				this.disDL=true;
  			}
		},
		// 检测登录用户名弹框,找回密码验证用户名弹框
		showLg () {
		      this.lg_name1 = true
		      if (this.toastTimer4) clearTimeout(this.toastTimer4)
		      this.toastTimer4 = setTimeout(() => { this.lg_name1 = false }, 2000)
		    },
		// 验证登录密码
		loginPsd(){
			if(this.lg_psd == null ){
  				this.showLgPsd ();
				this.disDL=true;
  			}else if(this.lg_psd.search( /^[A-Za-z0-9]{6,12}$/)==0){
				this.disDL=false;
				return true;
  			}else{
  				this.lg_psd=null;
  				this.showLgPsd ();
  			}
		    },
		    showLgPsd () {
		      this.lg_psd1 = true
		      if (this.toastTimer5) clearTimeout(this.toastTimer5)
		      this.toastTimer5 = setTimeout(() => { this.lg_psd1 = false }, 2000)
		    },
   		login() {
		      this.open = !this.open
		},
		register () {
		      this.open1 = !this.open1
		},
		toLogin(){
			if(this.cancel == true){
				this.show_headPic=true;
			}else{
				this.show_headPic=false;
			}	
		},
		// 登陆成功
		toLoginTrue(){
			axios({
				method:"post",
				url:this.siteUrl+"/appLogin",
				data:{
					"user_name":this.Lg_name,
					"user_password":this.lg_psd,
				}
			})
			.then((data)=>{
				if(data.data.code == 1){
					// console.log(111)
					localStorage.setItem("username", this.Lg_name);
					this.user_name=this.Lg_name;
					this.Lg_name=null;
					this.lg_psd=null;
					this.open=false;
					this.cancel=false;

				}else{
					this.showCheckres ();
					this.Lg_name=null;
					this.lg_psd=null;
				}
			})
			
		},
		// 检测登录按钮弹框
		showCheckres () {
		      this.lg_check = true
		      if (this.toastTimer6) clearTimeout(this.toastTimer6)
			      this.toastTimer6 = setTimeout(() => { this.lg_check = false }, 2000)
		},
		btnNormal(){
			this.btnDis=false;
		},
		toRegisterTrue(){
			if(this.checkName() == true&& this.checkYanzheng()==true&&this.checkPassword()== true){
				var obj = {
					user_name:this.userName,
					user_password:this.userPsd,
					"touxiang":"http://ntpush.cn:3999/20170808231310993.jpg",
				    "nickname":"朕",
				    "sign":"正在通往美食达人的路上...",
				    "sex":"男",
				    "birth":'',
				    "hometown":'',
				    "nowaddress":'',
				    "profession":''
				};
				console.log(obj)
				axios({
					method:"post",
					url:this.siteUrl+"/apprequest",
					data:obj
				})
				.then((data)=>{
					console.log(data);
					this.userName=null;
					this.userPsd=null;
					this.yanzhengNum=null;
				})
			}
			// 框框变化
			this.open1=false;
			this.cancel1=false;
			this.open2=false;
			this.open = true;
		},
		// 手机号找回 验证 手机号
		checkFindPname(){
			axios({
				method:"post",
				url:this.siteUrl+"/findCheckName",
				data:{user_name:this.findPNum}
			})
			if(this.findPNum == null){
				this.showLg ();
			}else if(this.findPNum.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) ==0 ){
				this.forbidden=false;
				return true;
			}else{
				this.showLg ();
				this.findPNum = null;
			}
		},
		// 检测手机找回密码
		checkFindPpsd(){
			if(this.findPpsd == null){
				this.showLgPsd ();
			}else if(this.findPpsd.search()== 0){
				return true;
			}else{
				this.findPpsd= null;
				this.showLgPsd ();
				
			}
		},
		// 手机号找回密码获取验证码
		getpassword(){
			this.forbidden = false;
  			var timer1= 20;
  			var countDown1 = setInterval (go1,1000);
  			function go1(){	
  				$(".getpassword1").text(timer1+"秒");
  				timer1-=1;
  				if(timer1== 0){
  					$(".getpassword1").text("重新获取验证码");
  					clearInterval(countDown1);
  					timer1=20;
  				}

  			}
		},
		// 检查手机找回密码验证码
		checkfindYan(){
			if(this.findYanzheng == null){
				this.showsixNum1()
			}else if( this.findYanzheng.search(/^\d{6}$/) == 0){
				return true;
			}else{
				this.showsixNum1();
				this.findYanzheng = null;
			}
		},
		//检查手机找回密码   验证验证码弹框
		showsixNum1(){
		      this.sixNum1 = true
		      if (this.toastTimer7) clearTimeout(this.toastTimer7)
		      this.toastTimer7 = setTimeout(() => { this.sixNum1 = false }, 2000)
		},
		// 手机找回重置密码提交按钮
		UpdateTrue1(){
			if(this.checkFindPname() && this.checkFindPpsd() && this.checkfindYan()  == true){
				axios({
					method:"post",
					url:this.siteUrl+"/updateTrue",
					data:{
						user_name:this.findPNum,
						user_password:this.findPpsd
					}
				})
				.then((data)=>{
					console.log(data.data.data);
					this.open2 = false;
					this.cancel = true;
					this.show_headPic = true;
					this.open = true;

				})
			}
		},
		// 正则验证找回密码email
		checkFindEmail(){
			if(this.emailData == null){
				this.showToast2();
				this.forbiddenSearch=true;
			}else if(this.emailData.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)== 0){
				this.forbiddenSearch=false;	
			}else{
				this.showToast2();
				this.forbiddenSearch=true;	
			}
		},
		// 验证邮箱找回密码时弹框1
  		showToast2 () {
		      this.findEmailData = true
		      if (this.toastTimer8) clearTimeout(this.toastTimer8)
		      this.toastTimer8 = setTimeout(() => { this.findEmailData = false }, 2000)
		    },
		// 验证邮箱找回密码时弹框2  提交时
		showToast3 () {
		      this.findEmailData1 = true
		      if (this.toastTimer9) clearTimeout(this.toastTimer9)
		      this.toastTimer9 = setTimeout(() => { this.findEmailData1 = false }, 2000)
		    },
		//验证数据库是否有email
		UpdateTrue2(){
			axios({
					method:"post",
					url:this.siteUrl+"/sendEmailData",
					data:{user_name:this.emailData}
				})
				.then((data)=>{
					if(data.data.code == 1){
						console.log(data.data.data)
						this.showToast3 ()
						this.emailData= null;
					}else{
						this.emailData= null;
						this.showToast2 ()
					}
					
				})
		},
		dengluToZhuce(){
			this.open1 = !this.open1;
			this.open = false;
		},
		forgetMm(){
			this.open2 = !this.open2
		},
		showEmail(){
			this.showP=false;
			$(".titleY").css({
				"background":"#FD4D37",
				"color":"#fff"
			}).siblings().css({
				"background":"none",
				"color":"#FD4D37"
			})
		},
		showPhone(){
			this.showP=true;
			$(".titleP").css({
				"background":"#FD4D37",
				"color":"#fff"
			}).siblings().css({
				"background":"none",
				"color":"#FD4D37"
			})
		},
		// 退出登录
		removeLocal(){
			this.settingOpen = false;
			// this.open = false;
			localStorage.clear('username');
			this.show_headPic=true;
		},

		// 设置页面
		settingData() {
		      this.settingOpen = !this.settingOpen
		},
		// 清楚缓存
		alertKuang () {
		      this.dialog = true
		},
		closeKuang () {
		      this.dialog = false
		},
		// 消息提醒设置
		msgClose(){
			 this.msgOpen = !this.msgOpen
		},
		// 检查更新
		showBox () {
		    this.checkUpdate = true
		    if (this.toastTimer10) clearTimeout(this.toastTimer10)
		      	this.toastTimer10 = setTimeout(() => { this.checkUpdate = false }, 2000)
		    },
  		},
  		created(){
  			localStorage.removeItem('jfVersion');
  			console.log(localStorage.username)
  		    if(!localStorage.username){
  				this.show_headPic=true;
  			}else{
  				this.user_name = localStorage.getItem("username");
  				this.show_headPic=false;
  		    }
  		}
	}
</script>

