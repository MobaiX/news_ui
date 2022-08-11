<template>
  <div class="myConcern">
    <van-nav-bar
      title="我的关注"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <div style="width: 100%;">
        <van-image
          round
          style="float: left;margin-top: 3%;left: 2%;"
          width="7rem"
          height="7rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="margin: 12% 15px 35px;height: 70px;float: left;">
          <span class="van-ellipsis" style="color: #e36e28;font-size: 20px;margin-left: 5%">用户名称</span><br/>
        </div>
        <van-button plain round style="margin-top: 12%;margin-right: 2%;float: right;color: #6d6c74;font-size: 20px;border-color: #d8d8d8" @click="cancelAttention()">
          <van-icon name="success" />已关注
        </van-button>
      </div>
      <hr style="clear: both">
    </div>

    <div>
      <div style="width: 100%;">
        <van-image
          round
          style="float: left;margin-top: 3%;left: 2%;"
          width="7rem"
          height="7rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="margin: 12% 15px 35px;height: 70px;float: left;margin-left: 5%">
          <span class="van-ellipsis" style="color: #e36e28;font-size: 20px">用户名称</span><br/>
        </div>
        <van-button plain round style="margin-top: 12%;margin-right: 2%;float: right;color: #6d6c74;font-size: 20px;border-color: #d8d8d8" @click="cancelAttention()">
          <van-icon name="success" />已关注
        </van-button>
      </div>
      <hr style="clear: both">
    </div>
  </div>
</template>

<script>
    export default {
        name: "myConcern",
        data(){
            return{
              concerns:[]
            }
        },
        methods:{
          onClickLeft(){
            this.$router.push("/");
          },
          cancelAttention(){

          }
        }
    }
</script>

<style scoped>

</style>
