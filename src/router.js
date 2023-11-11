import { createRouter, createWebHistory } from "vue-router";

import trudMain from "@/components/templates/pages/main/trud-main.vue";
import trudRoom from "@/components/templates/pages/room/trud-room.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: trudMain,
            meta: {
                title: "TRUD"
            },
        },

        {
            path: "/room",
            name: "room",
            component: trudRoom,
            meta: {
                title: "TRUD"
            },
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, left: 0}
        } else {
            return { x: 0, y: 0 }
        }
    }
})
