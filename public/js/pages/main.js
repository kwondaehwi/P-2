export default function main() {
    document.title = "Main";
    const header = document.getElementById("#header");
    const menu = makeButton(header, "menu", "div");
    const main = makeButton(header, "main", "div");
    const login = makeButton(header, "login", "div");
}

function makeButton (root, title, tag) {
    const button = document.createElement(tag);
    button.innerText = title;
    root.appendChild(button);
}