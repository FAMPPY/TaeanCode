document.addEventListener("DOMContentLoaded", function () {
  let iso = new Isotope(".interview-content-box", {
    itemSelector: ".interview-item",
    layoutMode: "fitRows",
  });
  // filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function( itemElem ) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function( itemElem ) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match( /ium$/ );
  }
};
  // bind filter button click
  var filtersElem = document.querySelector(".tab-btns-box");
  filtersElem.addEventListener("click", function (event) {
    // only work with buttons
    console.log("sadfdsf")
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    // use matching filter function
    filterValue = filterFns[filterValue] || filterValue;
    iso.arrange({ filter: filterValue });
  });
  // change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.tab-btns-box');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}
function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
});
