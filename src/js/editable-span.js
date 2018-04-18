Vue.component('editable-span',{
    props: ['value','displayed'],
    template: `
        <span class="editableSpan">
                <span v-show="!editing">{{value}}</span>
                <textarea rows="3" cols="40" v-show="editing" type="text" v-bind:value="value" @input="triggerEdit"></textarea>
                
                <button @click="editing = !editing" v-if="!displayed">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon5"></use>
                    </svg>
                </button>
        </span>
    `,
    data(){
        return {
            editing: false
        }
    },
    methods: {
        triggerEdit(e){
            this.$emit('edit', e.target.value)
        }
        
    }
})
                // <input v-show="editing" type="text" v-bind:value="value" @input="triggerEdit">

// Vue.component('editable-span',{
//     props: ['value','displayed'],
//     data(){
//         return {
//             editing: false
//         }
//     },
//     template: `
//         <span class="editableSpan">
//                 <span v-show="!editing">{{value}}</span>
//                 <input v-show="editing" type="text" :value="value" @input="triggerEdit">
//                 <button @click="editing = !editing" v-if="!displayed">edit</button>
//         </span>
//     `,
  
//     methods: {
//         triggerEdit(e){
//             console.log('5 修改input')
//             this.$emit('edit', e.target.value)
            
//         }
//     }
// })