function changePassword () {
    console.log("change password")

    overlayOn()


}


function logout() {
    console.log("logout")

    overlayOn()

    
}

function overlayOn () {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}