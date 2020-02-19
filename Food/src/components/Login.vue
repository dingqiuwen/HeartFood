<template>
	<div class="hello">
		<div class="login">
			<h2>登录</h2>
			<form action="" autocomplete="off" style="background-color:#fff;">
				<div class="content">
					<div class="left">
						<div class="email common">
							<img src="../../static/images/邮箱.png" alt="">
							<input type="email" name="email" id="email" placeholder="E-mail" onfocus="this.placeholder=''" onblur="this.placeholder='E-mail'">
						</div>
						<div class="psw common">
							<img src="../../static/images/密码.png" alt="">
							<input type="password" name="password" id="password" placeholder="密码" onfocus="this.placeholder=''" onblur="this.placeholder='密码'">
						</div>
						<div class="remenberpsw">
							<a href="" class="forgetpsw">忘记密码？</a>
						</div>
						<div class="btn">
							<button type="submit" style="background:transparent;border:0;color:#FFFFFF;line-height:40px;outline:none;cursor:pointer;">完成注册</button>
						</div>
					</div>
					<div class="right">
						<a href="" class="wb"></a>
						<span>还没有账户？<a href="" class="rbtn">注册</a></span>
					</div>
				</div>
			</form>
    	</div>
  	</div>
</template>
<script>
export default {
  	name: "Login",
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
	width 249px
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
	input:focus{
        outline none
    }
}
.common:hover{
	border solid 1px #FFCD00
	box-shadow 0px 0px 3px #FFCD00;
}
.login {
	width 840px
	height 320px
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
			height 181px
			padding 40px 0
			.left {
				float left
				padding 0 85px
				width 249px
    			border-right 2px dotted #ebebeb;
				.remenberpsw {
					.forgetpsw {
						font-size 14px
					}
                    .forgetpsw:hover{
                        color #fa7e3e
                    }
				}
				.btn {
					height 40px
    				display inline-block
    				position: relative
					background-color #fa7e3e
					text-align center
    				border 0
    				width: 100%
				}

			}
			.right {
				box-sizing border-box
				height 112px
				padding 0 85px
				float right
				position relative
				.wb {
					display block
					border 1px solid #eae6e3;
					font-size 0
					width 244px
					height 40px
					background url("../../static/images/weibo.png") 50% 50%/30px 30px no-repeat
				}
				.wb:hover {
					border 1px solid #eae6e3
					background #f6493c url("../../static/images/weibo1.png") 50% 50%/30px 30px no-repeat
				}
				span {
					position absolute
					right 85px
					bottom 0
					color #a69f96
					font-size 14px
					.rbtm {
						color #000
					}
				}
			}
		}
	}
}
</style>