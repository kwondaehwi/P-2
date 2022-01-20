export default function login(){
    const $ = document;
    const root = $.getElementById('root');

    root.innerHTML = `
    <div>
        <form class="form">
            <input id="userId" placeholder="userId"/><br>
            <input id="userPwd" placeholder="userPwd"/><br>
            <div id="loginButton">로그인<div/>
            <div id="signup" data-link>회원가입<div/>
        </form>
    <div/>`

    const loginId = $.getElementById('userId');
    const loginPwd = $.getElementById('userPwd');
    const loginButton = $.getElementById('loginButton');

    function loginBtnClick(){
        console.log(loginId.value, loginPwd.value);

    }
    loginButton.addEventListener("click", loginBtnClick);
}

