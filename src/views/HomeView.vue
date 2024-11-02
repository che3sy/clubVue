<script setup>
	import { onMounted, ref, nextTick } from "vue";
	import Card from "@/components/card.vue";
	import { gsap } from "gsap";
	import { data } from "@/components/useData.js";

	const timeline = gsap.timeline();

	const state = ref({
		people: [],
	});

	onMounted(async () => {
		try {
			timeline.from(".bg-colors", {
				y: 1000,
				stagger: 0.4,
				duration: 2.5,
				ease: "bounce.out",
			});

			timeline.from(".title", {
				y: -200,
				duration: 1,
				ease: "expo.out",
			});

			const response = await data();
			state.value.people = response.people.value;

			await nextTick();

			timeline.from(".card", {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				duration: 1,
				ease: "back.out(2)",
			});
		} catch (error) {
			console.error("Error fetching people", error);
		}
	});
</script>

<template>
	<div class="fs grid min-h-screen w-full grid-cols-16 gap-0">
		<div class="col-span-10 col-start-4 grid h-full grid-cols-subgrid gap-0">
			<div class="absolute inset-0 flex h-full flex-col items-center">
				<h1
					class="title z-10 m-1 flex justify-center text-7xl font-normal italic text-[#3c3836]">
					COMPUTER SCIENCE CLUB
				</h1>
				<h2
					class="title z-10 m-3 flex justify-center text-5xl font-normal italic text-[#282828]">
					Members
				</h2>
				<div>
					<Card
						v-for="(person, index) in state.people"
						:key="index"
						:person="person"
						:index="index"
						class="card relative z-20" />
				</div>
			</div>
			<div class="bg-colors col-start-1 col-end-3 h-full bg-color1"> </div>
			<div class="bg-colors col-start-3 col-end-5 h-full bg-color2"> </div>
			<div class="bg-colors col-start-5 col-end-7 h-full bg-color3"> </div>
			<div class="bg-colors col-start-7 col-end-9 h-full bg-color4"> </div>
			<div class="bg-colors col-start-9 col-end-11 h-full bg-color5"> </div>
		</div>
	</div>
</template>

<style scoped>
	.fs {
		height: 275vh;
	}
	.bg-color1 {
		box-shadow:
			0px -4px 4px 0px rgba(168, 214, 201, 0.25) inset,
			4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}
	.bg-color2 {
		box-shadow:
			0px -4px 4px 0px rgba(255, 255, 255, 0.25) inset,
			0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}
	.bg-color3 {
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}
	.bg-color4 {
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}
	.bg-color5 {
		box-shadow:
			0px -4px 4px 0px rgba(118, 91, 71, 0.15) inset,
			-4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}
</style>
