document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("nav a")){
        return;
    }

    urlRoute(e);
});

const urlRoutes = {
    404: {
        template: "/spa.2/templates/404.html",  
        title: "",
        description: ""
    },
    "/": {
        template: "/spa.2/templates/index.html",  
        title: "",
        description: ""
    },
    "/about": {
        template: "/spa.2/templates/about.html",  
        title: "",
        description: ""
    },
    "/contact": {
        template: "/spa.2/templates/contact.html", 
        title: "",
        description: ""
    }
};

const urlRoute = (event) => {
event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    let location = window.location.pathname;
    if (location.length === 0) {
        location = "/";
    }
    const route = urlRoutes[location] || urlRoutes[404]
    const html = await fetch(route.template).then((response) =>
    response.text());
    document.getElementById("content").innerHTML = html;
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();