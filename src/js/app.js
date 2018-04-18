let app= new Vue({
    el: '#app',
    data:{
        editingName: false,
        loginVisible: false,
        logoutVisible: false,
        signUpVisible:false,
        shareVisible: false,
        currentUser:{
            objectId: undefined,
            email: ''
        },
        previewUser:{//预览用户
            objectId: undefined
        },
        previewResume:{},
        resume:{
            name: '姓名',
            gender: '女',
            birthday: '1990年1月',
            jobTitle: '前端工程师',
            phone: '13266666666',
            email: 'example@example.com',
            skills: [
                {name: '请填写技能名称', description: '请填写技能描述'},
                {name: '请填写技能名称', description: '请填写技能描述'},
                {name: '请填写技能名称', description: '请填写技能描述'},
                {name: '请填写技能名称', description: '请填写技能描述'},
            ],
            projects: [
                {name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'},
                {name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'}
            ]
        },
        shareLink: '暂时还没有分享链接，请编辑保存后再来',
        mode: 'edit' //preview
    },
    computed:{
        displayResume(){
            return this.mode==='preview'? this.previewResume : this.resume  
        }
    },
    watch:{
        'currentUser.objectId': function(newValue, oldValue){
            console.log(oldValue)
            console.log(newValue)//新的 id
            if(newValue){
                console.log('当前的this.resume')
                
                console.log(this.resume)
                // this.saveResume()
                this.getResume(this.currentUser).then(resume =>{ 
                   
                        this.resume= resume
                        console.log("被获取新id的resume"+this.resume)
                    
                    
                })
            }//loginSuccess()后， 监听 id 变动 ，自动获取resume
        }
    },
    
    methods: {
        
        onEdit(key,value){//修改的value放到resume中
            //key  =  skills[${index}].name = name值（字符串），并不是name
            console.log(6)

            console.log(key) 
            console.log(value)
            let regex= /\[(\d+)\]/g 
            console.log('key')
            console.log(key)
            
            
            key = key.replace(regex, (match, number) => `.${number}`)
            
            console.log(key)
            //key = skills.0.name
           let  keys= key.split('.') //[skills, 0, name]

            console.log(keys)
            let result= this.resume
            console.log(result)
            for(let i=0; i< keys.length; i++){
                if(i=== keys.length-1){ //一般最后一个i的value就是key
                    result[keys[i]]= value //为value找到对应的key
                    console.log(result)
                    console.log('将新的值传给 resume数据表中')
                }else{
                    result= result[keys[i]]
                    console.log(result)
                }
            }

        },
        hasLogin(){
            return !!this.currentUser.objectId
            this.logoutVisible= true
        },
        onShare(){

            if(this.hasLogin()){
                this.shareVisible = true
            }else{
                alert('请先登录')
            }
        },
        onLogin(user){
            this.currentUser.objectId = user.objectId
            this.currentUser.email= user.email
            this.loginVisible = false
            window.location.reload()
            console.log('登录成功')
        },
        onSignUp(user){
            this.currentUser.objectId= user.objectId
            this.currentUser.email= user.email
            this.signUpVisible= false

        },
        onLogOut(){
            AV.User.logOut()
            alert('注销成功')
            window.location.reload()//重新加载
        },
        
        onClickSave(){
            let currentUser = AV.User.current()
            console.log(1)
            if(!currentUser){
                this.loginVisible= true
            }else{
                this.saveResume()
                console.log(2)
            }
        },
        saveResume(){
            console.log(3)
            let {objectId} = AV.User.current().toJSON()
            console.log('当前用户的id')
            console.log({objectId})
            let user= AV.Object.createWithoutData('User', objectId)
            console.log(4)
            console.log('当有登录账户时， 将当前的resume 作为 resume 存入')
            console.log(this.resume)
            user.set('resume', this.resume)

            user.save().then(()=>{
                alert('保存成功')
            },()=>{
                alert('保存失败')
            })
        },
        getResume(user){//通过id获取用户保存过的resume数据
            var query= new AV.Query('User') //user 数据库
            console.log(user.objectId)
            return query.get(user.objectId)
        
                .then((user)=>{
                console.dir(user.toJSON().resume)
                    let resume= user.toJSON().resume
                    console.log('数据表中的id的user'+resume)
                    // Object.assign(this.resume, resume)
                    return resume  //return ,自己处理resume
                }, (error)=>{
                })
        },
        print(){
            window.print()
        }
    }
})
//获取当前用户
let currentUser= AV.User.current()
console.log(app.resume)
app.resume= app.resume

console.log(currentUser)
// let user= AV.Object.createWithoutData('User', objectId)
if(currentUser){
    app.currentUser= currentUser.toJSON()
    app.shareLink= location.origin + location.pathname + '?user_Id='+ app.currentUser.objectId
    // app.saveResume()
    let user= AV.Object.createWithoutData('User', app.currentUser.objectId)
    console.log(4)
    console.log('当有登录账户时， 将当前的resume 作为 resume 存入')
    console.log(this.resume)
    user.set('resume', this.resume)

    // user.save()

    app.getResume(app.currentUser).then(resume=>{
        app.resume= resume
    }) 
}
//预览用户
let search = location.search
let regex = /user_Id=([^&]+)/
let matches = search.match(regex)
let userId
if(matches){
    userId= matches[1]
    app.mode= 'preview'
    app.getResume({objectId: userId}).then(resume=>{
        app.previewResume= resume
    })
}







