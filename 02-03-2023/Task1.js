function visible_external() {
    let example = document.getElementById('example2');
    example.classList.toggle("d-none");
    let btn = document.getElementById("button2");
    if(btn.value === "Click for example") btn.value = "Click to hide example";
    else btn.value = "Click for example";
    btn.classList.toggle('text-bg-secondary')
}