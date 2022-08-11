<template>
  <div id="userDetail">
    <van-nav-bar
      title="个人信息页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="text-align: center">
      <van-image
        round
        width="10rem"
        height="10rem"
        style="margin-top: 10%"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      /><br/>
      <van-button type="info" style="background-color: rgba(0,0,0,0);font-style: oblique;color: black;border: 0px">点击更换头像</van-button>
      <van-cell-group style="margin-top: 5%;margin-left: 10%">
        <van-field label="用户名" label-width="10rem" class="cellStyle" type="text" readonly v-model="user.username"/>
        <van-field label="简介" label-width="10rem" class="cellStyle" type="text"  v-model="user.description" placeholder="待完善"/>
        <van-field label="性别" label-width="10rem" class="cellStyle" type="text"  v-model="user.sex"/>
        <van-field label="生日" label-width="10rem" class="cellStyle" type="text"  v-model="user.birthday" placeholder="待完善"/>
        <van-field label="所在地" label-width="10rem" class="cellStyle" type="text"  v-model="user.address" placeholder="待完善"/>
      </van-cell-group>
      <van-button type="info" round style="width: 120px;margin-top: 50px" @click="saveUserDetail()">保存</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "userDetail",
        data(){
          return{
            user:{
              username:"张三",
              password:"123456",
              sex:"保密",
              telephone:123465,
              birthday:"",
              headImage:"",
              backgorundImage:"",
              address:"",
              description:""
            },

          }
        },
        methods:{
          onClickLeft(){
            location.href="/userCenter";
          },
          saveUserDetail(){
              this.$axios({
                method:"post",
                url:"",
                data:_this.user,
              }).then(function (backInfo) {
                var info=backInfo.data;
              })
          },
        }
    }
</script>

<style scoped>
.cellStyle{
  font-size: 18px;
}
</style>
