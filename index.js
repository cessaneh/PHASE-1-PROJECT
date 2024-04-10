document.addEventListener ("DOMContentLoaded", function() {
    const dogImgsContainer = document.getElementById("dog-images")
    const dogbtn = document.getElementById("new-dogbtn");
    const likebtns = document.getElementById("like-btn");
    const commentbtns = document.getElementById("comment-btn");
    function addDogImages () {
        fetch ("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            let dogUrl = data.url;
            let imgElement = document.createElement("img")
            imgElement.src = dogUrl;
            dogImgsContainer.appendChild(imgElement)
        })
        .catch(error => console.error("error dog image:",error))
    }

    dogbtn.addEventListener ("click", addDogImages)
    dogbtn.addEventListener ("mouseenter",{
        handleEvent: (e) => {e.target.style.backgroundColor ="pink"}
    })
    likebtns.addEventListener("click",addlike)
    commentbtns.addEventListener("click",addComment)
    addDogImages()

}) 
