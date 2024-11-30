
// Button id 
const homePageButton = document.getElementById('homePageButtonId')
const scheduleButton = document.getElementById('scheduleButtonId')
const remaindersButton = document.getElementById('remaindersButtonId')
const goalsButton = document.getElementById('goalsButtonId')
const settingsButton = document.getElementById('settingsButtonId')

// image status id
const imgElementHomePage = document.querySelector('#homePageButtonId img');
const imgElementSchedule = document.querySelector('#scheduleButtonId img');
const imgElementRemainders = document.querySelector('#remaindersButtonId img');
const imgElementGoals = document.querySelector('#goalsButtonId img');
const imgElementSettings = document.querySelector('#settingsButtonId img');



// for changing content dashboard
const contentDivSelector = '.content';




// click homePage button
homePageButton.addEventListener('click',()=> {
   
    // Load HTML
    loadHTMLContent('../html/homePage.html', contentDivSelector);
   
    imgElementHomePage.src = '../images/icon/home.png'
    imgElementSchedule.src = '../images/icon/schedule (1).png'
    imgElementRemainders.scr = '../images/icon/sticky-note (1).png'
    imgElementGoals.src = '../images/icon/goal (1).png'
    imgElementSettings.src = '../images/icon/logout (1).png'
})


// click schedule button
scheduleButton.addEventListener('click', function () {

    // change icon homePage not fill image
      imgElementHomePage.src = '../images/icon/home (1).png'
      imgElementRemainders.src = '../images/icon/sticky-note (1).png'
      imgElementGoals.src = '../images/icon/goal (1).png'
      imgElementSettings.src = '../images/icon/logout (1).png'

    //   schedule fill icon
      imgElementSchedule.src = '../images/icon/schedule.png'
    // Load HTML
    loadHTMLContent('../html/schedule.html', contentDivSelector);
     
 
});


// events remaindersButton

remaindersButton.addEventListener('click', ()=>{
      
    //change not fill icon rest
    imgElementHomePage.src = '../images/icon/home (1).png'
    imgElementSchedule.src = '../images/icon/schedule (1).png'
    imgElementGoals.src = '../images/icon/goal (1).png'
    imgElementSettings.src = '../images/icon/logout (1).png'

      // remainders fill icon
    imgElementRemainders.src = '../images/icon/sticky-note.png'
})

// events goals Button
goalsButton.addEventListener('click', ()=>{

    //changes all icon to not fill
    imgElementHomePage.src = '../images/icon/home (1).png'
    imgElementSchedule.src = '../images/icon/schedule (1).png'
    imgElementRemainders.src = '../images/icon/sticky-note (1).png'
    imgElementSettings.src = '../images/icon/logout (1).png'

    // fill Goal icon
    imgElementGoals.src = '../images/icon/goal.png'
})

// settings event
settingsButton.addEventListener('click', ()=>{

      //changes all icon to not fill
      imgElementHomePage.src = '../images/icon/home (1).png'
      imgElementSchedule.src = '../images/icon/schedule (1).png'
      imgElementRemainders.src = '../images/icon/sticky-note (1).png'
      imgElementGoals.src = '../images/icon/goal (1).png'

    // fill image icon
    imgElementSettings.src = '../images/icon/logout.png'
})





// function load html
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

// load homePage html
window.onload = function() {

  loadHTMLContent('../html/homePage.html', '.content');
   
};