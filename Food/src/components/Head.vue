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
			<li><img src="../../static/images/上传.png" alt=""><router-link to="Registration.vue" tag="span">上传</router-link></li>
			<li><img src="../../static/images/问号.png" alt=""><router-link to="Question.vue" tag="span">提问</router-link></li>
			<li><img src="../../static/images/密码.png" alt=""><router-link to="Login.vue" tag="span">登录</router-link></li>
			<li><img src="../../static/images/编辑.png" alt=""><router-link to="Registration.vue" tag="span">注册</router-link></li>
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
		display flex
		width 340px
		height 90px
		line-height 90px
		justify-content flex-end
		li {
			display inline-block
			img {
				width 18px
				height 18px 
				vertical-align: middle
			}
			span {
    			line-height: 26px;
				cursor: pointer;
				font-size: 16px;
				vertical-align: middle
				margin-right 25px
				margin-left 5px
			}
		}
	}
}

</style>
