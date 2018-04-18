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
                <li><a class="button"  @click="$emit('clicksave')">保存</a></li>
                <li><a class="button" @click="$emit('onshare')">分享</a></li>
                <li>
                    <a class="button" @click="$emit('print')">打印</a>

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

// <aside>
//     <div class="upper">
//         <ul class="actions">
//             <li><button class="button" @click="$emit('clicksave')">保存</button></li>
//             <li><button class="button" @click="$emit('onshare')">分享</button></li>
//             <li><button class="button" @click="$emit('print')">打印</button></li>
//         </ul>
//     </div>
//     <div class="down">
//         <button class="button" @click="$emit('onlogout')" v-show="logoutVisible">登出</button>
//     </div>
// </aside>