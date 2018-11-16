
<style lang="less">
	.mod2 {
		height: 50px;
		background: sandybrown;
	}
</style>
<template>
	<div class="mod2">
		{{mod}}
	</div>
</template>
<script>

export default {
 	name: 'mod2',
 	data () {
	    return {
            mod: 'mod2'
	    }
  	},
 	mounted(){
        // this.superLogin()
    },
 	methods: {

 	},
 	components: {
 		
 	}
}
</script>