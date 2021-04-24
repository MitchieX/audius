function toggleSort(btnID, colID, colNum, regionID) {
    var theButton = document.getElementById(btnID);
    var theColumn = document.getElementById(colID);
    var liveRegion = document.getElementById(regionID);
    var sortedTDs = document.querySelectorAll(
      "td:nth-child(" + colNum + "), *[role=cell]:nth-child(" + colNum + ")"
    );
    var currSort = theColumn.getAttribute("aria-sort");
    if (currSort == "descending") {
      clearSorts();
      theColumn.setAttribute("aria-sort", "ascending");
      liveRegion.innerHTML = "sorted up";
    } else {
      clearSorts();
      theColumn.setAttribute("aria-sort", "descending");
      liveRegion.innerHTML = "sorted down";
    }
    for (var i = 0; i < sortedTDs.length; i++) {
      sortedTDs[i].classList.add("sorted");
    }
    setTimeout(function () {
      liveRegion.innerHTML = "";
    }, 1000);
  }
  
  function clearSorts() {
    var thSort = document.querySelectorAll("*[aria-sort]");
    var tdSort = document.querySelectorAll(".sorted");
    var thBtn = document.querySelectorAll(
      "th > button, *[role=columnheader] > button"
    );
    for (var i = 0; i < thSort.length; i++) {
      thSort[i].removeAttribute("aria-sort");
    }
    for (var i = 0; i < tdSort.length; i++) {
      tdSort[i].classList.remove("sorted");
    }
  }
  
  function flipLiveRegion() {
    var strLiveProperty = document.querySelector('input[name="liveRegion"]:checked').value;
    var liveRegion = document.getElementById('SortNote');
    if (strLiveProperty == "off") {
      liveRegion.removeAttribute("aria-live");
    } else {
      liveRegion.setAttribute('aria-live', strLiveProperty);
    }
  }