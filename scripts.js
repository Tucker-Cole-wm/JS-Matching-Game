//Day 2
var leftSide = document.getElementById('leftSide');
var rightSide = document.getElementById('rightSide');

function image() {
  var element = document.createElement('img');
  element.src = 'http://www.dailyperricone.com/wp-content/uploads/2010/09/Crab-Claw.jpg';
  document.getElementById('leftSide').appendChild(element);
}

image();
