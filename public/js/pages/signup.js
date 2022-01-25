export default function signup(){
    const $ = document;
    const root = $.getElementById('root');

    root.innerHTML = `
    <div>
        <form>
            <input type="text" id="signupId" placeholder="id"/><br>
            <input type="password" id="signupPwd" placeholder="password"/><br>
            <input type="password" id="signupPwdCk" placeholder="passwordCheck"/><br>
            <div id="signup-button">회원가입<div/>
        </form>
    <div/>`

    const signupButton = $.querySelector("#signup-button");
    signupButton.addEventListener("click",()=>{
        const signupId = $.querySelector("#signupId");
        const password = $.querySelector("#signupPwd");
        const passwordCheck = $.querySelector("#signupPwdCk");
        if(password.value !== passwordCheck.value){
            alert("password doesnt match!");
        }else{
            axios({
                method:"POST",
                url: 'http://localhost:3000/api/signup',
                data:{
                    "email": signupId.value,
                    "password": password.value
                }
            }).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        }
    })
}