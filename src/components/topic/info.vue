<template>
  <div class="center">
      <div v-if="!this.$store.state.loading"><Loding></Loding></div>
      <div v-if="this.$store.state.loading">
      <div class="info-top">
        <div class="top-title">
          <span v-show="this.$store.state.list.top">置顶</span>
          <span v-show="this.$store.state.list.good">精华</span>
          <span v-show="this.$store.state.list.tab === 'share'">分享</span>
          <span v-show="this.$store.state.list.tab === 'ask'">回答</span>
          <span v-show="this.$store.state.list.tab === 'job'">招聘</span>
          {{this.$store.state.list.title}}
        </div>
        <div class="change">
          <span>发布于：{{formatDate(this.$store.state.list.create_at)}}</span>
          <span>作者：{{this.$store.state.list.author.loginname}}</span>
          <span>{{this.$store.state.list.visit_count}}次浏览</span>
          <span>来自 {{this.$store.state.list.tab ==='share' ? '分享': this.$store.state.list.tab=== 'ask'? '回答' : '招聘'}}</span>
        </div>
      </div>
      <div v-html="this.$store.state.list.content"></div>
      <div class="panel">
        <div class="header"><span>{{this.$store.state.list.reply_count}}回复</span></div>
        <div class="reply-input">
          <input type="text" placeholder="请输入回复内容">
          <button type="button" >回复</button>
        </div>
        <ul> 
          <li v-for="item in this.$store.state.list.replies"  class="cell cleanFix">
            <div class="content-author">
              <div class="demo-avatar">
                  <Avatar :src="item.author.avatar_url" />
              </div>
              <div class="info">
                  <span>{{item.author.loginname}}</span>
                  <span>{{item.index}}</span>
                  <span>{{formatDate(item.create_at)}}</span>
              </div>
              <div class="action">
                <span><i><Icon type="thumbsup"></Icon></i>{{item.ups.length}}</span>
              </div>
            </div>
            <div class="content-reoly" v-html="item.content"></div>
            <div></div>
          </li>
        </ul>
      </div>

      </div>
  </div>
</template>

<script>
import Loding from '../loding'
export default {
  
  components:{
    Loding,
  },
    methods:{
      formatDate(date){
          if(date){
            return  date.split('T').join(' ').split('.')[0]
          }
        }
    },
    mounted(){
      this.$store.dispatch('listAction',{id:this.$router.currentRoute.params.id})
      
  }
}
</script>

<style>
p{
  margin: 6px 0
}
  .center{
    width: 800px;
    margin: 0 auto
  }
  .info-top{
    padding: 10px;
    border-radius: 3px 3px 0 0;
  }
  .top-title{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .top-title span{
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .change{
    font-size: 12px;
    color: #838383;
  }
  .panel{
    margin: 10px 5px
  }
  .header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .cell{
    background: #fff;
    border-top: 1px solid #f0f0f0;
    padding: 8px 0 8px 10px
  }
  .content-author{
    display: block
  }
  .demo-avatar{
    float: left;
  }
  .content-reply{
    clear: both;
    padding-left: 0;
    padding-top: 5px;
  }
  .info{
    margin-left: 10px;
    display: inline-block;
  }
  .action{
    float: right;
    margin-left: 20px;
    font-size: 15px;
  }
  .action i{
    margin-right: 6px
  }
  .cleanFix:after{
    display:block;
    clear:both;
    content:""
  }
  .reply-input{
    width: 100%;
    height: 50px;
    background-color: white;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-top: 5px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .reply-input input{
    width: 80%;
    height: 40px;
    font-size: 1.3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .reply-input button {
        font-size: 1.3rem;
    padding: 3px 5px;
    background-color: #2196f3;
    color: white;
    border-radius: 3px;
  }
</style>
