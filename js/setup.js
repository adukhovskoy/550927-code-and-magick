'use strict';

var MOCK_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var MOCK_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var MOCK_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var MOCK_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var showElement = function (selector) {
  var element = document.querySelector(selector);
  element.classList.remove('hidden');
};

var generateMockWizards = function (names, surNames, coatColors, eyesColors, count) {
  var mockWizards = [];
  for (var i = 0; i < count; i++) {
    var mockWizard = {
      name: names[getRandomInRange(0, names.length - 1)] + ' ' + surNames[getRandomInRange(0, surNames.length - 1)],
      coatColor: coatColors[getRandomInRange(0, coatColors.length - 1)],
      eyesColor: eyesColors[getRandomInRange(0, eyesColors.length - 1)]
    };
    mockWizards.push(mockWizard);
  }
  return mockWizards;
};

showElement('.setup');
generateMockWizards(MOCK_NAMES, MOCK_SURNAMES, MOCK_COAT_COLORS, MOCK_EYES_COLORS, WIZARDS_COUNT);
showElement('.setup-similar');
