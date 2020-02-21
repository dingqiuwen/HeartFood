<template>
  <div class="hello">
    <Head></Head>
    <div class="tab">
      <ul>
        <li
          v-for="(item,index) in api"
          :key="index"
          @click="change(index,item)"
          :class="{active:index==tabIndex}"
        >{{item.name}}</li>
      </ul>
    </div>
	<keep-alive>
		<component v-if="!ifShow" :is="currentTabComponent"></component>
	</keep-alive>
  <Registration v-if="ifShow"></Registration>
  <Login></Login>
  </div>
</template>

<script>
import Head from "@/components/Head";
import HomePage from "@/views/HomePage";
import HomeCook from "@/views/HomeCook";
import HealthFood from "@/views/HealthFood";
import CookMenu from "@/views/CookMenu";
import CookSort from "@/views/CookSort";
import FoodAnswer from "@/views/FoodAnswer";
import UserRanking from "@/views/UserRanking";
import UserSearch from "@/views/UserSearch";
import Notice from "@/views/Notice";
import Registration from "@/components/Registration"
import Login from "@/components/Login"
import api from "@/api/tab.js";
export default {
  name: "HelloWorld",
  components: {
    Head,
    HomePage,
    HomeCook,
    HealthFood,
    CookMenu,
    CookSort,
    FoodAnswer,
    UserRanking,
    UserSearch,
    Notice,
    Registration,
    Login
  },
  data() {
    return {
      api: api,
	    tabIndex: 0,
	    currentIndex:null,
	    currentTabComponent:"HomePage"
    };
  },
  computed: {
    ifShow(){
      return this.$store.state.ifShow
    }
  },
  methods: {
    change(num,item) {
	    this.tabIndex = num;
	    this.currentIndex = item.currentName
	    if(item.currentName == "one"){
		    this.currentTabComponent = "HomePage"
	    }
	    if(item.currentName == "two"){
		    this.currentTabComponent = "CookMenu"
	    }
	    if(item.currentName == "three"){
		    this.currentTabComponent = "HomeCook"
	    }
	    if(item.currentName == "four"){
		    this.currentTabComponent = "FoodAnswer"
	    }
	    if(item.currentName == "five"){
		    this.currentTabComponent = "CookSort"
	    }
	    if(item.currentName == "six"){
		    this.currentTabComponent = "HealthFood"
	    }
	    if(item.currentName == "seven"){
		    this.currentTabComponent = "UserRanking"
	    }
	    if(item.currentName == "eight"){
		    this.currentTabComponent = "UserSearch"
	    }
	    if(item.currentName == "nine"){
		    this.currentTabComponent = "Notice"
      }
      this.$store.state.ifShow = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.tab {
  width: 100%;
  height: 40px;
  background-color: #fa7e3e;

  ul {
    display: flex;
    width: 980px;
    margin: 0 auto;
    padding: 4px 0 0;
    line-height: 36px;
    color: #fff;

    li {
      padding: 0px 18px 20px;
      font-size: 16px;
      margin-right: 5px;
    }

    li:hover {
      background: #fff;
      color: #fa7e3e;
    }

    .active {
      background: #fff;
      color: #fa7e3e;
    }
  }
}
</style>
