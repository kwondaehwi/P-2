export default function signup(){
    const $ = document;
    const root = $.getElementById('root');

    root.innerHTML = `
    <div>
        <form class="form">
            <input id="userId" placeholder="userId"/><br>
            <input id="userPwd" placeholder="userPwd"/><br>
            <div>회원가입<div/>
        </form>
    <div/>`
}