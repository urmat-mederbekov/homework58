function hideSplashScreen() {
    let noScroll = document.querySelector(".page-splash");
    noScroll.classList.remove("page-splash");
}
function showSplashScreen() {
    let noScroll = document.querySelector("#page-splash");
    noScroll.classList.add("page-splash");
}
function createPostElement(post) {
    document.getElementsByClassName("posts")[0].append(post);
}
function createPostObject() {
    let content = document.querySelector('[name=post]').value;
    if (content == undefined || content.trim().length == 0)
        return;
    let postElement  = document.createElement('p');
    postElement.innerHTML = content;
    return postElement;
}
function createCommentObject() {
    let userLink = document.createElement('a');
    document.createAttribute("class");
    userLink.setAttribute("href", "#");
    userLink.setAttribute("class", "muted");
    userLink.innerHTML = "username";
    let pTag = document.createElement('p');
    let content = document.querySelector('[name=comment]').value;
    pTag.innerHTML = content;
    let comBlock = document.createElement('div');
    comBlock.append(userLink);
    comBlock.append(pTag);
    return comBlock;
}
function createCommentElement(comment) {
    comment.setAttribute("class", "py-2 pl-3");
    return comment;
}
function addCommentElement(commentElemet) {
    document.getElementsByClassName("comments")[0].append(commentElemet);
}