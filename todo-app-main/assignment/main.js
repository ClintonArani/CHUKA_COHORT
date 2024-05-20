document.getElementById('toggleIcon').addEventListener('click', function() {
    const todo = document.getElementById('todo');
    const main = document.getElementById('main');
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    const paraElements = document.querySelectorAll('.para');
    const toggleIcon = document.getElementById('toggleIcon');

    if (toggleIcon.getAttribute('src') === './images/icon-sun.svg') {
        // Change to moon settings
        todo.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")'; 
        todo.style.backgroundSize = 'cover';
        main.style.color = '#000';
        main.style.backgroundColor = '#fff'; 
        top.style.backgroundColor = '#fff'; 
        bottom.style.backgroundColor = '#fff'; 
        paraElements.forEach(para => para.style.color = '#000');
        bottom.style.boxShadow = '1px 1px 1px 1px gray';
        toggleIcon.setAttribute('src', './images/icon-moon.svg'); 
        toggleIcon.setAttribute('alt', 'Dark mode');
    } else {
        // Revert to sun settings
        todo.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")'; 
        todo.style.backgroundSize = 'cover';
        main.style.backgroundColor = 'rgba(2, 2, 21, 0.854)';
        top.style.backgroundColor = 'rgb(38, 38, 52)'; 
        bottom.style.backgroundColor = 'rgb(38, 38, 52)'; 
        paraElements.forEach(para => para.style.color = '#fff');
        bottom.style.boxShadow = '';
        toggleIcon.setAttribute('src', './images/icon-sun.svg');
        toggleIcon.setAttribute('alt', 'Sun Icon');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const checkMarks = document.querySelectorAll('.check');
    const gradientStyle = 'linear-gradient(to right, #0000ff, #b013e0)';
    const clearCompleted = document.querySelector('.clear');
    const closeCompleted = document.querySelector('.close');
    const allTasks = document.querySelector('.all');

    // Toggle line-through and background gradient on individual check mark clicks
    checkMarks.forEach(checkMark => {
        checkMark.addEventListener('click', () => {
            const paragraph = checkMark.nextElementSibling;
            if (paragraph.style.textDecoration === 'line-through') {
                paragraph.style.textDecoration = '';
                checkMark.style.background = '';
            } else {
                paragraph.style.textDecoration = 'line-through';
                checkMark.style.background = gradientStyle;
            }
        });
    });

    // Clear completed tasks when "Clear Completed" is clicked
    clearCompleted.addEventListener('click', () => {
        const tasks = document.querySelectorAll('.radiocheck-container .bottom span');
        tasks.forEach(task => {
            const paragraph = task.querySelector('.para');
            if (paragraph.style.textDecoration === 'line-through') {
                task.remove();
            }
        });
        const clear = document.getElementById('clear');
        if (clear.style.color === "") {
            clear.style.color = "#fff";
        } else {
            clear.style.color = ""; // corrected assignment, removed one equals sign
        }

    });

    // Mark all tasks as completed when "All" is clicked
    allTasks.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior if it's an <a> tag
        const tasks = document.querySelectorAll('.radiocheck-container .bottom span');
        tasks.forEach(task => {
            const paragraph = task.querySelector('.para');
            const checkMark = task.querySelector('.check');
            paragraph.style.textDecoration = 'line-through';
            checkMark.style.background = gradientStyle;
        });
    });

    // closs the task that is completed when the closs icon is clicked
    
});
