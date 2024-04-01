const ChoseeHandel = (type) => {
    const ChoseeBox = document.querySelectorAll(".galearys .galeary ul li");
    const Box = document.querySelectorAll(".galearys .galeary .box");

    ChoseeBox.forEach((element) => {
        element.classList = "";
        if (element.innerHTML === type) {
            element.classList = "active";
        }
        Box.forEach((ele) => {
            if (
                type != ele.dataset.type &&
                type != "all"
            ) {
                ele.style.display = "none";
                ele.classList.remove("show");
            } else {
                ele.style.display = "flex";
                ele.classList.add("show");
            }
        });
    });
}

export {
    ChoseeHandel
}