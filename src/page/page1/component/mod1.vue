
<template src='../tpl/mod1.html'></template>
<script>
import '../style/mod1.less';
let util = require('../../../lib/util.js')
console.log(util.timeago(Date.now()))
export default {
 	name: 'mod1',
 	data () {
	    return {
            mod: 'mod1'
	    }
  	},
 	mounted(){
    },
 	methods: {

 	},
 	components: {
 		
 	}
}
</script>