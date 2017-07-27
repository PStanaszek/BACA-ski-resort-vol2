(function dropDownNav() {
    window.onload = function() {
        flexNav();
    }
    window.onresize = function() {
        flexNav();
    }

    function flexNav() {
        var windowWidth = window.innerWidth,
            dropDownNavButton = document.querySelector(".dropDownNav"),
            nav = document.querySelector("nav > ul"),
            navClass = document.querySelector("nav > ul").classList,
            content = document.querySelector(".content");
        if (windowWidth < 880) {
            if (navClass.contains('top-nav')) {
                navClass.remove('top-nav');
            }
            dropDownNavButton.style.display = "block";
            navClass.add('columnNavHide');
            (navClass.className);
            dropDownNavButton.onclick = function() {
                navClass.toggle('columnNavHide');
                navClass.toggle('columnNavShow');
                content.classList.toggle("navButtonClicked"); 

            }
        } else {
            dropDownNavButton.style.display = "none";
            if (navClass.contains("columnNavHide") || navClass.contains("columnNavShow")) {
                nav.className = "";
                navClass.add('top-nav');

            }
        }
    };
})();