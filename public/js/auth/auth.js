import { navigateTo, router } from "../index.js";

const $ = document;

export default function authentication(user){
    console.log(user.data);
    if(user.data === "members"){
        navigateTo("/");
        router();
        const userButton = $.querySelector("#login");
        const userMenu = $.querySelector("#usermenu");
        userButton.innerHTML = '<div id="member">member</div>';
        userMenu.innerHTML = `
        <div>
            <div id="like" data-link>좋아요 목록</div>
            <div id="chat" data-link>채팅 목록</div>
            <div id="region" data-link>지역 설정</div>
            <div id="logout">로그아웃</div>
        </div>`;
        userMenu.style.display = 'none';

        userButton.addEventListener("click", ()=>{
            if(userMenu.style.display === 'none'){
                userMenu.style.display = 'block';
            }else{
                userMenu.style.display = 'none';
            }
        })

        const logoutButton = $.querySelector("#logout");
        logoutButton.addEventListener("click", ()=>{
            axios.get('/logout');
            console.log("logout");
        })

    }
}