// Wait for the DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});

// Fetch users from the API and populate the select dropdown
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userSelect = document.getElementById('users');
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.username;
                userSelect.appendChild(option);
            });
            // Set default selected user to the first user
            userSelect.value = users[0].id;
            fetchUserData();
        });
}

// Fetch user data and display it in the profile area
function fetchUserData() {
    const userId = document.getElementById('users').value;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const profileArea = document.getElementById('profile-area');
            const userProfileImage = `./images/twitter-clone-profile.png`; // Path to the local profile image
            profileArea.innerHTML = `
                <img src="${userProfileImage}" alt="Profile image" class="profile-pic">
                <h2 id="name">${user.name}</h2>
                <br/>
                <p id="username">@${user.username}</p>
                <br/>
                <p id="company">${user.company.name}</p>
                <br/>
                <p id="work">${user.company.catchPhrase}</p>
                <br/>
                <p class="location"><ion-icon class="locationIcon" name="location"></ion-icon>&nbsp<span id="location">${user.address.city}, ${user.address.street}</span></p>
                
            `;
            fetchPosts(user.name, userProfileImage); // Fetch posts after displaying user data
        });
}

// Fetch posts of the selected user and display them
function fetchPosts(userName, userProfileImage) {
    const userId = document.getElementById('users').value;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = ''; // Clear previous posts
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = `
                    <img src="${userProfileImage}" class="profile-image" alt="Profile Image" onclick="fetchComments(${post.id})">
                    <div class="post-content" onclick="fetchComments(${post.id})">
                        <div class="userIcons"><p class="post-user">${userName}</p><ion-icon class="checkIcon" name="checkmark-outline"></ion-icon><ion-icon class="twitter-Icon" name="logo-twitter"></ion-icon></div>
                        <br/>
                        <div class="post-body">${post.body}</div>
                        <div class="post-icons"></div>
                        <div class="otherIcons">
                            <p class="otherIcon"><ion-icon name="chatbubble-ellipses-outline"></ion-icon> <span>200</span></p>
                            <p class="otherIcon"><ion-icon name="git-compare-outline"></ion-icon><span>200</span></p>
                            <p class="otherIcon"><ion-icon class="heart-outline" name="heart-sharp"></ion-icon><span></span>200</p>
            
                        </div>
                    </div>
                `;
                postsContainer.appendChild(postDiv);
            });

            // Fetch comments for the first post by default
            if (posts.length > 0) {
                fetchComments(posts[0].id);
            }
        });
}

// Fetch comments for the selected post and display them
function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById('comments-container');
            commentsContainer.innerHTML = ''; // Clear previous comments
            // Display the post ID on top of the comments container
            const postIdHeader = document.createElement('p');
            postIdHeader.style.marginLeft = "1rem";
            postIdHeader.style.fontWeight = "bold";
            postIdHeader.textContent = ` Post  ${postId} Comments`;
            commentsContainer.appendChild(postIdHeader);
            comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                // Use the same profile image for comments as a placeholder
                const commentProfileImage = `./images/twitter-clone-profile.png`; // Placeholder image
                commentDiv.innerHTML = `
                    <img src="${commentProfileImage}" class="profile-image" alt="Profile Image">
                    <div>
                        <div class="userIcons icon-on-comment"><p class="postTitle">sdyuvrisdof</p><ion-icon class="checkIcon" name="checkmark-outline"></ion-icon><ion-icon class="twitter-Icon" name="logo-twitter"></ion-icon></div>
                        <div class="comment-body">${comment.body}</div>
                        <div class="otherIcons">
                            <p class="otherIcon"><ion-icon name="chatbubble-ellipses-outline"></ion-icon> <span>0</span></p>
                            <p class="otherIcon"><ion-icon name="git-compare-outline"></ion-icon><span>0</span></p>
                            <p class="otherIcon"><ion-icon class="heart-outline" name="heart-sharp"></ion-icon><span></span>0</p>
                        </div>
                    </div>
                    
                `;
                commentsContainer.appendChild(commentDiv);
            });
        });
}
