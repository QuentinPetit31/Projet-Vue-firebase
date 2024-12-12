import { createRouter, createWebHistory } from "vue-router";
import {auth} from "../firebase";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/details/:id",
            name: "Details",
            component: () => import("../components/DetailsPage.vue"),
            props:true
        },
        {
            path: "/exoRouter",
            name: "ExoRouter",
            component: () => import("../components/LessonRouterView.vue"),
            props:true
        },
        {
            path: "/tp1",
            name: "Tp1",
            component: () => import("../views/tp/Tp.vue")
        },
        {
            path: "/tp2",
            name: "Tp2",
            component: () => import("../views/tp/Tp2.vue")
        },
        {
            path: "/tp3",
            name: "Tp3",
            component: () => import("../views/tp/Tp3.vue")
        },
        {
            path: "/tp4",
            name: "Tp4",
            component: () => import("../views/tp/Tp4.vue")
        },
        {
            path: "/tp5",
            name: "Tp5",
            component: () => import("../views/tp/Tp5.vue")
        },
        {
            path: "/tp6",
            name: "Tp6",
            component: () => import("../views/tp/Tp6.vue")
        },
        {
            path: "/exo",
            name: "Exo",
            component: () => import("../views/exo/Exo.vue")
        },
        {
            path: "/exo2",
            name: "Exo2",
            component: () => import("../views/exo/Exo2.vue")
        },
        {
            path: "/exoProbs",
            name: "ExoProbs",
            component: () => import("../views/exo/ExoProbs.vue")
        },
        {
            path: "/exoRouteur",
            name: "ExoRouteur",
            component: () => import("../components/LessonRouterView.vue")
        },
        {
            path: "/exoFetche",
            name: "ExoFetche",
            component: () => import("../views/exo/ExoFetche.vue")
        },
        {
            path: "/exoEmit",
            name: "ExoEmit",
            component: () => import("../views/exo/ExoEmit.vue")
        },
        {
            path: "/exoEmit2",
            name: "ExoEmit2",
            component: () => import("../views/exo/ExoEmit2.vue")
        },
        {
            path: "/register",
            name: "Register",
            component: () => import("../views/exo/RegisterPageView.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/exo/LoginPageView.vue")
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("../views/exo/DashboardView.vue"),
            meta: { requiresAuth: true }, // Route protégée
        },
        {
            path: "/lesson-vfor",
            name: "lesson-vfor",
            component: () => import("../views/lesson/LessonListRendering.vue")
        },
        {
            path: "/lesson-watchers",
            name: "lesson-watchers",
            component: () => import("../views/lesson/LessonWatchers.vue")
        },
        {
            path: "/lesson-text-interpolation",
            name: "lesson-text-interpolation",
            component: () => import("../views/lesson/LessonTextInterpolation.vue")
        },
        {
            path: "/lesson-methods",
            name: "lesson-methods",
            component: () => import("../views/lesson/LessonMethods.vue")
        },
        {
            path: "/lesson-vhtml",
            name: "lesson-vhtml",
            component: () => import("../views/lesson/LessonInlineTemplatingView.vue")
        },
        {
            path: "/lesson-vbind",
            name: "lesson-vbind",
            component: () => import("../views/lesson/LessonAttributeBindingView.vue")
        },
        {
            path: "/lesson-von",
            name: "lesson-von",
            component: () => import("../views/lesson/LessonEventBindingView.vue")
        },
        {
            path: "/lesson-vmodel",
            name: "lesson-vmodel",
            component: () => import("../views/lesson/LessonTwoWayBinding.vue")
        },
        {
            path: "/lesson-dynamic-style",
            name: "lesson-dynamic-style",
            component: () => import("../views/lesson/LessonDynamicStyling.vue")
        },
        {
            path: "/lesson-computed",
            name: "lesson-computed",
            component: () => import("../views/lesson/LessonComputedProperties.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
    ]
});

// Vérification avant chaque navigation
router.beforeEach((to, from, next) => {
    const currentUser = auth.currentUser;

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!currentUser) {
            next({ name: "Login" }); // Redirection vers la page de connexion si non authentifié
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;