function loadHTMLContent(file, targetSelector) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Failed to load HTML file");
            return response.text();
        })
        .then(data => {
            document.querySelector(targetSelector).innerHTML = data;
        })
        .catch(error => console.error("Error loading HTML:", error));
}
function loadCSS(file) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
}
function loadJS(file) {
    const script = document.createElement('script');
    script.src = file;
    document.body.appendChild(script);
}
document.getElementById('scheduleButtonId').addEventListener('click', function () {
    const contentDivSelector = '.content';
    
    // Load HTML
    loadHTMLContent('../html/schedule.html', contentDivSelector);
    
 
});

// back to home page
document.getElementById('homePageButtonId').addEventListener('click', function () {
    const contentDivSelector = '.content';
    
    // Load HTML
    loadHTMLContent('../html/homePage.html', contentDivSelector);
    
   
    
   
})
