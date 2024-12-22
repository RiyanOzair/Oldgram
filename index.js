const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainEl = document.getElementById("main")
let html = ""
for (let i = 0; i < posts.length; i++) {
    html += `
        <section>
                    <img class="avatar" src="${posts[i].avatar}" alt="Avatar of ${posts[i].name}">
                    <div class="avatar-info">
                        <h2 id="name">${posts[i].name}</h2>
                        <p id="location"> ${posts[i].location}</p>
                    </div>
                    <img class="post" src="${posts[i].post}" alt="A picture of the famous ${posts[i].name}">
                    <ul class="icons">
                        <li><img class="click-like" id="size" src="images/icon-heart.png" alt="" >
                        </li>
                        <li><img id="size" src="images/icon-comment.png" alt=""></li>
                        <li><img id="size" src="images/icon-dm.png" alt=""></li>
                    </ul>
                    <p id="likes">${posts[i].likes} likes</p>
                    <p id="comment"><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
        </section>
        `
}

mainEl.innerHTML = html


