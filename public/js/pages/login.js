export default function login(){
    const $ = document;
    const root = $.getElementById('root');

    root.innerHTML = `
    <div>
        <form>
            <input type="text" id="email" placeholder="userId"/><br>
            <input type="password" id="pw" placeholder="userPwd"/><br>
            <div id="login-button">로그인</div>
            <div id="signup" data-link>회원가입<div/>
        </form>
    <div/>`

    const loginButton = $.querySelector('#login-button');
    loginButton.addEventListener("click", ()=>{
        const email = $.querySelector('#email');
        const password = $.querySelector('#pw');
        axios({
            method: "POST",
            url: 'http://localhost:3000/api/signin',
            data:{
                "email": email.value,
                "password": password.value
            }
        }).then((res)=>{
            console.log(res.data);
        }).catch(error=>{
            console.log(error);
        });
    })
}

