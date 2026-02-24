let currentNotebookId = null;

function openNotebook(id) {
    currentNotebookId = id;
    const modal = document.getElementById('notebook-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('notebook-content');
    const dateStamp = document.getElementById('modal-date');

    // Set Title based on ID
    const titles = {
        'general': 'General Chaos',
        'physics': 'Physics Lab Notes',
        'ideas': 'Midnight Ideas',
        'todo': 'To Do & Goals'
    };
    title.innerText = titles[id] || 'Notebook';

    // Set Date
    const date = new Date();
    dateStamp.innerText = `${date.toLocaleString('default', { month: 'short' }).toUpperCase()} ${date.getDate()}`;

    // Load Content from LocalStorage
    const savedContent = localStorage.getItem(`notebook_${id}`);
    if (savedContent) {
        content.innerHTML = savedContent;
    } else {
        content.innerHTML = '<i>This page is empty. Start writing...</i>';
    }

    // Reset Edit Mode to False initially
    content.contentEditable = "false";
    content.style.cursor = "default";
    
    modal.style.display = 'flex';
}

function closeNotebook() {
    const modal = document.getElementById('notebook-modal');
    modal.style.display = 'none';
}

function toggleEditMode() {
    const content = document.getElementById('notebook-content');
    const isEditable = content.contentEditable === "true";

    if (isEditable) {
        content.contentEditable = "false";
        content.style.cursor = "default";
        alert("Edit Mode Disabled (View Only)");
    } else {
        content.contentEditable = "true";
        content.style.cursor = "text";
        content.focus();
        // Visual cue
        content.style.outline = "2px dashed rgba(0,0,0,0.1)";
        setTimeout(() => content.style.outline = "none", 500);
    }
}

function saveContent() {
    if (!currentNotebookId) return;

    const content = document.getElementById('notebook-content');
    localStorage.setItem(`notebook_${currentNotebookId}`, content.innerHTML);

    // Show saved status
    const status = document.getElementById('save-status');
    status.style.opacity = '1';
    status.innerText = 'Saving...';
    
    setTimeout(() => {
        status.innerText = 'Saved';
        setTimeout(() => {
             status.style.opacity = '0.5';
        }, 1000);
    }, 500);
}

// Close modal if clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('notebook-modal');
    if (event.target == modal) {
        closeNotebook();
    }
}
