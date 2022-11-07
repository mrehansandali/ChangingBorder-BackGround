const backColor = document.querySelector(".bg")
const borderColor = document.querySelector(".border")
const textColor = document.querySelector(".text")

function randomColors() {
    const chars = "0123456789abcdef"
    let colorCode = ""
    for (i=0; i<6; i++){
        const randomColor = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomColor, randomColor + 1)
    }
    return colorCode
}

function changeBg() {
    let backGroundColor = "#" + randomColors()
    backColor.style.backgroundColor = backGroundColor
}
function changeBorder() {
    let backGroundHtmlColor = "#" + randomColors()
    borderColor.style.backgroundColor = backGroundHtmlColor
}
function changeTextColor() {
    let borderHtmlColor = "#" + randomColors()
    textColor.style.backgroundColor = borderHtmlColor
}