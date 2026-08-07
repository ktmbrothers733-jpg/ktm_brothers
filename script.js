function scrollBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const mobile = form.querySelector("input[type='tel']").value;
    const date = form.querySelector("input[type='date']").value;
    const service = form.querySelector("select").value;
    const details = form.querySelector("textarea").value;

    if (
        name === "" ||
        mobile === "" ||
        date === "" ||
        service === "Select Service"
    ) {
        alert("Please fill all details.");
        return;
    }

    const message =
`*KTM BROTHERS BOOKING*

👤 Name : ${name}

📱 Mobile : ${mobile}

📅 Date : ${date}

🎵 Service : ${service}

📝 Details : ${details}`;

    const whatsapp =
"https://wa.me/918870234628?text=" + encodeURIComponent(message);

    window.open(whatsapp, "_blank");

    form.reset();

});

window.addEventListener("scroll", function () {

    let header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,0.8)";
    }

});