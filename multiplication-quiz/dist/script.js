// Creates sound functions for each possibility //
let rightSound = new Audio('http://abbeytipton.com/projects/right_sound.mp3');
let wrongSound = new Audio('http://abbeytipton.com/projects/wrong_sound.mp3');
let passedSound = new Audio('http://abbeytipton.com/projects/passed_sound.mp3');

// Zeros setup //
let input = ['0 x 0', '5 x 0', '2 x 0', '8 x 0', '7 x 0', '6 x 0', '1 x 0', '3 x 0', '4 x 0', '10 x 0', '9 x 0', 'All Questions Asked!'];
let inputAns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let currentIndex = 0;
let totalRight = 0;
let totalWrong = 0;

// Zeros function //
$('#zero').click(function(e) {
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycle();
  $('#questions').text(input[currentIndex]);
  $('#nextBtn').show();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimer;

function startCycle() {
   cycleTimer = setInterval(function () {
    $('#answers').val('');
    $('#nextBtn').click();
   }, 3000);
}

function stopCycle() {
   clearInterval(cycleTimer);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtn').click(function() {
// Creates variable for user input of name //
let name = document.getElementById('name').value;
  
  if (parseInt($('#answers').val()) == inputAns[currentIndex]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRight++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrong++;
    wrongSound.play();
  }

  currentIndex++;
  stopCycle();
  startCycle();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(input[currentIndex]);
  if (currentIndex >= inputAns.length) {
    stopCycle();
    $('#nextBtn').remove();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRight === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRight + ' right and ' + totalWrong + ' wrong!';
    }
  } 

});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtn').click();
  }
});


// Ones setup //
let inputOne = ['0 x 1', '4 x 1', '6 x 1', '5 x 1', '10 x 1', '9 x 1', '7 x 1', '1 x 1', '2 x 1', '8 x 1', '3 x 1', 'All Questions Asked!'];
let inputAnsOne = [0, 4, 6, 5, 10, 9, 7, 1, 2, 8, 3];

let currentIndexOne = 0;
let totalRightOne = 0;
let totalWrongOne = 0;

// Ones function //
$('#one').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleOne();
  $('#questions').text(inputOne[currentIndexOne]);
  $('#nextBtnOne').show();
  $('#nextBtn').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerOne;

function startCycleOne() {
   cycleTimerOne = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnOne').click();
   }, 3000);
}

function stopCycleOne() {
   clearInterval(cycleTimerOne);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnOne').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsOne[currentIndexOne]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightOne++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongOne++;
    wrongSound.play();
  }
  currentIndexOne++;
  stopCycleOne();
  startCycleOne();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputOne[currentIndexOne]);
  if (currentIndexOne >= inputAnsOne.length) {
    stopCycleOne();
    $('#nextBtnOne').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightOne === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightOne + ' right and ' + totalWrongOne + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnOne').click();
  }
});

// Twos setup //
let inputTwo = ['0 x 2', '1 x 2', '2 x 2', '3 x 2', '4 x 2', '5 x 2', '6 x 2', '7 x 2', '8 x 2', '9 x 2', '10 x 2', 'All Questions Asked!'];
let inputAnsTwo = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let currentIndexTwo = 0;
let totalRightTwo = 0;
let totalWrongTwo = 0;

// Twos function //
$('#two').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleTwo();
  $('#questions').text(inputTwo[currentIndexTwo]);
  $('#nextBtnTwo').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerTwo;

function startCycleTwo() {
   cycleTimerTwo = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnTwo').click();
   }, 3000);
}

function stopCycleTwo() {
   clearInterval(cycleTimerTwo);
}
 

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnTwo').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsTwo[currentIndexTwo]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightTwo++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongTwo++;
    wrongSound.play();
  }
  currentIndexTwo++;
  stopCycleTwo();
  startCycleTwo();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputTwo[currentIndexTwo]);
  if (currentIndexTwo >= inputAnsTwo.length) {
    stopCycleTwo();
    $('#nextBtnTwo').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightTwo === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightTwo + ' right and ' + totalWrongTwo + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnTwo').click();
  }
});

// Threes setup //
let inputThree = ['0 x 3', '4 x 3', '2 x 3', '10 x 3', '5 x 3', '6 x 3', '9 x 3', '1 x 3', '3 x 3', '7 x 3', '8 x 3', 'All Questions Asked!'];
let inputAnsThree = [0, 12, 6, 30, 15, 18, 27, 3, 9, 21, 24];

let currentIndexThree = 0;
let totalRightThree = 0;
let totalWrongThree = 0;

// Threes function //
$('#three').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleThree();
  $('#questions').text(inputThree[currentIndexThree]);
  $('#nextBtnThree').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerThree;

function startCycleThree() {
   cycleTimerThree = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnThree').click();
   }, 3000);
}

function stopCycleThree() {
   clearInterval(cycleTimerThree);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnThree').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsThree[currentIndexThree]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightThree++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongThree++;
    wrongSound.play();
  }
  currentIndexThree++;
  stopCycleThree();
  startCycleThree();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputThree[currentIndexThree]);
  if (currentIndexThree >= inputAnsThree.length) {
    stopCycleThree();
    $('#nextBtnThree').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightThree === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightThree + ' right and ' + totalWrongThree + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnThree').click();
  }
});

// Fours setup //
let inputFour = ['0 x 4', '4 x 4', '2 x 4', '5 x 4', '10 x 4', '9 x 4', '7 x 4', '1 x 4', '3 x 4', '8 x 4', '6 x 4', 'All Questions Asked!'];
let inputAnsFour = [0, 16, 8, 20, 40, 36, 28, 4, 12, 32, 24];

let currentIndexFour = 0;
let totalRightFour = 0;
let totalWrongFour = 0;

// Fours function //
$('#four').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleFour();
  $('#questions').text(inputFour[currentIndexFour]);
  $('#nextBtnFour').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerFour;

function startCycleFour() {
   cycleTimerFour = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnFour').click();
   }, 3000);
}

function stopCycleFour() {
   clearInterval(cycleTimerFour);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnFour').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsFour[currentIndexFour]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightFour++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongFour++;
    wrongSound.play();
  }
  currentIndexFour++;
  stopCycleFour();
  startCycleFour();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputFour[currentIndexFour]);
  if (currentIndexFour >= inputAnsFour.length) {
    stopCycleFour();
    $('#nextBtnFour').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightFour === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightFour + ' right and ' + totalWrongFour + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnFour').click();
  }
});

// Fives setup //
let inputFive = ['0 x 5', '6 x 5', '4 x 5', '3 x 5', '10 x 5', '8 x 5', '9 x 5', '1 x 5', '2 x 5', '7 x 5', '5 x 5', 'All Questions Asked!'];
let inputAnsFive = [0, 30, 20, 15, 50, 40, 45, 5, 10, 35, 25];

let currentIndexFive = 0;
let totalRightFive = 0;
let totalWrongFive = 0;

// Fives function //
$('#five').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleFive();
  $('#questions').text(inputFive[currentIndexFive]);
  $('#nextBtnFive').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerFive;

function startCycleFive() {
   cycleTimerFive = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnFive').click();
   }, 3000);
}

function stopCycleFive() {
   clearInterval(cycleTimerFive);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnFive').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsFive[currentIndexFive]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightFive++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongFive++;
    wrongSound.play();
  }
  currentIndexFive++;
  stopCycleFive();
  startCycleFive();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputFive[currentIndexFive]);
  if (currentIndexFive >= inputAnsFive.length) {
    stopCycleFive();
    $('#nextBtnFive').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightFive === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightFive + ' right and ' + totalWrongFive + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnFive').click();
  }
});

// Sixs setup //
let inputSix = ['0 x 6', '2 x 6', '8 x 6', '9 x 6', '1 x 6', '7 x 6', '3 x 6', '4 x 6', '6 x 6', '5 x 6', '10 x 6', 'All Questions Asked!'];
let inputAnsSix = [0, 12, 48, 54, 6, 42, 18, 24, 36, 30, 60];

let currentIndexSix = 0;
let totalRightSix = 0;
let totalWrongSix = 0;

// Sixs function //
$('#six').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleSix();
  $('#questions').text(inputSix[currentIndexSix]);
  $('#nextBtnSix').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerSix;

function startCycleSix() {
   cycleTimerSix = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnSix').click();
   }, 3000);
}

function stopCycleSix() {
   clearInterval(cycleTimerSix);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnSix').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsSix[currentIndexSix]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightSix++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongSix++;
    wrongSound.play();
  }
  currentIndexSix++;
  stopCycleSix();
  startCycleSix();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputSix[currentIndexSix]);
  if (currentIndexSix >= inputAnsSix.length) {
    stopCycleSix();
    $('#nextBtnSix').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightSix === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightSix + ' right and ' + totalWrongSix + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnSix').click();
  }
});

// Sevens setup //
let inputSeven = ['0 x 7', '9 x 7', '5 x 7', '4 x 7', '1 x 7', '3 x 7', '8 x 7', '10 x 7', '6 x 7', '7 x 7', '2 x 7', 'All Questions Asked!'];
let inputAnsSeven = [0, 63, 35, 28, 7, 21, 56, 70, 42, 49, 14];

let currentIndexSeven = 0;
let totalRightSeven = 0;
let totalWrongSeven = 0;

// Sevens function //
$('#seven').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleSeven();
  $('#questions').text(inputSeven[currentIndexSeven]);
  $('#nextBtnSeven').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerSeven;

function startCycleSeven() {
   cycleTimerSeven = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnSeven').click();
   }, 3000);
}

function stopCycleSeven() {
   clearInterval(cycleTimerSeven);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnSeven').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsSeven[currentIndexSeven]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightSeven++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongSeven++;
    wrongSound.play();
  }
  currentIndexSeven++;
  stopCycleSeven();
  startCycleSeven();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputSeven[currentIndexSeven]);
  if (currentIndexSeven >= inputAnsSeven.length) {
    stopCycleSeven();
    $('#nextBtnSeven').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightSeven === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightSeven + ' right and ' + totalWrongSeven + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnSeven').click();
  }
});

// Eights setup //
let inputEight = ['0 x 8', '6 x 8', '2 x 8', '5 x 8', '1 x 8', '7 x 8', '9 x 8', '10 x 8', '3 x 8', '4 x 8', '8 x 8', 'All Questions Asked!'];
let inputAnsEight = [0, 48, 16, 40, 8, 56, 72, 80, 24, 32, 64];

let currentIndexEight = 0;
let totalRightEight = 0;
let totalWrongEight = 0;

// Eights function //
$('#eight').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleEight();
  $('#questions').text(inputEight[currentIndexEight]);
  $('#nextBtnEight').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnNine').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerEight;

function startCycleEight() {
   cycleTimerEight = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnEight').click();
   }, 3000);
}

function stopCycleEight() {
   clearInterval(cycleTimerEight);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnEight').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsEight[currentIndexEight]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightEight++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongEight++;
    wrongSound.play();
  }
  currentIndexEight++;
  stopCycleEight();
  startCycleEight();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputEight[currentIndexEight]);
  if (currentIndexEight >= inputAnsEight.length) {
    stopCycleEight();
    $('#nextBtnEight').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightEight === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightEight + ' right and ' + totalWrongEight + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnEight').click();
  }
});

// Nines setup //
let inputNine = ['0 x 9', '5 x 9', '3 x 9', '10 x 9', '1 x 9', '7 x 9', '6 x 9', '9 x 9', '2 x 9', '4 x 9', '8 x 9', 'All Questions Asked!'];
let inputAnsNine = [0, 45, 27, 90, 9, 63, 54, 81, 18, 36, 72];

let currentIndexNine = 0;
let totalRightNine = 0;
let totalWrongNine = 0;

// Nines function //
$('#nine').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleNine();
  $('#questions').text(inputNine[currentIndexNine]);
  $('#nextBtnNine').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnTen').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerNine;

function startCycleNine() {
   cycleTimerNine = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnNine').click();
   }, 3000);
}

function stopCycleNine() {
   clearInterval(cycleTimerNine);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnNine').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsNine[currentIndexNine]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightNine++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongNine++;
    wrongSound.play();
  }
  currentIndexNine++;
  stopCycleNine();
  startCycleNine();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputNine[currentIndexNine]);
  if (currentIndexNine >= inputAnsNine.length) {
    stopCycleNine();
    $('#nextBtnNine').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightNine === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightNine + ' right and ' + totalWrongNine + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnNine').click();
  }
});

// Tens setup //
let inputTen = ['0 x 10', '6 x 10', '8 x 10', '2 x 10', '1 x 10', '7 x 10', '5 x 10', '3 x 10', '4 x 10', '9 x 10', '10 x 10', 'All Questions Asked!'];
let inputAnsTen = [0, 60, 80, 20, 10, 70, 50, 30, 40, 90, 100];

let currentIndexTen = 0;
let totalRightTen = 0;
let totalWrongTen = 0;

// Tens function //
$('#ten').click(function(e) {
  // Checks for name input and makes error div appear if nothing is entered //
let name = document.getElementById('name').value;
   if (name === '') {
    $('.error').fadeIn(1000);
    $('.error').fadeOut(1000);
  } else {
  startCycleTen();
  $('#questions').text(inputTen[currentIndexTen]);
  $('#nextBtnTen').show();
  $('#nextBtn').remove();
  $('#nextBtnOne').remove();
  $('#nextBtnTwo').remove();
  $('#nextBtnThree').remove();
  $('#nextBtnFour').remove();
  $('#nextBtnFive').remove();
  $('#nextBtnSix').remove();
  $('#nextBtnSeven').remove();
  $('#nextBtnEight').remove();
  $('#nextBtnNine').remove();
  $('#questions').show();
  $('#qdiv').show();
  $('.toDisappear').hide();
  $('#correctAnswers').show();
  $('#incorrectAnswers').show();
  }
});

// Creates 3 second timer and ability to stop timer //
var cycleTimerTen;

function startCycleTen() {
   cycleTimerTen = setInterval(function () {
    $('#answers').val('');
    $('#nextBtnTen').click();
   }, 3000);
}

function stopCycleTen() {
   clearInterval(cycleTimerTen);
}

// Creates click function to check for right answers and add green check if correct, red x if not, update the next question and answer, and play sounds depending on input //
$('#nextBtnTen').click(function() {
let name = document.getElementById('name').value;
  if (parseInt($('#answers').val()) == inputAnsTen[currentIndexTen]) {
    document.getElementById('correctAnswers').innerHTML += '&#9989;';
    totalRightTen++;
    rightSound.play();
  } else {
    document.getElementById('incorrectAnswers').innerHTML += '&#10060;';
    totalWrongTen++;
    wrongSound.play();
  }
  currentIndexTen++;
  stopCycleTen();
  startCycleTen();
  
// Makes end of quiz work - shows total correct or if user has passed //
  $('#answers').val('');
  $('#questions').text(inputTen[currentIndexTen]);
  if (currentIndexTen >= inputAnsTen.length) {
    stopCycleTen();
    $('#nextBtnTen').hide();
    $('#answers').hide();
    $('#questions').hide();
    $('#correctAnswers').hide();
    $('#incorrectAnswers').hide();
    $('#restart').show();
    if (totalRightTen === 11) {
          document.getElementById('end').innerHTML = 'Congratulations, ' + name + ', you passed!';
          passedSound.play();
    } else {
    document.getElementById('end').innerHTML = name + ', you got ' + totalRightTen + ' right and ' + totalWrongTen + ' wrong!';
    }
  }
});

// Makes enter button work //
document.getElementById('answers').addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    $('#nextBtnTen').click();
  }
});

// Makes restart button reload the page //
$('#tryAgain').click(function() {
window.location.reload(true);
});