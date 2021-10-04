import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/views/MainPage";

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage,
    },

    {
        path: "/news/",
        name: "NewsPageView",
        component: () => import("../views/NewsPageView.vue"),
        children: [
            {
                path: '',
                name: 'NewsPage',
                component: () => import("../views/NewsPage.vue"),
            },
            {
                path: ":id",
                name: "InnerNewsPage",
                component: () => import("../views/InnerNewsPage.vue"),
            },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../components/NotFound.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
