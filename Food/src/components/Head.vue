<template>
  <div class="head">
    <div class="headSearch">
      	<div class="logo">
			  <a href="" target="_self"></a>
		  </div>
      	<div class="Search">
			<img src="../../static/images/搜索.png" alt="">	
			<input >
			<button type="submit">搜索</button>
      	</div>
		<ul class="function">
			<li><a href="">
				<li><img src="../../static/images/上传.png" alt=""></li>
				<span>上传</span>
			</a></li>
			<li><a href="">
				<li><img src="../../static/images/问号.png" alt=""></li>
				<span>提问</span>
			</a></li>
			<li><a href="">
				<li><img src="../../static/images/密码.png" alt=""></li>
				<span>登录</span>
			</a></li>
			<li><a href="">
				<li><img src="../../static/images/编辑.png" alt=""></li>
				<span>注册</span>
			</a></li>
		</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.headSearch{
    width 960px
    height 90px
    margin 0 auto 
	.logo {
		margin-top 20px
		float left
		display inline-block;
		a {
			display inline-block;
    		width 160px
    		height 51px
			background url(../../static/images/logo.png) no-repeat left center
		}
	}
	.Search {
		margin-left 20px
		margin-top 25px
		float left
		width 420px
		height 38px
		border solid 1px #A69F96 
		position relative
		img {
			width 30px
			height 30px
			position: absolute;
    		left: 4px;
    		top: 4px;
    		z-index: 2;
    		cursor: pointer;
			display inline-block
		}
		button {
			float right 
			color: #fff;
    		border: 0;
    		display: inline-block;
    		width: 80px;
    		height: 38px;
    		line-height: 38px;
    		cursor: pointer;
			background-color: #fa7e3e;
			font-size 16px
		}
		input {
			height: 20px;
    		padding-top: 9px;
    		padding-bottom: 9px;    
			width: 72%;
    		overflow-y: visible;
    		position: absolute;
    		left 38px;
    		top 0;
    		border 0;
		}
		
	}
	.function {
		margin-top 32px
		display inline-block
		width 340px
		height 26px
		list-style: none
		padding-left 0px
		li {
			margin-left 23px
			a {
				color black
				text-decoration: none
				vertical-align: middle
    			cursor: pointer
				li {
					float left
					img {
						display inline-block
						width 18px
						height 18px 
					}
				}
				span {
					margin-left 5px
					float left
					display: inline-block;
    				line-height: 20px;
					cursor: pointer;
					font-size: 16px;
				}
			}
		}
	}
}

</style>
