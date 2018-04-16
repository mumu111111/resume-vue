Vue.component('resume',{
    props: ['mode','displayResume'],
    data(){
        return{

        }
    },
    created(){
        console.log(this.displayResume)
    },
    template: `
    <div class="resume">
    <section class="profile">
        <h1>
            <editable-span :displayed="mode==='preview'" :value="displayResume.name" @edit="onEdit('name', $event)"></editable-span :displayed="mode==='preview'">
        </h1>
        <p>应聘职位：
            <editable-span :displayed="mode==='preview'" :value="displayResume.jobTitle" @edit="onEdit('jobTitle', $event)"></editable-span :displayed="mode==='preview'">
        </p>
        <p class="userprofile">
            <editable-span :displayed="mode==='preview'" :value="displayResume.birthday" @edit="onEdit('birthday', $event)"></editable-span :displayed="mode==='preview'">
            |
            <editable-span :displayed="mode==='preview'" :value="displayResume.gender" @edit="onEdit('gender', $event)"></editable-span :displayed="mode==='preview'">
            |
            <editable-span :displayed="mode==='preview'" :value="displayResume.email" @edit="onEdit('email', $event)"></editable-span :displayed="mode==='preview'">
            |
            <editable-span :displayed="mode==='preview'" :value="displayResume.phone" @edit="onEdit('phone', $event)"></editable-span :displayed="mode==='preview'">
        </p>
    </section>
    <section class="skills">
        <h2>技能</h2>
        <ul>
            <li v-for="skill,index in displayResume.skills">
                <editable-span :displayed="mode==='preview'" class="name" :value="skill.name" @edit="onEdit('skills['+index+'].name', $event)"></editable-span :displayed="mode==='preview'">
                <div class="description">
                    <editable-span :displayed="mode==='preview'" :value="skill.description" @edit="onEdit('skills['+index+'].description', $event)"></editable-span :displayed="mode==='preview'">
                </div>
                <span class="remove" v-if="index>=4 && mode==='edit'" @click="removeSkill(index)">x</span>
            </li>
            <li v-if="mode==='edit'" class="add">
                <span  @click="addSkill">添加</span>
            </li>
        </ul>
    </section>
    <section class="projects">
        <h2>项目经历</h2>
        <ol>
            <li v-for="project,index in displayResume.projects">
                <header>
                    <div class="start">
                        <h3 class="name">
                            <editable-span :displayed="mode==='preview'" :value="project.name" @edit="onEdit('projects['+index+'].name', $event)"></editable-span :displayed="mode==='preview'">
                        </h3>
                        <span class="link">
                                <editable-span :displayed="mode==='preview'" :value="project.link" @edit="onEdit('projects['+index+'].link', $event)"></editable-span :displayed="mode==='preview'">
                        </span>
                    </div>
                    <div class="end">
                        <span class="keywords">
                                <editable-span :displayed="mode==='preview'" :value="project.keywords" @edit="onEdit('projects['+index+'].keywords', $event)"></editable-span :displayed="mode==='preview'">
                        </span>
                    </div>
                </header>
                <p class="description">
                    <editable-span :displayed="mode==='preview'" :value="project.description" @edit="onEdit('projects['+index+'].description', $event)"></editable-span>
                </p>
                <span class="remove" @click="removeProject(index)" v-if="index>=2 && mode==='edit'">x</span>
            </li>
            <li v-if="mode==='edit'" class="add">
                <span @click="addProject()">添加</span>
            </li>
        </ol>
    </section>
</div>

    `,
    methods:{
        
        onEdit(key,value){//修改的value放到resume中
            //key  =  skills[${index}].name = name值（字符串），并不是name
            let regex= /\[(\d+)\]/g 
            key = key.replace(regex, (match, number) => `.${number}`)
            console.log(key)
            //key = skills.0.name
           let  keys= key.split('.') //[skills, 0, name]

            console.log(keys)
            let result= this.displayResume
           
            console.log('result')
            console.log(result)
            
            for(let i=0; i< keys.length; i++){
                if(i=== keys.length-1){ //一般最后一个i的value就是key
                    result[keys[i]]= value //为value找到对应的key
                }else{
                    result= result[keys[i]]
                }
            }
        },
        addSkill(){
            this.displayResume.skills.push({name:'请填写技能名称',description:'请填写技能描述'})
        },
        removeSkill(index){
            this.displayResume.skills.splice(index, 1)//删除第index个
        },
        addProject(){
            this.displayResume.projects.push({name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'})
        },
        removeProject(index){
            this.displayResume.projects.splice(index, 1)
        },
    }
})