alert(hideSplashScreen());
// alert(showSplashScreen());

function hideSplashScreen() {
    let noScroll = document.querySelector(".page-splash");
    noScroll.classList.remove("page-splash");
}
function showSplashScreen() {
    let noScroll = document.querySelector("#page-splash");
    noScroll.classList.add("page-splash");
}

let postElement  = document.createElement('p');
postElement.innerHTML = "some post text";

alert(createPostElement(postElement));
function createPostElement(post) {
    document.getElementsByClassName("posts")[0].append(post);
    console.log(post);
}

let userLink = document.createElement('a');
document.createAttribute("class");
userLink.setAttribute("href", "#");
userLink.setAttribute("class", "muted");
userLink.innerHTML = "username";
let pTag = document.createElement('p');
let pText = "some text";
pTag.innerHTML = pText;
let comBlock = document.createElement('div');

alert(createCommentElement(comBlock));
function createCommentElement(comment) {
    comment.setAttribute("class", "py-2 pl-3");
    comment.append(userLink);
    comment.append(pTag);
    document.getElementsByClassName("comments")[0].append(comBlock);
    console.log(userLink);
    console.log(pTag);
    console.log(comment);
}