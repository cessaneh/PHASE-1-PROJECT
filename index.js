document.addEventListener("DOMContentLoaded", function() {
    const dogImgsContainer = document.getElementById("dog-images");
    const dogbtn = document.getElementById("new-dogbtn");
    const commentInput = document.getElementById("comment-input");
    const commentBtn = document.getElementById("comment-btn");
    const commentsContainer = document.getElementById("comments-container");
    
    function addDogImages() {
        fetch("https://random.dog/woof.json")
            .then(res => res.json())
            .then(data => {
                let dogUrl = data.url;
                let imgElement = document.createElement("img");
                imgElement.src = dogUrl;
                dogImgsContainer.appendChild(imgElement);
            })
            .catch(error => console.error("error dog image:", error));
    }
    dogbtn.addEventListener("click", addDogImages);

    // commentBtn.addEventListener("click", function() {
    //     const commentText = commentInput.value.trim();
    //     if (commentText !== "") {
            
    //         const commentElement = document.createElement("p");
    //         commentElement.textContent = commentText;
            
    //         commentsContainer.appendChild(commentElement);
        
    //         commentInput.value = "";
    //     }
    // });
    // addDogImages(); 
});
