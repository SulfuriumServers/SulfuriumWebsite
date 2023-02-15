let view = document.getElementById("view");
let doc = document

view.addEventListener('scroll',() => {
    let page = doc.getElementById("page1");
    let objTop = page.offsetTop;
    let objBottom = objTop + page.offsetHeight - window.innerHeight * 3;
    let amount = Math.max(objTop, Math.min(objBottom, view.scrollTop)) / (objBottom - objTop);
    let namount = 1 - amount;
    
    console.log(amount);

    // 100 - 2100
    // 0 620

    let scale = -525 * Math.pow(amount-1, 2) + 1;

    page.querySelector(".cover").style.setProperty('--scale', (100 + 1900 * namount) + "%");
    page.querySelector(".cover").style.setProperty('--offset', (600 * namount) + "vh");
   
});