<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import { useStorage, useTitle, useTimestamp, useFetch } from "@vueuse/core"
	import jwtDecode from "jwt-decode"

	const progName = ref('表單庫')
	const detailFlg = ref(false)
	const detailKey = ref('')

	const isChecked = ref(true)
	const isBookmark = ref(true)

	const toggleChecked = () => {
		isChecked.value = !isChecked.value
	}

	const toggleBookmark = () => {
		isBookmark.value = !isBookmark.value
	}

	const chkJWT = async () => {
		const oldJWT = useStorage('liwaJWT')
		const timestamp = useTimestamp() // 現在時間
		let arrOldJWT = jwtDecode(oldJWT.value)
		const jwtTime = ref(arrOldJWT.exp)	// JWT 到期時間

		if (timestamp.value > jwtTime.value) {
			let url = `http://localhost:8102/sys_haveJWT.php?token=${oldJWT.value}`;
			const data = await useFetch(url, {method: 'GET'}).get().json()
			window.localStorage.setItem('liwaJWT', data.data.value.token)
		} 
	}

    onMounted(() => {
    	let compName = window.sessionStorage.getItem('liwaSiteName')
    	const title = useTitle(compName+`- 表單庫`)
    	// liwaJWT 已存在, 先檢查liwaJWT是否過期, 若過期, 先重設, 並回傳新的JWT
    	chkJWT()
    })	

 	definePageMeta({
	  title: `Liwasite雲系統`,
	})   
</script>

<template>
<banner
	:progname="progName"
	:detailflg="detailFlg"
	:detailkey="detailKey"
></banner>	
<div class="w-12 h-8 bg-yellow-300 text-center pt-1 cursor-pointer" @click="chkJWT">測試</div>

</template>
