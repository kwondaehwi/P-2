export default function login(){
    const $ = document;
    const root = $.getElementById('root');

    root.innerHTML = `
    <div>
        <form method="POST" action="/signin">
            <input type="text" name="id" placeholder="userId"/><br>
            <input type="password" name="pw" placeholder="userPwd"/><br>
            <input type="submit"/>
            <div id="signup" data-link>회원가입<div/>
        </form>
    <div/>`
}

