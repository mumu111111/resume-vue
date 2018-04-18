Vue.component('signUp',{
    data(){
        return {
            signUp:{
                email: '',
                password: '',
                confirmpsd: ''
            }
        }
    },
    template: `
    <div  class="login-container" v-cloak>
    
    
    <h2>Sign Up</h2>
    <form class="login" @submit.prevent="onSignUp">
        <label for="email">Email address</label>
        <input placeholder="用户名均为邮箱地址" type="text" id="email2" v-model="signUp.email">

        <label for="psd">Password</label>
        <input type="password" id="psd21" v-model="signUp.password">
        <label for="psd">confirm Password</label>
        <input type="password" id="psd22" v-model="signUp.confirmpsd">

        <button type="submit" class="btn">sign up</button>
    </form>
    <div class="signup">
        <a href="#" @click="$emit('gotologin')">or Sign in</a>
    </div>
    

</div>
    `,
    methods:{
        onSignUp(e){ 
            const user = new AV.User() //创建用户
            user.setUsername(this.signUp.email)
            user.setPassword(this.signUp.password)
            user.setPassword(this.signUp.confirmpsd)
            user.setEmail(this.signUp.email)
            user.signUp().then((user)=>{
                alert('注册成功')
                user= user.toJSON()
                // this.currentUser.objectId= user.objectId
                // this.currentUser.email= user.email
                // this.signUpVisible= false
                this.$emit('signsuccess', user)
           
                },function(error){
                    alert(error.rawMessage)//返回错误描述
                })
        },
        onClickLogin(e){
            this.$emit('goToLogin')
        }
    }
})

/* <button type="button" @click="$emit('close')">关闭</button> */
