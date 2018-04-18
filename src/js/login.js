Vue.component('login',{
    data(){
        return {
            login:{
                email: '',
                password: ''
            }
        }
    },
    template:`
    <div  class="login-container" v-cloak>
        <h2>Sign In</h2>
        <form class="login" @submit.prevent="onLogin">
            <label for="email">Email address</label>
            <input type="text" id="email" v-model="login.email">

            <label for="psd">Password</label>
            <input type="password" id="psd" v-model="login.password">

            <button type="submit" class="btn">sign in</button>
        </form>
        <div class="signup">
            <a href="#" @click="$emit('gotosignup')">or Create an account</a>
        </div>
        

</div>

    `,
    methods:{
        
        onLogin(e){
            AV.User.logIn(this.login.email,this.login.password)
            .then((user)=>{

                user= user.toJSON()//序列化user
                console.log('登录用户'+user)
                // this.currentUser.objectId= user.objectId
                // //将数据库user的属性传给本地的currentUser中
                // this.currentUser.email= user.email
                // this.loginVisible= false
                // alert('登录成功')
                this.$emit('loginsuccess', user)
            },(error)=>{
                if(error.code=== 211){
                    alert('邮箱不存在')
                }else if(error.code=== 210){
                    alert('邮箱或密码不匹配')
                }
            })
        },
    }
})


// <form class="form" @submit.prevent="onLogin">
//         <h2>登录</h2>
//         <button type="button" @click="$emit('close')">关闭</button>
//         <div class="row">
//             <label>邮箱</label>
//             <input type="text" v-model="login.email">
//         </div>
//         <div class="row">
//             <label>密码</label>
//             <input type="password" v-model="login.password">
//         </div>
//         <div class="actions">
//             <button type="submit">提交</button>
//             <a href="#"  @click="$emit('gotosignup')">注册</a>
//         </div>
//     </form>