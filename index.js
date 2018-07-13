var papGenos = [];

function takeANumber (line, name) {
  line.push(name);
  return line.length + 1
}

function nowServing (line) {
  var currentPatron = line.shift()
  return currentPatron
}

function currentLine (line) {
  var lineString = 'The line is currently:';
  var nameString;
  if (line.length < 1) {
    lineString = "The ling ist currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      if (i === 0) {
        nameString = `${i+1}. ${line[i]}`;
      } else {
        nameString = nameString + `, ${i+1} ${line[i]}`
      }
    } 
    
    lineString += nameString;
  }
  
  return lineString
  
}