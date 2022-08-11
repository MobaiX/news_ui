<template>
  <div id="messageNotice">
    <van-nav-bar
      title="消息通知"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs>
      <van-tab :title="'全部'">
        <div v-for="notice in notices">
          <van-swipe-cell>
            <div v-if="notice.type==1">
              <van-image
                round
                style="float: left;margin-top: 5%"
                width="3rem"
                height="3rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div style="margin: 7% 15px 7px;height: 50px;float: left;width: 80%">
                <span class="van-ellipsis">{{notice.doUser}}</span><br/>
                <span style="color: #9c9c9c">{{time<30?time+'天':(time<365?parseInt(time/30)+'月':parseInt(time/365)+'年')}}前</span>
              </div>
              <textarea rows="5" style="width: 80%;margin-left: 17%;border: 0px" readonly >{{notice.content}}</textarea>
            </div>

            <div v-else>
              <div style="margin-left: 2%">
                <van-image
                  round
                  style="float: left;margin-top: 5%;"
                  width="3rem"
                  height="3rem"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <div style="margin: 6% 14px 7px;height: 50px;float: left;width: 80%">
                  <span class="van-ellipsis">{{notice.doUser}}</span><br/>
                  <span style="color: #9c9c9c">{{notice.date}}</span>
                </div>
                <label>
                  <div class="van-ellipsis" style="width: 80%;border: 0px;" readonly >给您点了一个赞</div>
                </label>
                <div v-if="notice.image==''" style="clear: both;font-size: 18px;width:94%;margin-left: 2%;background-color: #f7f7f7">
                  <div class="van-multi-ellipsis--l2" style="margin: 10px 0px">
                    {{notice.likeName}}
                  </div>
                </div>

                <div v-else style="background-color: #f7f7f7;height: 128px;width: 96%">
                  <van-image
                    width="10rem"
                    height="8rem"
                    fit="contain"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    style="left: 2%;float: left"
                  />
                  <div style="height: 108px;font-size: 18px;padding-top: 6%;float: left;width: 48%;margin-left: 5%;">
                    <div class="van-multi-ellipsis--l3" style="width: 100%;">
                      {{notice.likeName}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <template #right>
              <van-button square type="danger" text="删除" style="top: 70%"/>
            </template>
          </van-swipe-cell>
        </div>
      </van-tab>

      <van-tab :title="'系统消息'">
        <div v-for="notice in notices">
          <van-swipe-cell>
            <div v-if="notice.type==1">
              <van-image
                round
                style="float: left;margin-top: 5%"
                width="3rem"
                height="3rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div style="margin: 7% 15px 7px;height: 50px;float: left;width: 80%">
                <span class="van-ellipsis">{{notice.doUser}}</span><br/>
                <span style="color: #9c9c9c">{{time<30?time+'天':(time<365?parseInt(time/30)+'月':parseInt(time/365)+'年')}}前</span>
              </div>
              <textarea rows="5" style="width: 80%;margin-left: 17%;border: 0px" readonly >{{notice.content}}</textarea>
            </div>
            <template #right>
              <van-button square type="danger" text="删除" style="top: 70%"/>
            </template>
          </van-swipe-cell>
        </div>
      </van-tab>

      <van-tab :title="'点赞'">
        <div v-for="notice in notices">
          <van-swipe-cell>
            <div v-if="notice.type==2">
              <div style="margin-left: 2%">
                <van-image
                  round
                  style="float: left;margin-top: 5%;"
                  width="3rem"
                  height="3rem"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <div style="margin: 6% 14px 7px;height: 50px;float: left;width: 80%">
                  <span class="van-ellipsis">{{notice.doUser}}</span><br/>
                  <span style="color: #9c9c9c">{{notice.date}}</span>
                </div>
                <label>
                  <div class="van-ellipsis" style="width: 80%;border: 0px;" readonly >给您点了一个赞</div>
                </label>
                <div v-if="notice.image==''" style="clear: both;font-size: 18px;width:94%;margin-left: 2%;background-color: #f7f7f7">
                  <div class="van-multi-ellipsis--l2" style="margin: 10px 0px">
                    {{notice.likeName}}
                  </div>
                </div>

                <div v-else style="background-color: #f7f7f7;height: 128px;width: 96%">
                  <van-image
                    width="10rem"
                    height="8rem"
                    fit="contain"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    style="left: 2%;float: left"
                  />
                  <div style="height: 108px;font-size: 18px;padding-top: 6%;float: left;width: 48%;margin-left: 5%;">
                    <div class="van-multi-ellipsis--l3" style="width: 100%;">
                      {{notice.likeName}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <template #right>
              <van-button square type="danger" text="删除" style="top: 70%"/>
            </template>
          </van-swipe-cell>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    export default {
        name: "messageNotice",
        data(){
          return{
            notices:[
              {
                doUser:"张三",
                date:"2022/2/2",
                likeId:1,
                likeName:"文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章标题文章标题文章标题",
                toWho:"李四",
                type:2,
                content:"",
                image:""
              },
              {
                doUser:"张三2",
                date:"2022/2/2",
                likeId:2,
                likeName:"文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章标题文章标题文章标题",
                toWho:"李四2",
                content:"",
                type:2,
                image:"2"
              },
              {
                doUser:"张三3",
                date:"2022/2/2",
                likeId:3,
                likeName:"文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章标题文章标题文章标题",
                toWho:"李四3",
                content:"",
                type:2,
                image:"1"
              },
              {
                doUser:"系统",
                date:"2022/2/2",
                likeId:4,
                likeName:"",
                toWho:"李四3",
                content:"文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章文章标题文章标题文章标题文章标题文章标题文章标题文章标题",
                type:1,
                image:""
              }
            ],
            time:"367",
          }
        },
        methods:{
          onClickLeft(){
            location.href="/userpage";
          }
        }
    }
</script>

<style scoped>

</style>
