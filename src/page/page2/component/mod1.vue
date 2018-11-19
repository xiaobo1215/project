
<template src='../tpl/mod1.html'></template>
<script>
import '../style/mod1.less';
let util = require('../../../lib/util.js')
console.log(util.timeago(Date.now()))
let _ = require('lodash');
var array = require('lodash/array');
export default {
 	name: 'mod1',
 	data () {
	    return {
            mod: 'mod100000555555'
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