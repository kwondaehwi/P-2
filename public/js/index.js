import Main from "./main.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Like from "./pages/like.js";
import Chat from "./pages/chat.js";
import Region from "./pages/region.js";

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

export async function router() {
    const routes = [
        { path: "/", view: Main },
        { path: "/login", view: Login },
        { path: "/signup", view: Signup },
        { path: "/like", view: Like },
        { path: "/chat", view: Chat },
        { path: "/region", view: Region },
    ];

    const pageMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    match.route.view();

}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo("/" + e.target.id);
        }
    });
    router();
});

window.addEventListener("popstate", () => {
    router();
});