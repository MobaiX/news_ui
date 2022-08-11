<template>
    <div id="userCenter">
      <div style="padding: 10px 10px;background-color: #8b8994;height: 30%;">
        <van-button round type="info" style="float: right;background-color: #6d6c74;color: #ffffff;border: 0px;right: 13%;font-size: 18px">
          <van-icon name="plus" color="#ffffff" @click="publishAction=true"/>发布
        </van-button>
        <van-button round style="right: 1%;position: fixed;display: flex;background-color: #6d6c74;border: 0px;width: 45px">
          <van-icon name="setting-o" size="2rem" style="margin-left: -8px" color="#ffffff"/>
        </van-button>
        <div style="width: 100%">
          <van-image
            round
            style="float: left;margin-top: 15%"
            width="7rem"
            height="7rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <div style="margin: 12% 15px 35px;height: 70px;float: left;color: #ffffff">
            <span class="van-ellipsis">用户名称</span><br/>
            <span>
              <span style="margin-right:5px;font-size: 15px"><span style="font-size: 20px">0</span>&nbsp;关注</span>
              <span style="margin-right:5px;font-size: 15px"><span style="font-size: 20px">0</span>&nbsp;粉丝</span>
              <span style="margin-right:5px;font-size: 15px"><span style="font-size: 20px">0</span>&nbsp;获赞</span>
            </span>
          </div>
        </div><br/>
        <div style="clear: both;margin-bottom: 20px;color: white">
          <van-button style="left: -4%;font-size: 15px;font-style: oblique;background-color: rgba(0,0,0,0);border: 0px;color: #ffffff" to="/userDetail">
            填写简介更容易获得大家的关注，点击添加
            <van-icon name="arrow" />
          </van-button>
          <van-button type="info" style="background-color: #acabb3;border: 0px;width: 120px">申请认证</van-button>
          <van-button type="info" style="background-color: #acabb3;border: 0px;width: 120px" to="/userDetail">编辑资料</van-button>
        </div>
      </div>
      <div>
        <van-grid column-num="4">
          <van-grid-item icon="bulb-o" text="消息通知" to="/messageNotice" />
          <van-grid-item icon="eye-o" text="关注" to="/myConcern"/>
          <van-grid-item icon="star-o" text="收藏" to="/collection"/>
          <van-grid-item icon="goods-collect-o" text="钱包" to="/myWallet"/>
        </van-grid>
      </div>
      <div style="height: 200px;margin-top: 10%;text-align: center">
        <van-icon name="notes-o" size="4rem" style="color: #acabb3"/>
        <div style="margin: 15px auto;">分享今天值得记录的瞬间</div>
        <van-button round type="info" style="background-color: #ef4142;width: 120px;border: 0px" @click="publishAction=true">
          <van-icon name="plus" />发布
        </van-button>
        <van-action-sheet style="height: 35%" v-model="publishAction" :actions="options" title="发布类型" @select="onSelect" />
      </div>
    </div>
</template>

<script>
    export default {
        name: "userCenter",
        data(){
          return{
            user:{
              username:"",
              password:"",
              sex:"",
              headImage:"",
              identity:"",
              descript:"",
            },
            publishAction:false,
            options:[{name:"发布文章",icon:""},{name:"发布视频"}],
          }
        },
        components:{
          // 'app-scroll':require('../scroll/scroll')
        },
      methods:{
        onSelect(option){
          this.publishAction = false;
          if (option.name=="发布文章"){
            this.$router.push("/")
          }else{
            this.$router.push("/")
          }
        }
      }
    }
</script>

<style scoped>
  .content {
    padding: 16px 16px 100px;
    height: 35px;
  }
</style>
