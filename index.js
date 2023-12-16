let text = document.getElementById("text");
let size = document.getElementById("size");
let body = document.querySelector(".body");
let Generate = document.getElementById("Generate");
let downloaded = document.getElementById("downloaded");
let sizes = document.querySelector(".sizes");
let max = size.value;
size.addEventListener("change", function (e) {
    max = e.target.value;
    if (text.value.trim() == "") {
        alert("Enter Your Website Url");
    }
    else {
        generate();
    }

})



function generate() {
    body.innerHTML = "";
    new QRCode(body, {
        text: text.value,
        height: max,
        width: max,
        colorLight: "#fff",
        colorDark: "#000",

    });

}


Generate.addEventListener("click", () => {
    if (text.value.trim() == "") {
        alert("Enter Your Website Url");
    }
    else {
        generate();
    }

})

downloaded.addEventListener("click", () => {
    let img = document.querySelector(".body img");
    let url = img.src;
    fetch(url).then(res => res.blob()).then(file => {
        let t = URL.createObjectURL(file);
        let link = document.createElement("a");
        link.href = t;
        link.download = "QRCode.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        link.remove();
        URL.revokeObjectURL(t);
    })
})

function random() {
    let v1 = Math.ceil(0 + Math.random() * 255);
    let v2 = Math.ceil(0 + Math.random() * 255);
    let v3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${v1},${v2},${v3})`;
}
setInterval(() => {
    document.body.style.background = random();
}, 2000);
