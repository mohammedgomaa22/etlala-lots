// Toggle NavBar
const showNav = () => {
    const btnToggle = document.querySelector(".navbar .toggle"),
        navBar = document.getElementById("nav");

    btnToggle.addEventListener("click", () => {
        if (navBar.style.width !== "100%") {
            navBar.style.width = "100%";
        } else {
            navBar.style.width = "0%";
        }
    });
};
showNav();
// ---------------------------------------------------------
// ---------------------------------------------------------
// Scrolling
const scrolling = () => {
    const scrolling = document.querySelector(".scrolling"),
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // -------------------------
    window.addEventListener(("scroll"), () => {
        let scrollFromTop =  document.documentElement.scrollTop;
        scrolling.style.width = `${(scrollFromTop / height) * 100}%`;
    });
};
scrolling();
// ---------------------------------------------------------
function sendMessToWhatsapp() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    // ------------
    if (params.name != "" && params.email != "" && params.message != "") {
        var url = "https://wa.me/" + "+966545891723" + "?text="
            
            + "مـرحـبــا " + "%0a"
            + "الاســم : " + params.name + "%0a"
            + "الايميـل : " + params.email + "%0a"
            + "الرسالـة : " + params.message + "%0a";
            
        window.open(url, '_blank').focus();
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("يجب ملئ جميع البيانات");
    }
};
