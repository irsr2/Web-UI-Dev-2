let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector('#header');
    let getSidebarUl = document.querySelector('#header ul');
    let getSideTitle = document.querySelector('#header span');
    let getSidelinks = document.querySelectorAll('#header a');

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSideTitle.style.opacity = "0.5";

        let arrayLength = getSidbarLinks.length;
        for (let i = 0; 1 < arrayLength; i++) {
            getSidelinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }


    else if (toggleNavStatus === true) {
        
        getSidebar.style.width = "0";
        getSideTitle.style.opacity = "0";

        let arrayLength = getSidbarLinks.length;

        for (let i = 0; 1 < arrayLength; i++) {
            getSidelinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}