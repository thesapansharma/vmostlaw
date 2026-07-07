
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByTagName("nav");
var navlogo1=document.getElementsByClassName("nav-lo");
var nbar=document.querySelector('.nbar');
var nbar1=document.querySelector('.nbar1');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(window.location.href);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  console.log('work')
  if (window.pageYOffset > 170) {
    navbar[0].classList.add("sticky");
    navlogo1[0].style.position='fixed';
  } else {
    navbar[0].classList.remove("sticky");
    navlogo1[0].style.position='absolute';
    
  }
}
function navlogo(){
  console.log('work')
  var nav=document.getElementById("nav-bar")
  console.log(nav.style)
  if(nav.style.height === '200px'){
    nbar.style.transform='none'
		nbar1.style.transform='none'
		nbar.style.marginBottom='10px';
    nav.style.height='0px'
    nav.style.marginTop='0px'
    nbar.style.position='relative'

  }else{
    nbar.style.transform='rotate(45deg)'
		nbar1.style.transform='rotate(-45deg)'
		nbar.style.marginBottom='0px';
    nav.style.height='200px'
    nav.style.marginTop='30px'
    
    nbar.style.position='absolute'
  }
}
function sendMail(e){
  console.log(e)
  event.preventDefault();
  console.log(document.getElementById('my-form1'))

  var templateParams={
    from_name:'thesapansharma@gmail.com',
    to_name:'vmostmessage@gmail.com',
    name:document.getElementById('my-form1').name.value,
    phone:document.getElementById('my-form1').phone.value,
    service:document.getElementById('my-form1').service.value,
    email:document.getElementById('my-form1').email.value,
    message:document.getElementById('my-form1').message.value,
    
  }
  emailjs.send('service_9fcu8as','template_sdj1ld8',templateParams)
  .then(function(response) {
    var button =document.getElementById("tick");
        
        button.innerHTML='<i class="far fa-check-circle"></i> message send';
        setTimeout(function() {button.innerText = "Send";button.disabled=false}, 3000);
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });
}
function sendMail1(e){
  console.log(e)
  event.preventDefault();
  console.log(document.getElementById('my-form2'))

  var templateParams={
    from_name:document.getElementById('my-form2').email.value,
    to_name:'vmostmessage@gmail.com',
    name:document.getElementById('my-form2').name.value,
    phone:document.getElementById('my-form2').phone.value,
    service:document.getElementById('my-form2').service.value,
    email:document.getElementById('my-form2').email.value,
    message:document.getElementById('my-form2').message.value,
    
  }
  emailjs.send('service_9fcu8as','template_sdj1ld8',templateParams)
  .then(function(response) {
    var button =document.getElementById("tick1");
        
        button.innerHTML='<i class="far fa-check-circle"></i> message send';
        setTimeout(function() {button.innerText = "Send";button.disabled=false}, 3000);
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });
}
function test1(){
  var tes=document.getElementsByClassName("testimonial-tab-link");
  var desc=document.getElementById("test-desc");
  var name=document.getElementById("test-name");
  desc.innerText='Excellent lawyer, it was fabulous experience,we went for spousal visa service, Mr. Sharma explained everything in details. I will recommend VMOST law firm to all.';
  name.innerText='Meenal Rai';
}
function test2(){
  var tes=document.getElementsByClassName("testimonial-tab-link");
  var desc=document.getElementById("test-desc");
  var name=document.getElementById("test-name");
  desc.innerText='Had great experience with VMOST,  they helped me file for my spousal sponsorship after my first lawyer messed up my spousal sponsorship application, took my file to VMOST and they were professional and understood my situation and helped me re-apply for spousal. and now my wife is here with me in Canada.';
  name.innerText='Rock Solid justice Save rock';
}
function test3(){
  var tes=document.getElementsByClassName("testimonial-tab-link");
  var desc=document.getElementById("test-desc");
  var name=document.getElementById("test-name");
  desc.innerText='It was a great experience with Mr. Sharma, very straight forward and professional personality.';
  name.innerText='Suchait Saini';
}


//selector from your HTML form
$('#my-form').submit(function(e) {
 
setTimeout(function() {button.innerText = "Send";button.disabled=false}, 3000);
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();
  //AJAX request
  $.ajax({
    url: 'https://docs.google.com/forms/d/1zzuwtXT4XsNzgmpUOJJc6Ela274RHpo15OlLfsgYjgo/formResponse',     //The public Google Form url, but replace /view with /formResponse
    data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data 
    type: 'POST', //tells ajax to post the data to the url
    dataType: "json", //the standard data type for most ajax requests
    statusCode: { //the status code from the POST request
      0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
        //success
        var button =document.getElementById("foot-but");
        button.disabled=true;
        button.innerHTML='<i class="far fa-check-circle"></i> Subscribe';
        setTimeout(function() {button.innerText = "SUBMIT";button.disabled=false}, 3000);
      }, 
      200: function(data) {//200 is a success code. it went through!
        //success
        var button =document.getElementById("foot-but");
        button.disabled=true;
        button.innerHTML='<i class="far fa-check-circle"></i> Subscribe';
        setTimeout(function() {button.innerText = "SUBMIT";button.disabled=false}, 3000);
      },
      403: function(data) {//403 is when something went wrong and the submission didn't go through
        //error
        alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
      }
    }  
  });
});
