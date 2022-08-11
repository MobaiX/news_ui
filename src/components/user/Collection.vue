<template>
  <div id="collection">
    <div>
      <van-button style="border: 0px;float: left;height: 54px" to="/">
        <van-icon name="arrow-left" size="1.5rem"/>
      </van-button>
      <van-search
        v-model="search"
        shape="round"
        background="#ffffff"
        placeholder="请输入搜索关键词"
        class="searchStyle"
      />
    </div>
    <div>
      <van-tabs>
        <van-tab :title="'文章收藏'">
          <div v-for="article in articles">
              <div v-if="article.image==''" style="font-size: 18px;width:92%;padding-top: 5%;margin-left: 5%">
                <van-swipe-cell>
                  <div class="van-multi-ellipsis--l2">文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
                  <div style="color: #9c9c9c;font-size: 13px;margin-top: 5px">
                    {{article.name}}&nbsp;&nbsp;
                    {{time<30?time+'天':(time<365?parseInt(time/30)+'月':parseInt(time/365)+'年')}}前
                  </div>
                  <template #right>
                    <van-button square type="danger" text="删除" style="top: 20%"/>
                  </template>
                </van-swipe-cell>
              </div>
              <div v-else>
                <van-swipe-cell>
                  <div style="height: 108px;font-size: 18px;padding-top: 3%;float: left;width: 48%;margin-left: 5%">
                    <div class="van-multi-ellipsis--l3" style="width: 100%;">文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
                    <div style="color: #9c9c9c;font-size: 13px;margin-top: 5px">
                      {{article.name}}&nbsp;&nbsp;
                      {{time<30?time+'天':(time<365?parseInt(time/30)+'月':parseInt(time/365)+'年')}}前
                    </div>
                  </div>
                  <van-image
                    width="10rem"
                    height="8rem"
                    fit="contain"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    style="left: 2%"
                  />
                  <template #right>
                    <van-button square type="danger" text="删除" style="top: 35%"/>
                  </template>
                </van-swipe-cell>
              </div>
          </div>
        </van-tab>

        <van-tab :title="'视频收藏'">
          <div v-for="video in videos">
            <van-swipe-cell>
              <div style="height: 108px;font-size: 18px;padding-top: 3%;float: left;width: 48%;margin-left: 5%">
                <div class="van-multi-ellipsis--l3" style="width: 100%;">文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
                <div style="color: #9c9c9c;font-size: 13px;margin-top: 5px">
                  {{video.name}}&nbsp;&nbsp;
                  {{time<30?time+'天':(time<365?parseInt(time/30)+'月':parseInt(time/365)+'年')}}前
                </div>
              </div>
              <van-image
                width="10rem"
                height="8rem"
                fit="contain"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                style="left: 2%"
              />
              <template #right>
                <van-button square type="danger" text="删除" style="top: 35%"/>
              </template>
            </van-swipe-cell>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "collection",
      data(){
          return{
            articles:[
              {
                name:"文章1",
                author:"张三",
                date:"2022/10/11",
                image:""
              },
              {
                name:"文章2",
                author:"李四",
                date:"2022/10/11",
                image:"1"
              }
            ],
            videos:[
              {
                name:"视频1",
                author:"张三",
                date:"2022/10/11",
                image:"1"
              },
              {
                name:"视频2",
                author:"李四",
                date:"2022/10/11",
                image:"1"
              }
            ],
            search:"",
            time:35
          }
      }
    }
</script>

<style scoped>
.searchStyle{
  width: 80%;
  margin: 0px auto;
}
</style>
