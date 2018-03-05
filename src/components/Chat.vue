<template lang="pug">
	.f-col.chat(v-bind:class="theme?theme:''")
		h2 Chat User [{{user}}]
		.f-col.box-content
			.conversation(ref="conversation")
				transition-group(name="new_msg" appear tag="div")
					.f-row.box-message(v-for="(item, index) in conversation" v-bind:class="{penpal:item.author!=user}" v-bind:key="index")
						.gutter
							.avatar {{item.author}}
						.f-col.content
							.message(v-show="1") {{item.message}}
							.metering {{metering_format.format(item.datetime)}}
						.gutter

			form.f-row.box-type(v-on:submit.prevent="onSubmitMessage")
				input(type="text" placeholder="reply" name="message" ref="message")
				button.send(type="submit") {{'>'}}
			.bgd_img(v-if="theme")
				lazy-img(v-bind:src="themeBgdImg")

</template>

<script>

	import LazyImg from '@/components/LazyImg'

	export default {
		name: 'chat'
		, components:{ LazyImg }
		, props: {
			title:{
				default: 'Chat'
			}
			, user:{
				default:'A'
			}
			,conversation:{
				default:[]
			}
			, metering_format : {
				default(){
					return new Intl.DateTimeFormat("en-US", {
						hour: "numeric", minute: "numeric"
						,timeZoneName: "short"
						// , second: "numeric",
						// , hour12:true
					});
				}
			}
			, bgd_img:{
				default:null
			}
			, theme:{
				default:null
			}
		}
		, data(){
			return {
			}
		}
		, computed:{
			themeBgdImg(){
				switch(this.theme){
					case 'galaxy':
						return require('@/assets/img/ps60_web.jpg' );
						break;
				}
			}
		}
		, methods:{
			onSubmitMessage(){
				if(!this.$refs.message.value.length)	return;
				this.$emit('new_message', this.$refs.message.value, this.user );
				this.$refs.message.value = '';
			}
		}
		, watch:{
			conversation(){
				const me = this;
				this.$nextTick(function(){
					me.$refs.conversation.scrollTop = me.$refs.conversation.scrollHeight;
				});
			}
		}
	}
</script>

<style lang="scss">

	$color-primary: #1ed497;

.chat {
	padding:20px 20px 35px 20px;
	position:relative;

	h2 {
		font-weight:normal;
		margin-top:0;
		text-shadow:0 0 5px rgba(0,0,0,0.5);
	}
	.box-content {
		flex:1;
	}
	.conversation {
		flex:1;
		background-color:#fff;
		border-radius:7px 7px 0 0;
		border:1px solid rgba(0,0,0,0.2);
		padding:1em;
		overflow-y:auto;

		.box-message {
			align-items:flex-end;
			margin-bottom:0.5em;

			.gutter {
				display:flex;
				flex-direction:row;
				padding:0.5em;
			}

			.avatar {
				width:3em;
				height:3em;
				line-height:2.8em;
				border:1px solid #ddd;
				border-radius:50%;
				margin-bottom:0.25em;
				background-color:#fff;
			}

			.content {
				flex:1 1;
				align-items:flex-start;

				.message {
					text-align:left;
					background-color:#f9f9f9;
					padding:0.75em;
					line-height:1.35em;
					border-radius:5px;
					max-width:70%;
					border:1px solid #eee;
					white-space: pre-wrap;
				}
				.metering {
					font-size:0.8em;
					color:#bbb;
					padding:4px 20px;
					font-style:italic;
				}
			}
		}

		.box-message.penpal {
			flex-direction:row-reverse;

			.avatar {
				margin-right:0;
				background-image:none;
			}

			.content {
				align-items:flex-end;
				.message {
					background-color:$color-primary;
					color:#fff;
					text-align:right;
					border:none;
				}
			}
		}
	}
	.box-type {

		input[name="message"] {
			flex:1;
			padding:1em;
			font-size:1.1em;
			border:0;
			border-bottom:1px solid #ccc;

			border-left:5px solid $color-primary;
			color:#367d65;

		}
		input[name="message"]::placeholder {
			color:#aaa;
		}
		input[name="message"]:focus {
			outline:none;
			background-color:#f9ffd2;
		}
		button.send {
			font-size:1.5em;
			/*font-weight:bold;*/
			padding:0.5em 0.75em;
			background-color:$color-primary;
			color:#fff;
			border:none;
			border-radius:0 0 10px 0;
			outline:none;
		}
		button.send:hover, button.send:focus {
			background-color:aqua;
		}
	}

	.bgd_img {
		position:absolute;
		z-index:-999;
		left:0;
		right:0;
		bottom:0;
		top:0;
		overflow:hidden;

		img {
			width:100%;
			height:auto;
			min-width:1475px;
		}
	}

}

.new_msg-enter-active, .new_msg-leave-active {
	transition: all 0.35s;
}
.new_msg-enter, .new_msg-leave-to {
	opacity: 0;
}

.chat.galaxy {
	h2 {
		color:#fff;
		text-shadow:0 0 10px #fff;
	}
	.conversation {
		background-color:rgba(255,255,255,0.85);
		.box-message .metering {
			color:#888;
		}
	}
}

</style>
