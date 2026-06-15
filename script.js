function openInvitation(){
    document.getElementById("opening").style.display="none";
    document.getElementById("music").play();
}

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el=>{
    observer.observe(el);
});
