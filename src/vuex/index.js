
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

const debug = process.env.NODE_ENV !== 'production';

const nl = "\n";

export default new Vuex.Store( {
	strict: debug
	, state : {
		conversation:[
			{
				author:'B'
				, message:'Hello,'
					+nl+'Could you give me some more info about your interstellar trips please ?'
				, datetime:new Date()
			}
			, {
				author:'A'
				, message:'Hello,'
					+nl+'Sure ! Currently we have a great to Saturn paradise, all-inclusive, let me show you some nice pics of last visitors :)'
				, datetime:new Date()
			}
		]
	}
	, actions:{
	}
	, getters : {
	}
	, mutations : {
		addMessage( state, message ){
			state.conversation.push( message );
		}
	}
	, modules: {
	}
} )