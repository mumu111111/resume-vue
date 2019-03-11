Vue.component('app-aside',{
    props: ['logoutVisible'],
    template:`
     
<div id="topNavBar" class="topNavBar">
    <div class="topNavBar-inner clearfix">
        <a href="#" class="logo" alt="logo">
            <span class="rs">RESUME</span><span class="card">Editor</span>
        </a>
        <nav class="menu">
            <ul class="clearfix">
                <li><a class="button" href="javascript: void(0);"  @click="$emit('clickedit')">编辑</a></li>
            
                <li><a class="button" href="javascript: void(0);"  @click="$emit('clicksave')">保存</a></li>
                <li><a class="button" href="javascript: void(0);" @click="$emit('onshare')">分享</a></li>
                <li>
                    <a class="button" href="javascript: void(0);" @click="$emit('print')">打印</a>

                </li>
                <li>
                    <a class="button" @click="$emit('onlogout')" v-show="logoutVisible">登出</a>

                </li>
            </ul>
        </nav>
    </div>
</div>



    `
})
