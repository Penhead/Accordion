window.onload = function () {
    //Accordion Logic
    var open = false,
        openContent,
        theParent = document.querySelector("#accordion-main");

    theParent.addEventListener("click", accordion, false);

    function accordion(e) {
        if (e.target !== e.currentTarget) {
            var accordParent = e.target.parentNode;
            open = !open;
            if (openContent != accordParent.querySelector('div.content') && openContent != undefined) {
                openContent.style.display = 'none';
                open = true;
                if (openContent == accordParent.querySelector('div.content')) {
                    open = false;
                }
            }
            if (open) {
                openContent = accordParent.querySelector('div.content');
                accordParent.querySelector('div.content').style.display = "block";
            } else {
                accordParent.querySelector('div.content').style.display = "none";
            }
        }
        e.stopPropagation();
        //End Accordion Logic
    }
}
