/* 
Add the posts from newest to oldest(Newest post at the top).
    Display:Flex; Flex-direction:reverse;
The original post MUST be fixed on top of the page. Meaning when the user scrolls through the comments the original post
("Trying to decide a career path? Programming is the move. Change my mind.") will stay on top of the comments and will always be shown.
    position: Fixed;
The same goes for the creating a comment section. Make sure it is fixed on the bottom of the page and stays on top of the comments as 
the user scrolls.
    position: fixed;
Project must be pushed up to github
Turn in the github repository
*/


$('#submit').on('click', function() {
    let displayName = $('#userName').val();
    let commentInput = $('#commentInput').val();
    let i = $('.comment').length; // Get the current number of comments as the starting index

    if (displayName !== '' && commentInput !== '') {
        let newComment = `
            <div id="c${i}" class="comment">
                <div class="displayName">${displayName}</div>
                <div id="text${i}" class="commentText">${commentInput}</div>
                <div id="edit${i}" class="editButton">Edit</div>
                <div id="delete${i}" class="deleteButton">Delete</div>
                <div id="hide${i}" class="toggle noDisplay">
                    <input type="text" class="commentEdit" placeholder="Comment">
                    <input type="submit" class="submitEdit">
                </div>
            </div>
        `;
        $('#commentSection').append(newComment);
        $('#commentInput').val('');
    } else {
        alert('UserName and Comment text cannot be blank.');
    }
});


$('#commentSection').on('click', '.editButton', function() {
    let commentDiv = $(this).closest('.comment');
    let hiddenInput = commentDiv.find('.toggle');
    hiddenInput.toggleClass('noDisplay');
    hiddenInput.toggleClass('hiddenSubmit');

    let originalComment = commentDiv.find('.commentText').text();
    hiddenInput.find('.commentEdit').val(originalComment);
});

$('#commentSection').on('click', '.submitEdit', function() {
    let editedInput = $(this).siblings('.commentEdit');
    let editedText = editedInput.val();

    let commentDiv = editedInput.closest('.comment');
    let commentText = commentDiv.find('.commentText');

    commentText.text(editedText);

    commentDiv.find('.hiddenSubmit').addClass('noDisplay');
});

$('#commentSection').on('click', '.deleteButton', function() {
    $(this).closest('.comment').remove();
});
