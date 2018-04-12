Vue.component('resume',{
    props: ['mode','displayResume'],
    data(){
        return{
            
        }
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
                <editable-span :displayed="mode==='preview'" class="name" :value="skill.name" @edit="onEdit('skills[${'+index+'}].name', $event)"></editable-span :displayed="mode==='preview'">
                <div class="description">
                    <editable-span :displayed="mode==='preview'" :value="skill.description" @edit="onEdit('skills[${'+index+'}].description', $event)"></editable-span :displayed="mode==='preview'">
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
                            <editable-span :displayed="mode==='preview'" :value="project.name" @edit="onEdit('projects[${'+index+'}].name', $event)"></editable-span :displayed="mode==='preview'">
                        </h3>
                        <span class="link">
                                <editable-span :displayed="mode==='preview'" :value="project.link" @edit="onEdit('projects[${'+index+'}].link', $event)"></editable-span :displayed="mode==='preview'">
                        </span>
                    </div>
                    <div class="end">
                        <span class="keywords">
                                <editable-span :displayed="mode==='preview'" :value="project.keywords" @edit="onEdit('projects[${'+index+'}].keywords', $event)"></editable-span :displayed="mode==='preview'">
                        </span>
                    </div>
                </header>
                <p class="description">
                    <editable-span :displayed="mode==='preview'" :value="project.description" @edit="onEdit('projects[${'+index+'}].description', $event)"></editable-span :displayed="mode==='preview'">
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
        addSkill(){
            this.resume.skills.push({name:'请填写技能名称',description:'请填写技能描述'})
        },
        removeSkill(index){
            this.resume.skills.splice(index, 1)//删除第index个
        },
        addProject(){
            this.resume.projects.push({name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'})
        },
        removeProject(index){
            this.resume.projects.splice(index, 1)
        },
    }
})