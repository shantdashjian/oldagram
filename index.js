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

let innerHTML = ''
posts.forEach((post) => {
    innerHTML += `
            <section class="post">
      <div class="post-header">
        <img class="post-header-avatar" alt="vangogh avatar" src="${post.avatar}">
        <div class="post-header-info">
          <h3>${post.name}</h3>
          <p class="location">${post.location}</p>
        </div>
      </div>
      <div class="post-content">
        <img class="post-img" alt="vangogh post" src="${post.post}">
        <div class="reactions">
          <div class="icons">
            <img class="icon" src="images/icon-heart.png" alt="heart icon">
            <img class="icon" src="images/icon-comment.png" alt="comment icon">
            <img class="icon" src="images/icon-dm.png" alt="dm icon">
          </div>
          <div class="likes">
            <p><span class="likes-number">${post.likes}</span> <span>likes</span></p>
          </div>
        </div>
      </div>
      <div class="comments">
        <div class="comment">
          <p><span class="username">${post.username}</span> <span id="comment-text-el" class="comment-text">${post.comment}</span>
          </p>
        </div>
      </div>
    </section>

    `
})

document.getElementById('posts').innerHTML = innerHTML
