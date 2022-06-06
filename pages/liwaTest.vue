<script setup lang="ts">
	/*********************************************************
	prog name: 測試網頁, author: James Lin, date: 2020/04/19
	主功能: 

	**********************************************************/
	import { ref, onMounted } from "vue"
	import { useShowmode } from "../composables/use-showmode"
	import jwtDecode from "jwt-decode"
	import { useFetch, createFetch } from "@vueuse/core"
	// import { QuillEditor } from '@vueup/vue-quill'
	// import '@vueup/vue-quill/dist/vue-quill.snow.css';	

	const btnTest2 = ref(null)

	const content = ref({})


	definePageMeta({
	  title: 'LiwaSite 測試頁',
	})	
</script>

<template>
	<div>
		<h1>測試網頁</h1>
	</div>
	<div>
		<div 
			class="w-12 h-8 bg-slate-500 text-white text-center pt-1 ml-4 mt-2 cursor-pointer"
			@click="getResult1()"
			>測試</div>
		<div class="w-12 h-8 bg-purple-200 invisible" @click="" ref="btnTest2">btnTest2</div>	
	</div>
	<!-- <QuillEditor theme="snow" /> -->
</template>

<style>
	
</style>