var list = document.querySelectorAll(".barNavigation li");
function linkSelect() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) =>
item.addEventListener("click", linkSelect));
// i do not why do you working ???