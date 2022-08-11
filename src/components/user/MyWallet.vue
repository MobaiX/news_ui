<template>
    <div class="myWallet" style="text-align: center">
      <van-nav-bar
        title="我的钱包"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div>
        <van-icon name="gold-coin-o" color="#f7cb14" size="4rem" style="background-color: #fbdf64;border-radius: 50%;margin-top: 10%"/>
        <div style="font-size: 15px;margin-top: 5%">钱包余额</div>
        <div style="font-size: 40px;font-weight: bold;margin-top: 2%" >￥&nbsp;88.88</div>
      </div>
      <van-button type="info" round style="margin-top: 10%;width: 120px">提现</van-button>
    </div>
</template>

<script>
    export default {
        name: "myWallet",
        methods:{
          onClickLeft(){
            this.$router.push("/");
          },
        }
    }
</script>

<style scoped>

</style>
