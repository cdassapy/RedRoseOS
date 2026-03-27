let downloadCount = 0; 

const downloadBtn = document.getElementById('download-btn');
const countDisplay = document.getElementById('download-count');

downloadBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    downloadCount++;
    countDisplay.innerText = downloadCount;
    
});
