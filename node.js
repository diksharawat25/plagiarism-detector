const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileUpload');
const fileList = document.getElementById('fileList');

// Drag Over Effect
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.textContent = 'Release to Upload';
});

// Drag Leave Effect
dropZone.addEventListener('dragleave', () => {
  dropZone.textContent = 'Drag & Drop PDF Files Here';
});

// File Drop Event
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  displayFiles();
});

// File Selection using Input
fileInput.addEventListener('change', displayFiles);

function displayFiles() {
  const files = fileInput.files;
  fileList.innerHTML = '';

  if (files.length === 0) {
    alert('Please select files to proceed!');
    return;
  }
  
  // Show File Preview
  document.getElementById('filePreview').classList.remove('hidden');
  
  for (const file of files) {
    if (file.type === 'application/pdf') {
      const li = document.createElement('li');
      li.textContent = file.name;
      fileList.appendChild(li);
    } else {
      alert('Only PDF files are allowed!');
    }
  }
}
