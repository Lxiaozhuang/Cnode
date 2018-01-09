<template>
  <div class="inner">
    <!-- <div class="use">
        <span>用户名</span>
        <input type="text" v-model="userInfo">
    </div>
    <div class="use">
        <span>密码</span>
        <input type="password" v-model="passwordInfor">
    </div> -->
    <div class="use">
        <span>token</span>
        <input type="password" v-model="userToken">
    </div>
    <div class="status">
        <button @click="login">登录</button>
        <button>注册</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return {
         userInfo:'',
         passwordInfor:'' ,
         userToken: '',
         data:{},
      }
  },
  methods:{
      login(){
          if(this.userToken===''){
            alert(111)
          }
        //     this.data={
        //         userInfo:this.userInfo,
        //         passwordInfor:this.passwordInfor
        //     }
        //     let data = JSON.stringify(this.data)  
        //     window.localStorage.setItem('data',data)
          
        //   console.log(this.userInfo,this.passwordInfor)
        //   console.log(this.data)
        console.log(this.userToken)
          let _this = this;
          axios.post('/api/v1/accesstoken ', {
            accesstoken: _this.userToken
          }).then((response) =>{
              console.log(response)
          })
      }
  },
//   computed:{
//         data:{
//              userInfo: this.userInfo,
//              passwordInfor:this.passwordInfor
//           }
          
//   }
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
</style>
