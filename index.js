// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function fetchUsers() {
    
    let users = await fetch("https://jsonplaceholder.typicode.com/users"); //awaiting backend
    let userData = await users.json(); //this lets us receive the javascript we can actually use, i.e. converting backend to frontend
    userList = document.querySelector(".user-list");

    userList.innerHTML = userData.map((user) => userHTML(user)).join("");
}

fetchUsers();

function showUserPosts(id) {
    console.log
    window.location.href = `${window.location.origin}/user.html`;
    console,log(id)
}

function userHTML (user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id});">
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
</div>`;
}