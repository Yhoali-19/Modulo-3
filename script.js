document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    // Cargar comentarios almacenados
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.forEach(comment => addCommentToDOM(comment.text, comment.likes, comment.timestamp));

    // Agregar comentario
    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const timestamp = new Date().toLocaleString(); // Fecha y hora local
            addCommentToDOM(commentText, 0, timestamp);
            saveComment(commentText, timestamp);
            commentInput.value = "";
        }
    });

    function addCommentToDOM(text, likes, timestamp) {
        const commentElement = document.createElement("li");
        commentElement.classList.add("comment");

        const commentText = document.createElement("span");
        commentText.textContent = text;

        const commentTimestamp = document.createElement("small");
        commentTimestamp.textContent = `Publicado el: ${timestamp}`;
        commentTimestamp.style.display = "block"; 
        commentTimestamp.style.fontSize = "0.8em";
        commentTimestamp.style.color = "#555";

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("comment-actions");

        const likeButton = document.createElement("button");
        likeButton.textContent = `👍 ${likes}`;
        likeButton.addEventListener("click", function () {
            likes++;
            likeButton.textContent = `👍 ${likes}`;
            updateLikes(text, likes);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            commentList.removeChild(commentElement);
            deleteComment(text);
        });

        actionsDiv.appendChild(likeButton);
        actionsDiv.appendChild(deleteButton);

        commentElement.appendChild(commentText);
        commentElement.appendChild(commentTimestamp);
        commentElement.appendChild(actionsDiv);
        commentList.appendChild(commentElement);
    }

    function saveComment(text, timestamp) {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({ text: text, likes: 0, timestamp: timestamp });
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function deleteComment(text) {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments = comments.filter(comment => comment.text !== text);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function updateLikes(text, newLikes) {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        const index = comments.findIndex(comment => comment.text === text);
        if (index !== -1) {
            comments[index].likes = newLikes;
            localStorage.setItem("comments", JSON.stringify(comments));
        }
    }
});

