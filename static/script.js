function hideSplashScreen() {
    let noScroll = document.querySelector(".page-splash");
    noScroll.classList.remove("page-splash");
}
function showSplashScreen() {
    let noScroll = document.querySelector("#page-splash");
    noScroll.classList.add("page-splash");
}
class User{
    constructor(name, email, password, isAuthrorized){
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAuthrorized = isAuthrorized;
    }
}
class Post {
    constructor(id, image, description, likes, dataTime, user) {
        this.id = id;
        this.image = image;
        this.description = description;
        this.likes = likes;
        this.dataTime = dataTime;
        this.user = user;
    }
}
class Comment{
    constructor(id, text, dataTime, post){
        this.text = text;
        this.dataTime = dataTime;
        this.post = post;  
    }
}
function createPostObject2(id, image, description, likes, dataTime, user) {
    return new Post(id, image, description, likes, dataTime, user);
}
function createPostElement2(post) {
    let postElement = document.createElement('div');
    postElement.className = "card my-3";
    postElement.innerHTML = 
    '<!-- image block start -->\n' +
    '<div>\n' +
        '<button class="imageBut">\n' +
            '<img class="d-block w-100" src="' + post.image + '" alt="Post image">\n' +
        '</button>' +
   '</div>' +
    '<!-- image block end -->' +
    '<div class="px-4 py-3">' +
        
        '<!-- post reactions block start -->' +
        '<!-- <div class="d-flex justify-content-around"> -->' +
        '<div class="justify-content-around">' +
        
        '<button class="button heartBut">' +
            '<span class="h1 mx-2 heart text-danger">' +
                '<i class="fas fa-heart"></i>' +
            '</span>' +
        '</button>' +
        '<button class="commentBut button">' +
             '<span class="h1 mx-2 muted">' +
                '<i class="far fa-comment"></i>' +
            '</span>' +
        '</button>' +
        '<span class="mx-auto"></span>' +
        '<button class="button">' +
            '<span class="h1 mx-2 muted">' +
                '<i class="far fa-bookmark bookmarkBut"></i>' +
            '</span>' +
        '</button>' +
        '<!-- post reactions block end -->' +
        '<hr>' +
        '<!-- post section start -->' +
        '<div class="posts">' +
        '<p>' + post.description + '</p>' +
          
    '</div>' +
        '<!-- post section end -->' +
        '<hr>' +
        '<!-- comments section start -->' +
        '<div class="comments">' +
            '<div class="py-2 pl-3">' +
                '<a href="#" class="muted">someusername</a>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>' +
            '</div>' +
        '</div>' +
        '<input type="text" size="20" name="comment"/>' +
        '<!-- comments section end -->' +
    '</div>';
    return postElement;
}
function addPostElement(postElement) {
    document.getElementsByClassName("col col-lg-7 posts-container")[0].append(postElement);
}
function createCommentObject(order) {
    let userLink = document.createElement('a');
    userLink.setAttribute("href", "#");
    userLink.setAttribute("class", "muted");
    userLink.innerHTML = "username";
    let pTag = document.createElement('p');
    let content = document.querySelectorAll('[name=comment]')[order].value;
    if (content == undefined || content.trim().length == 0)
        return;
    pTag.innerHTML = content;
    let comBlock = document.createElement('div');
    comBlock.append(userLink);
    comBlock.append(pTag);
    return comBlock;
}
function createCommentElement(comment) {
    if (comment == undefined)
        return;
    comment.className = "py-2 pl-3";
    return comment;
}
function addCommentElement(commentElemet, order) {
    if (commentElemet == undefined)
        return;
    document.getElementsByClassName("comments")[order].append(commentElemet);
}
function commentButton() {
    for (let i = 0; i < document.getElementsByClassName("commentBut").length; i++) {
        const commentBut = document.getElementsByClassName("commentBut")[i];
        commentBut.addEventListener("click", function(){
            addCommentElement(createCommentElement(createCommentObject(i)), i);  
        });
    }
}
commentButton();
function likebutton() {
    for (let i = 0; i < document.getElementsByClassName("heart").length; i++) {
        let heartBut = document.getElementsByClassName("heartBut")[i];
        let heart = document.getElementsByClassName("heart")[i];
        let heartI = document.getElementsByClassName("fa-heart")[i];
        heartBut.addEventListener("click", function(event){
            if (heart.classList.contains("text-danger")) {
                unlike(heart, heartI);
            } else {
                like(heart, heartI);
            }
        });
    }
}
likebutton();
function unlike(heart, heartI) {
    heart.classList.remove("text-danger");
    heart.classList.add("muted");
    heartI.classList.remove("fas");
    heartI.classList.add("far");
}
function like(heart, heartI) {
    heart.classList.add("text-danger");
    heart.classList.remove("muted");
    heartI.classList.remove("far");
    heartI.classList.add("fas");
}
function imageButton() {
    for (let i = 0; i < document.getElementsByClassName("imageBut").length; i++) {
        const imageBut = document.getElementsByClassName("imageBut")[i];
        imageBut.addEventListener("dblclick", function(event) {
            let heart = document.getElementsByClassName("heart")[i];
            let heartI = document.getElementsByClassName("fa-heart")[i];
            if (heart.classList.contains("text-danger")) {
                unlike(heart, heartI);
            } else {
                like(heart, heartI);
            }
        });
    }
}
imageButton();
function bookmarkButton(){
    for (let i = 0; i < document.getElementsByClassName("bookmark").length; i++) {
        const bookmarkElement = document.getElementsByClassName("bookmark")[i];
        const bookmarkBut = document.getElementsByClassName("bookmarkBut")[i];
        bookmarkBut.addEventListener("click", function(){
            if (bookmarkElement.classList.contains("far")) {
                bookmark(bookmarkElement);
            } else {
                unbookmark(bookmarkElement);
            }
        });
    }  
}
bookmarkButton();
function bookmark(bookmark) {
    bookmark.classList.remove("far");
    bookmark.classList.add("fas");
}
function unbookmark(bookmark) {
    bookmark.classList.remove("fas");
    bookmark.classList.add("far");
}