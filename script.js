






 // Select the cursor follower element
 const cursorFollower = document.querySelector('.cursor-follower');

 // Function to update the position of the cursor follower
 function updateCursorPosition(event) {
     const x = event.clientX;
     const y = event.clientY;

     cursorFollower.style.left = `${x}px`;
     cursorFollower.style.top = `${y}px`;
 }

 // Function to add hover effect
 function addHoverEffect() {
     cursorFollower.classList.add('hover');
 }

 // Function to remove hover effect
 function removeHoverEffect() {
     cursorFollower.classList.remove('hover');
 }

 // Listen for mouse movement to update the cursor follower position
 document.addEventListener('mousemove', updateCursorPosition);

 // Add hover effect on mouse down and remove on mouse up
 document.addEventListener('mousedown', addHoverEffect);
 document.addEventListener('mouseup', removeHoverEffect);










































// // Select the cursor follower element
    // const cursorFollower = document.querySelector('.cursor-follower');

    // // Function to update the position of the cursor follower
    // function updateCursorPosition(event) {
    //     const x = event.clientX;
    //     const y = event.clientY;

    //     cursorFollower.style.left = `${x}px`;
    //     cursorFollower.style.top = `${y}px`;
    // }

    // // Function to add hover effect
    // function addHoverEffect() {
    //     cursorFollower.classList.add('hover');
    // }

    // // Function to remove hover effect
    // function removeHoverEffect() {
    //     cursorFollower.classList.remove('hover');
    // }

    // // Listen for mouse movement to update the cursor follower position
    // document.addEventListener('mousemove', updateCursorPosition);

    // // Optional: Add hover effect on mouse down and remove on mouse up
    // document.addEventListener('mousedown', addHoverEffect);
    // document.addEventListener('mouseup', removeHoverEffect);