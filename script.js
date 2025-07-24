const inp = document.getElementById("search");
const btn = document.querySelector(".sb");

function displayUser({avatar_url,name,followers,following,bio,public_repos,html_url}){
    if(!html_url){
        document.querySelector(".divDown").innerText = "This user does no exist";
        return;
    }
    if(!bio)
        bio = '';
    document.querySelector(".divDown").innerHTML = `
    <div class="div1">
        <img src=${avatar_url} alt="" id="img">
        <p class="name">${name}</p>
        <p>${bio}</p>
    </div>
    <div class="div2">
        <div class="div2-1">
            <div>
                <p>Followers</p>
                <p>${followers}</p>
            </div>
            <div>
                <p>Following</p>
                <p>${following}</p>
            </div>
            <div>
                <p>Repo</p>
                <p>${public_repos}</p>
            </div>
        </div>
        <a href=${html_url} target="_blank"><button class="btn">Visit Profile</button></a>
    </div>`;
}

async function fun(x) {
    const response = await fetch(`https://api.github.com/users/${x}`);
    const result = await response.json();
    displayUser(result);
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    fun(inp.value);
})

