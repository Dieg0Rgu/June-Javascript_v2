function getHomePage(){
    return `<h1>Welcome to my Main Page</h1><p>Stupid</p>`;
}
function getAboutPage(){
    return `<h1>About Danik Michell</h1><p>ASS and TITS</p>`;
}
function getLoremPage(){
    return `<h1>Lorem</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore saepe amet iusto modi ipsam quod maiores omnis debitis impedit. 
    Ullam molestiae illo repellat fugit aut voluptatum consectetur culpa laborum fuga.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Earum eum quaerat cupiditate facere porro atque nam delectus totam maiores numquam dolores iste, 
    laborum consequatur enim corrupti ad officia eaque at.`;
}

const routes = {
    "#/" : getHomePage,
    "#/about" : getAboutPage,
    "#/lorem" : getLoremPage
};

function handleRoute(){
    const hash = window.location.hash || "#/";
    const content = routes[hash] ? routes[hash]() : `<h1>AAAAAA</h1>`;
    document.getElementById('app').innerHTML = content;
};

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () =>{
    handleRoute();
    setupEventListeners();
});

const state = {
    users : [],
    currentPage : getHomePage,
    isLoading: false
};

function updateState(newState){
    Object.assign(state, newState);
    renderContent();
}

function renderContent(){
    const appDiv = document.getElementById('app');
    if (state.isLoading){
        appDiv.innerHTML = `<div>...</div>`;
        return;
    }
    appDiv.innerHTML = routes[window.location.hash || '#/']();
}

function setupEventListeners(){
    const appDiv = document.getElementById("app");
    appDiv.addEventListener('click', function(event){
        if (event.target.matches('.button-submit')){
            handleSubmit(event);
        }
        if(event.target.matches('.toggle-menu')){
            toggleMenu(event);
        }
    });
}

function handleSubmit(event){
    event.preventDefault();
    updateState({isLoading : true});
}

function toggleMenu(event){
    document.querySelector('.menu').classList.toggle('active');
}

const socket = new WebSocket('ws://your-server-url');
socket.addEventListener('message', function(event){
     const data = JSON.parse(event.data);
    updateState({ ...data, isLoading: false });
});

function sendMessage(message){
    if (socket.readyState === WebSocket.OPEN){
        socket.send(JSON.stringify(message));
    }
}
