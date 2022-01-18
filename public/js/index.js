import Main from "./pages/main.js";

const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    const routes = [
        {path: "/", view: Main},
    ];

    const pageMatches = routes.map((route) => {
        return {
          route: route, 
          isMatch: route.path === location.pathname,
        };
      });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    
    if(!match){
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    
    match.route.view();

};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches('.data-link')) {
            e.preventDefault();
            navigateTo("/" + e.target.id);
        }
    });
    router();
});

window.addEventListener("popstate", () => {
    router();
});