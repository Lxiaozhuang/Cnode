<template>
  <div>
      <div class="inner" v-if="!this.$store.state.userInfo.userId">
    <div class="use">
        <span>token</span>
        <input type="password" v-model="userToken">
    </div>
    <div class="status">
        <button @click="login">登录</button>
    </div>
  </div>
  <div class="content" v-if="this.$store.state.userInfo.userId">
    <input class="logout" title="退出" type="button" value="退出" @click="logout">
    <div class="fistContent">
    <div class="avator">
        <img :title="userContent.loginname" :src="userContent.avatar_url">
    </div>
    <div class="userdetail">
        <h3>{{userContent.loginname}}</h3>
        <p><i class="fa fa-github fa-2x"></i>&nbsp;用户名：{{userContent.githubUsername}}</p>
        <p>
        <span>创建时间：{{formatDate(userContent.create_at)}}</span>
        &nbsp;&nbsp;
        <span>积分：{{userContent.score}}</span>
        </p>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return {
         userToken: '',
         userContent:'',
      }
  },
  methods:{
      login(){
          if(this.userToken===''){
            alert(111)
            return false
          }
        let _this = this;
          axios.post('/api/v1/accesstoken', {
            accesstoken: _this.userToken
          }).then((response) =>{
              let user = {
                loginname: response.data.loginname,
                avatar_url: response.data.avatar_url,
                userId: response.data.id,
                token: _this.userToken
            }
              window.localStorage.setItem('data',JSON.stringify(user))
              _this.$store.dispatch('setUserInfo', user)
              _this.$store.state.userInfo=user
              axios.get('https://cnodejs.org/api/v1/user/' + _this.$store.state.userInfo.loginname).then((response) => {
              _this.userContent = response.data.data
              
            })
          }).catch(()=>{
              alert('token码不正确')
          })
      },
      logout(){
          localStorage.clear()
          window.location.reload()
      },
      formatDate(date){
            if(date){
                return date.split('T').join(' ').split('.')[0]
            }
           
        }
  },
    beforeCreate(){
        console.log(this.$store.state)
        if(localStorage.getItem("data")){
            this.$store.state.userInfo=JSON.parse(localStorage.data)
            axios.get('https://cnodejs.org/api/v1/user/' + this.$store.state.userInfo.loginname).then((response) => {
              this.$store.state.userInfo = response.data.data
            })
        }
    }
}
</script>

<style>
    .inner{
        width: 500px;
        padding: 10px;
        border-radius: 0 0 3px 3px ;
        margin: 100px auto
    }
    .use{
        width: 100%;
        height: 50px;
        margin-bottom:10px;
    }
    .use span{
        display: inline-block;
        width: 75px;
        float: left;
        text-align: right;
        padding-right: 20px;
        font:16px/40px "微软雅黑"
    }
    .use input{
        width: 380px;
        height: 40px;
        border: 1px solid #000;
        float: right;
        border-radius: 3px;
        margin-right: 10px
    }
    .use input:focus{
        border: 1px solid rgb(16, 133, 243)
    }
    .status{
        text-align: center
    }
    .status button{
        width: 100px;
        height: 50px;
        background: rgb(247, 246, 246);
        font:18px/50px "微软雅黑";
        border:none;
        margin: 0 10px;
        border-radius: 5px
    }  
    .status button:focus{
        background: rgb(9, 143, 206);
        color:#fff;
        outline: none
    } 
    .content{
    position: relative;
  }
  .logout{
    position: absolute;
    right: 20px;
    top:10px;
    border: none;
    cursor: pointer;
    color: #fff;
    background: #41B883;
    border-radius: 2px;
    padding: 2px 5px;
    outline: none;
  }
  .logout:hover{
    background-color: #006741;
  }
  .fistContent{
    display: flex;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-top: 20px;
    padding-left: 20px;
  }
  .avator{
    border: 1px solid #ccc;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 15px;
  }
  .avator img{
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .userdetail{
    padding: 0 20px;
  }
  .userdetail h3{
    margin-top: 0;
    margin-bottom: 10px;
  }
  .userdetail p{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
</style>
