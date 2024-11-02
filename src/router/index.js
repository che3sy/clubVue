import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Member from "@/views/MemberView.vue";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/member/:id",
		component: Member,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
