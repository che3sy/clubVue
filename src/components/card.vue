<script setup>
	import { useRouter } from "vue-router";
	const state = defineProps({
		person: Object,
		index: Number,
	});

	const router = useRouter();

	const redirect = () => {
		router.push({ path: `/member/${state.index}` });
	};
</script>

<template>
	<div
		@click="redirect"
		class="sdw w-100 mt-5 h-32 rounded-3xl bg-[#EBDBB2]">
		<h3 class="pl-6 pt-5 text-3xl font-medium text-[#4C2215]"
			>{{ person.name }}
		</h3>
		<h5 class="pl-6 pt-3 text-xl font-normal text-[#683A2C]">
			{{ person.grade }}th grade
			<span class="text-[#BDAE93]"> | </span>
			{{ person.email }}
		</h5>
	</div>
</template>

<style scoped>
	.sdw {
		box-shadow:
			0px 4px 4px 0px rgba(0, 0, 0, 0.25),
			0px -1px 0px 0px #eddfba;
		transition: box-shadow 0.2s cubic-bezier(0, 0, 0.2, 1);
	}
	.sdw:hover {
		box-shadow:
			0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
			0px -1px 4px 0px rgba(246, 238, 219, 0.75) inset;
	}
	.w-100 {
		width: 500px;
	}
</style>
