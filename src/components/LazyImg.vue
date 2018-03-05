<template lang="pug">
	transition(name="fade")
		img.lazy(v-show="show" v-bind:class="{show:show}")

</template>

<script>

	export default {
		name: 'lazy-img'
		, props:{
			src:null
		}
		, data : function(){
			return {
				show:false
			};
		}
		,mounted : function(){
			const me = this;
			if( this.src ){
				this.$el.addEventListener('load', function(){
					me.show = true;
				});

				this.$el.setAttribute('src', this.src );
			}
		}
		, methods : {
		}
		, computed : {
		}
	}
</script>

<style lang="scss">
	.lazy {
		visibility:hidden;
	}
	.lazy.show {	visibility:visible}
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s
	}
	.fade-enter-to {
		opacity:1;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0
	}

</style>
