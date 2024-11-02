<script setup>
	import { data } from "@/components/useData.js";
	import { onMounted } from "vue";
	import { useRoute } from "vue-router";
	import { ref } from "vue";
	import VanillaTilt from "vanilla-tilt";
	import { gsap } from "gsap";

	const target = ref(null);

	const route = useRoute();
	const peopleId = route.params.id;
	const person = ref(null);
	const timeline = gsap.timeline();

	onMounted(async () => {
		VanillaTilt.init(target.value, {
			max: 20,
			speed: 300,
			reset: false,
			max: 3,
		});

		timeline.from(".bg-colors", {
			y: 1000,
			stagger: 0.4,
			duration: 2.5,
			ease: "steps(5)",
		});

		timeline.from(".target", {
			opacity: 0,
			duration: 1,
			ease: "circ.out",
		});

		timeline.from(".ticket", {
			y: -100,
			duration: 1.5,
			opacity: 0,
			ease: "elastic.out(1,0.3)",
		});

		try {
			const response = await data();
			person.value = response.people.value[peopleId];
		} catch (error) {
			console.error("Error fetching person", error);
		}
	});
</script>

<template>
	<div class="grid min-h-screen grid-rows-5 gap-0 px-52">
		<div
			class="absolute inset-0 flex h-full flex-col items-center justify-center">
			<div
				data-tilt
				ref="target"
				class="target z-10 rounded-lg bg-[#ECE6C2] p-40">
				<div class="ticket">
					<div class="left">
						<div class="cuts">
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
						</div>

						<div class="number">No.{{ peopleId }}</div>
					</div>
					<div class="right">
						<div class="cuts">
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
							<div class="cut"></div>
						</div>

						<div class="content">
							<div class="content-left">99% OFF</div>

							<div class="content-right">
								<div class="top">PASS</div>
								<div class="mid">{{ person?.name }}</div>
								<div class="bottom">> CS CLUB <</div>
							</div>
						</div>
					</div>

					<div class="circles">
						<div class="circle"></div>
						<div class="circle bot"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-colors sdw row-span-1 h-full bg-[#4C2215]"></div>
		<div class="bg-colors sdw row-span-1 h-full bg-[#981D26]"></div>
		<div class="bg-colors sdw1 row-span-1 h-full bg-[#E03C30]"></div>
		<div class="bg-colors sdw row-span-1 h-full bg-[#E5A632]"></div>
		<div class="bg-colors sdw row-span-1 h-full bg-[#FABD2F]"></div>
	</div>
</template>

<style scoped>
	.target {
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	.sdw {
		box-shadow:
			8px 0px 4px 0px rgba(0, 0, 0, 0.25) inset,
			-8px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}

	.sdw1 {
		box-shadow:
			8px 0px 4px 0px rgba(0, 0, 0, 0.5) inset,
			-8px 0px 4px 0px rgba(0, 0, 0, 0.5) inset;
	}

	.p-40 {
		box-shadow:
			0px -8px 4px 0px rgba(255, 255, 255, 0.25) inset,
			0px 8px 4px 0px rgba(0, 0, 0, 0.25) inset;
	}
	.ticket {
		transform: translateZ(50px);
		width: 420px;
		height: 220px;
		background: #ecba73;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
	}
	.left {
		width: 100px;
		height: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right {
		width: 320px;
		height: 100%;
		background-image: linear-gradient(
			rgba(0, 0, 0, 0.7) 45%,
			rgba(255, 255, 255, 0) 0%
		);
		background-position: left;
		background-size: 2px 25px;
		background-repeat: repeat-y;
		position: relative;
	}
	.circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: hsla(51, 53%, 84%, 1);
	}

	.bot {
		box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.2);
	}
	.circles {
		position: absolute;
		width: fit-content;
		height: 260px;
		top: 50%;
		transform: translate(0, -50%);
		left: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
	}
	.cut {
		width: 16px;
		height: 16px;
		background: hsla(51, 53%, 84%, 1);
		border-radius: 50%;
	}
	.cuts {
		position: absolute;
		left: -8px;
		top: 10px;
		width: fit-content;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
	}
	.right .cuts {
		left: auto;
		right: -8px;
	}
	.number {
		width: 50px;
		height: 190px;
		border: 0.5mm solid rgb(92, 83, 54);
		border-radius: 1mm;
		margin-right: 10px;
		writing-mode: vertical-lr;
		text-align: center;
		line-height: 50px;
		font-size: 30px;
		font-family: dosis;
		letter-spacing: 3px;
		color: rgb(92, 83, 54);
	}
	.content {
		width: 270px;
		height: 190px;
		border: 0.5mm solid rgb(92, 83, 54);
		box-sizing: border-box;
		margin-left: 30px;
		margin-top: 15px;
		border-radius: 1mm;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content-left {
		width: fit-content;
		height: 100%;
		writing-mode: vertical-lr;
		font-family: dosis;
		font-size: 36px;
		font-weight: 700;
		color: rgb(92, 83, 54);
		text-align: center;
		letter-spacing: 4px;
		border-right: 0.5mm solid rgb(92, 83, 54);
		padding: 0 5px;
	}
	.content-right {
		flex-grow: 1;
		font-size: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: rgb(92, 83, 54);
	}
	.top {
		font-size: 80px;
		font-family: "IBM Plex Mono";
	}
	.mid {
		font-size: 22px;
		font-family: "IBM Plex Mono";
		font-weight: 500;
		border-top: 0.5mm solid rgb(92, 83, 54);
		border-bottom: 0.5mm solid rgb(92, 83, 54);
		margin-bottom: 10px;
	}
	.bottom {
		font-family: kalnia;
		font-size: 16px;
	}
</style>
