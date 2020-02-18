<template>
	<div class="hello">
		<div class="register">
			<h2>注册</h2>
			<form action="">
				<div class="content">
					<div class="left">
						<div class="email common">
							<img src="../../static/images/邮箱.png" alt="">
							<input type="email" name="email" id="email" placeholder="E-mail" onfocus="this.placeholder=''" onblur="this.placeholder='E-mail'">
						</div>
						<div class="user common">
							<img src="../../static/images/用户.png" alt="">
							<input type="text" name="username" id="username" placeholder="用户名" onfocus="this.placeholder=''" onblur="this.placeholder='用户名'">
						</div>
						<div class="psw common">
							<img src="../../static/images/密码.png" alt="">
							<input type="password" name="password" id="password" placeholder="密码" onfocus="this.placeholder=''" onblur="this.placeholder='密码'">
						</div>
						<div class="repsw common">
							<img src="../../static/images/密码.png" alt="">
							<input type="password" name="repassword" id="repassword" placeholder="确认密码" onfocus="this.placeholder=''" onblur="this.placeholder='确认密码'">
						</div>
					</div>
					<div class="right">
						<a href=""></a>
						<span>已经有账户了？登录</span>
					</div>
				</div>
			</form>
    	</div>
  	</div>
</template>
<script>
export default {
  	name: "Registration",
  	components: {
  	},
  	data() {
    	return {

    	};
  	}
  
};
</script>
<style lang="stylus" scoped>
.common{
	box-sizing border-box
	padding-top 4px
	width 241px
	height 40px
	padding-left 6px
	border solid 1px #f2eded
	margin-bottom 20px
	img {
		display inline-block
		width 22px
		height 22px
		vertical-align middle
	}
	input {
		border none
		height 26px
		vertical-align middle
	}
	input:focus{outline:none;}
}
.common:hover{
	border solid 1px #FFCD00
	box-shadow 0px 0px 3px #FFCD00;
}
.register {
	width 840px
	height 500px
	margin 30px auto 
	border solid 1px #f2eded
	h2 {
		text-align center
		font-size 20px
		color #817c74
		height 57px;
    	line-height 57px;
    	border-bottom 1px solid #f2eded;
		font-weight 400
	}
	form {
		.content {
			height 376px
			padding 40px 0
			.left {
				float left
				padding 0 85px
				width 249px
				    width: 249px;
    				border-right 2px dotted #ebebeb;
			}
			.right {
				box-sizing border-box
				height 112px
				padding 0 85px
				float right
				a {
					display block
					border 1px solid #eae6e3;
					font-size 0
					width 244px
					height 40px
					background url("../../static/images/weibo.png") 50% 50%/30px 30px no-repeat
				}
				a:hover {
					border 1px solid #eae6e3
					background #f6493c url("../../static/images/weibo1.png") 50% 50%/30px 30px no-repeat
				}
				span {
					a {

					}
				}
			}
		}
	}
}
</style>