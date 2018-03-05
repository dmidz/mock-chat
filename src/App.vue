<template lang="pug">
	#app.f-col
		page-chat
		//router-view
</template>

<script>
	import PageChat from '@/pages/PageChat'

	export default {
		name: 'App'
		, components: { PageChat }
	}
</script>

<style>
* {	box-sizing:border-box}
html, body {	height:100%}
body {
	font-family:'Trebuchet MS', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing:antialiased;
	-moz-osx-font-smoothing:grayscale;
	text-align:center;
	color:#2c3e50;
	margin:0;
	background-color:#f1f0e7;
	font-size:1em;
}
input, textarea, select {
	font-size:1em;
	font-family:'Trebuchet MS', Helvetica, Arial, sans-serif;
}
.f-col {
	display:flex;
	flex-direction:column;
	justify-content:stretch;
}
.f-row {
	display:flex;
	flex-direction:row;
	justify-content:stretch;
}


#app {
	/*padding:20px 20px 35px 20px;*/
	height:100%;
}
button {
	cursor:pointer;
}

</style>
