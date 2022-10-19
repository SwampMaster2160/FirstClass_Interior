function itemClickOn(rowID, rowItemID) {
    var item = document.getElementById("item" + rowID + "-" + rowItemID);
    item.className = "col-4 bg-light p-0 rounded border";
    var gapLeft = document.getElementById("gap" + rowID + "-" + rowItemID);
    gapLeft.hidden = true;
    var gapRight = document.getElementById("gap" + rowID + "-" + (rowItemID + 1));
    gapRight.hidden = true;
    var button = document.getElementById("button" + rowID + "-" + rowItemID);
    button.hidden = true;
}