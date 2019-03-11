Vue.component('editable-span',{
    props: ['edit','value','displayed'],
    template: `
        <span class="editableSpan">
                <span v-show="!edit">{{value}}</span>
                
           

            <div v-show="edit">
                <el-input placeholder="请输入内容" :value="value" @input="triggerEdit" >
                <template slot="prepend">编辑</template>
                </el-input>
            </div>



        </span>
    `,
    data(){
        return {
            edit: false,
            value: ''
        }
    },
    methods: {
        triggerEdit(value){
            if (this.value) {
                this.value = value
              }
            this.$emit('edit', value)

        }
        
    }
})

// <div class="input-group mb-3" v-show="edit">
// <div class="input-group-prepend">
//     <span class="input-group-text">编辑内容</span>
// </div>
// <input type="text" v-bind:value="value" @input="triggerEdit">
// </div>

// <button @click="editing = !editing" v-if="!displayed">
// <svg class="icon" aria-hidden="true">
//     <use xlink:href="#icon-icon5"></use>
// </svg>
// </button>
/* <textarea rows="3" cols="40" v-show="editing" type="text" v-bind:value="value" @input="triggerEdit"></textarea> */

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