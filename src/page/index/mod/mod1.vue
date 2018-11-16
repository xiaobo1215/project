
<style lang="less">
	.mod1 {
		height: 50px;
		background: salmon;
		background: url('../../../img/pic_03.jpg') no-repeat center center ;
		background-size: cover;
	}
</style>
<template>
	<div class="mod1">
		{{mod}}
		<p><router-link to="/mod2">Go to mod2</router-link></p>
		<p><a href="/page1.html">page1.html</a></p>
		<div>
			<img src="../../../img/ranking_img.jpg" alt="">
		</div>
	</div>
</template>
<script>

export default {
 	name: 'mod1',
 	data () {
	    return {
            mod: 'mod1'
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