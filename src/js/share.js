Vue.component('share',{
    props:['shareLink'],
    template: `
    <div class="share"  v-cloak>
    <button type="button" @click="$emit('close')">
        <svg class="icon close" aria-hidden="true">
            <use xlink:href="#icon-close-b"></use>
        </svg>
    </button>
    <h2>
        请复制链接，在新窗口打开
    </h2>
    <div class='link'>
        <textarea readonly>{{shareLink}}</textarea>
    </div>
</div>
    `
})