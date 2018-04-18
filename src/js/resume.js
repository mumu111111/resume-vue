Vue.component('resume',{
    data(){
        return{}
    },
    props: ['mode','displayResume'],
    
    template: `
    <div class="resume">
		<div  class="userCard" id="siteAbout">
        <div class="text clearfix">
            <h1>
                <editable-span :displayed="mode==='preview'" :value="displayResume.name" @edit="$emit('on-edit','name', $event)">姓名</editable-span :displayed="mode==='preview'">
            </h1>
            <hr>
            <ul class="personalText">
                <li>
                    <a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhiweiqia-"></use>
                    </svg>
                    </a>
                    <editable-span :displayed="mode==='preview'" :value="displayResume.jobTitle" @edit="$emit('on-edit','jobTitle', $event)">前端</editable-span :displayed="mode==='preview'">
                </li>
                <li>
                    <a>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-ren"></use>
                    </svg>
                    </a>
                    <editable-span :displayed="mode==='preview'" :value="displayResume.birthday" @edit="$emit('on-edit','birthday', $event)">21</editable-span :displayed="mode==='preview'">
                </li>
                <li>
                    <a>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xingbie"></use>
                </svg>
                    </a>
                    <editable-span :displayed="mode==='preview'" :value="displayResume.gender" @edit="$emit('on-edit','gender', $event)">nx</editable-span :displayed="mode==='preview'">
                </li>
                <li>
                    <a>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youxiang"></use>
                </svg>
                    </a>
                    <editable-span :displayed="mode==='preview'" :value="displayResume.email" @edit="$emit('on-edit','email', $event)">hjhjhjhjhjhjhjh</editable-span :displayed="mode==='preview'">
                </li>
                <li>
                    <a>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouji"></use>
                </svg>
                    </a>
                    <editable-span :displayed="mode==='preview'" :value="displayResume.phone" @edit="$emit('on-edit','phone', $event)">908989978787878</editable-span :displayed="mode==='preview'">
                </li>
            </ul>
        </div>
    </div>
    <div class="skillCard" id="siteAbout">
    <h2>技能</h2>
    <ul>
        <li class="skill" v-for="skill,index in displayResume.skills">
            <footer class="media">
                <h3>
                    <editable-span :displayed="mode==='preview'" class="name" :value="skill.name" @edit="$emit('on-edit','skills['+index+'].name', $event)">呵呵呵呵呵</editable-span :displayed="mode==='preview'">
                </h3>
            </footer>
            <div class="pictureAnaext clearfix">
                <div class="text">
                    <p>
                        <editable-span :displayed="mode==='preview'" :value="skill.description" @edit="$emit('on-edit','skills['+index+'].description', $event)">借鉴借鉴</editable-span :displayed="mode==='preview'">
                    </p>
                </div>
                <!-- 删除按钮  样式肯定得自己写  定位 -->
                <span  v-if="index>=4 && mode==='edit'" @click="removeSkill(index)">
                    <svg class="icon remove" aria-hidden="true">
                        <use xlink:href="#icon-ai67"></use>
                    </svg>
                </span>
            </div>
        </li>
    </ul>
    <div class="add-wrapper" v-if="mode==='edit'">
        <span class="add" @click="addSkill">添加</span>
    </div>
</div>

<div class="projectCard" id="siteAbout">
<h2>作品</h2>
<ul>
    <li v-for="project,index in displayResume.projects">
        <footer class="media">
            <h3>
                <editable-span :displayed="mode==='preview'" :value="project.name" @edit="$emit('on-edit','projects['+index+'].name', $event)"></editable-span :displayed="mode==='preview'">
            </h3>
            <span class="link">
        <editable-span :displayed="mode==='preview'" :value="project.link" @edit="$emit('on-edit','projects['+index+'].link', $event)"></editable-span :displayed="mode==='preview'">
</span>
        </footer>
        <div class="text">
            <div class="end">
                <p class="keywords">
                        <editable-span :displayed="mode==='preview'" :value="project.keywords" @edit="$emit('on-edit','projects['+index+'].keywords', $event)"></editable-span :displayed="mode==='preview'">
                </p>
            </div>
            <p>
                <editable-span :displayed="mode==='preview'" :value="project.description" @edit="$emit('on-edit','projects['+index+'].description', $event)"></editable-span>
            </p>
        </div>
        <!-- 删除按钮  样式  定位 -->
        <span  @click="removeProject(index)" v-if="index>=2 && mode==='edit'">
            <svg class="icon remove" aria-hidden="true">
                <use xlink:href="#icon-ai67"></use>
            </svg>
        </span>
    </li>
</ul>
<div v-if="mode==='edit'" class="add-wrapper">
    <span @click="addProject" class="add">添加</span>
</div>
</div>
</div>
    `,
    methods:{
         addSkill(){
             console.log(this.displayResume)
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



