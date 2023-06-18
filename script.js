// Pre Loader

var preloader = document.getElementById("pre_loader")

window.addEventListener("load", function(){
    preloader.style.display = "none"
})

// Reg Popup Script

document.querySelector('.head-reg').addEventListener("click",function(){
    document.querySelector('.popup-reg-form').classList.add("active")
    document.querySelector('.container-fluid').classList.add("active")
    document.querySelector('.page-wrapper').classList.add("active")
    document.querySelector('.full-page-wrapper').classList.add("active")
    document.querySelector('body').classList.add("active")
})
document.querySelector('.close').addEventListener("click",function(){
    document.querySelector('.popup-reg-form').classList.remove("active")
    document.querySelector('.container-fluid').classList.remove("active")
    document.querySelector('.page-wrapper').classList.remove("active")
    document.querySelector('.full-page-wrapper').classList.remove("active")
    document.querySelector('body').classList.remove("active")
})

// Login Popup Script

document.querySelector('.head-log').addEventListener("click",function(){
    document.querySelector('.popup-login-form').classList.add("active")
    document.querySelector('.container-fluid').classList.add("active")
    document.querySelector('.page-wrapper').classList.add("active")
    document.querySelector('.full-page-wrapper').classList.add("active")
    document.querySelector('body').classList.add("active")
})
document.querySelector('.log-close').addEventListener("click",function(){
    document.querySelector('.popup-login-form').classList.remove("active")
    document.querySelector('.container-fluid').classList.remove("active")
    document.querySelector('.page-wrapper').classList.remove("active")
    document.querySelector('.full-page-wrapper').classList.remove("active")
    document.querySelector('body').classList.remove("active")
})

// Rate Popup Script

document.querySelector('.rt-popup-btn').addEventListener("click",function(){
    document.querySelector('.issue_rate').classList.add("active")
    document.querySelector('.container-fluid').classList.add("active")
    document.querySelector('.page-wrapper').classList.add("active")
    document.querySelector('.full-page-wrapper').classList.add("active")
    document.querySelector('body').classList.add("active")
})
document.querySelector('.rc_btn').addEventListener("click",function(){
    document.querySelector('.issue_rate').classList.remove("active")
    document.querySelector('.container-fluid').classList.remove("active")
    document.querySelector('.page-wrapper').classList.remove("active")
    document.querySelector('.full-page-wrapper').classList.remove("active")
    document.querySelector('body').classList.remove("active")
})

// Reserve Popup Script

document.querySelector('.rs_popup_btn').addEventListener("click",function(){
    document.querySelector('.main_res_body').classList.add("active")
    document.querySelector('.container-fluid').classList.add("active")
    document.querySelector('.page-wrapper').classList.add("active")
    document.querySelector('.full-page-wrapper').classList.add("active")
    document.querySelector('body').classList.add("active")
})
document.querySelector('.rs_btn').addEventListener("click",function(){
    document.querySelector('.main_res_body').classList.remove("active")
    document.querySelector('.container-fluid').classList.remove("active")
    document.querySelector('.page-wrapper').classList.remove("active")
    document.querySelector('.full-page-wrapper').classList.remove("active")
    document.querySelector('body').classList.remove("active")
})