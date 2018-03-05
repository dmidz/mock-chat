<template lang="pug">
	#page-chat.f-col.page
		.f-row.rooms
			chat(title="Chat A" user="A" v-bind:conversation="conversation" v-on:new_message="onNewMessage")
			//.gutter
			chat(title="Chat B" user="B" v-bind:conversation="conversation" v-on:new_message="onNewMessage" theme="galaxy")
</template>

<script>
	import Chat from '@/components/Chat'

	const nl = "\n";

	export default {
		name: 'page-chat'
		, components : { Chat }
		, data(){
			return {
			}
		}
		, computed:{
			conversation(){
				return this.$store.state.conversation;
			}
		}
		, methods:{
			onNewMessage( message, emitter ){
				this.$store.commit('addMessage', {message:message, datetime:new Date(), author:emitter});
			}
		}
	}
</script>

<style lang="scss">
.f-row .chat {	flex:1}
#page-chat {
	flex:1;
}
.rooms {
	flex:1;
}
.rooms > .gutter {
	width:20px;
}
</style>
