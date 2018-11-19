
<template src='../tpl/mod1.html'></template>
<script>
import '../style/mod1.less';
let util = require('../../../lib/util.js')
let _ = require('lodash');
var array = require('lodash/array');
var fp = require('lodash/fp');
console.log(util.timeago(Date.now()))
export default {
 	name: 'mod1',
 	data () {
	    return {
            mod: 'mod1--899-123'
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