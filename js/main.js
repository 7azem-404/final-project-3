let btn = document.getElementById('dark');
let div = document.getElementById('body');
let nav = document.getElementById('navID');
let lists = document.getElementById('list');
let faqs = document.getElementById('faq');
let navID2 = document.getElementById('navID');

let them = () => {
    if(btn.textContent == "light"){
        div.style.background = "#eee";
        div.style.color ="black";
        btn.textContent ="dark";
        btn.classList="btn btn-dark";
        nav.style.background ="white";
        lists.style.color="#00000080";
        faqs.style.color="#262930";
        navID2.style.background="#ebebeb"; 


    } else {
        div.style.background = "#111";
        div.style.color ="white";
        btn.textContent ="light";
        btn.classList="btn btn-light";
        nav.style.background ="black";
        lists.style.color="white";
        faqs.style.color="white";
        navID2.style.background="black"

    }

}
btn.addEventListener('click',them);