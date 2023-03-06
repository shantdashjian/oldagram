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

const nameEl = document.getElementById("name-el")
const locationEl = document.getElementById("location-el")
const usernameEl = document.getElementById("username-el")
const postHeaderAvatarEl = document.getElementById("post-header-avatar-el")
const postImgEl = document.getElementById("post-img-el")
const commentTextEl = document.getElementById("comment-text-el")
const likesNumberEl = document.getElementById("likes-number-el")

nameEl.textContent = posts[0].name
locationEl.textContent = posts[0].location
usernameEl.textContent = posts[0].username
postHeaderAvatarEl.setAttribute("src", posts[0].avatar);
postImgEl.setAttribute("src", posts[0].post);
commentTextEl.textContent = posts[0].comment
likesNumberEl.textContent = posts[0].likes
