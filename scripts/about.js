function toggleCEOToMD() {
    if (document.getElementById("ceoMDToggleButton").innerHTML == "See MD") {
        document.getElementById("ceoName").innerHTML = "Managing Director - Bob Bob";
        document.getElementById("ceoIntroduction").innerHTML = "The managing director since 2001, responsable for managing the company.";
        document.getElementById("ceoMDToggleButton").innerHTML = "See CEO";
        document.getElementById("ceoImage").src = "/images/md.jpg";
    }
    else {
        document.getElementById("ceoName").innerHTML = "CEO - Bob Fakeson";
        document.getElementById("ceoIntroduction").innerHTML = "\"I have been the ceo of this company since 2007, I am delighted to be able to steer this company to it's global corporation status today and are fully committed to further it's growth.\"";
        document.getElementById("ceoMDToggleButton").innerHTML = "See MD";
        document.getElementById("ceoImage").src = "/images/ceo.jpg";
    }
}

function hideStaffMember(staffID) {
    var staff = document.getElementById("staff" + staffID);
    staff.hidden = true;
}

function showHideButton(staffID) {
    var button = document.getElementById("hideButton" + staffID);
    button.hidden = false;
}

function hideHideButton(staffID) {
    var button = document.getElementById("hideButton" + staffID);
    button.hidden = true;
}