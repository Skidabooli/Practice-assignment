function openTab(evt, Tabname, Title) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("block");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(Tabname).style.display = "block";
    evt.currentTarget.className += " active";
    document.title = Title
}

