'use strict';

var MOCK_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var MOCK_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var MOCK_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var MOCK_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

// вот тут не уверен, может быть проще было завадать сразу '#id' '.class'
// т.к. дальше приходится делать такое: querySelector('#' + templateID)
var WIZARD_TEMPLATE_ID = 'similar-wizard-template';
var WIZARDS_LIST_CLASS = 'setup-similar-list';

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// не избыточно ли? можно каждый раз писать getRandomInRange(0, array / length - 1) а не использовать функцию
var getRandomIndex = function (array) {
  return getRandomInRange(0, array.length - 1);
};

var showElement = function (selector) {
  var element = document.querySelector(selector);
  element.classList.remove('hidden');
};

var generateMockWizards = function (names, surNames, coatColors, eyesColors, count) {
  var mockWizards = [];
  var fullName = '';
  for (var i = 0; i < count; i++) {
    if (getRandomInRange(0, 1) === 0) {
      fullName = names[getRandomIndex(names)] + ' ' + surNames[getRandomIndex(surNames)];
    } else {
      fullName = surNames[getRandomIndex(surNames)] + ' ' + names[getRandomIndex(names)];
    }
    var mockWizard = {
      name: fullName,
      coatColor: coatColors[getRandomIndex(coatColors)],
      eyesColor: eyesColors[getRandomIndex(eyesColors)]
    };
    mockWizards.push(mockWizard);
  }
  return mockWizards;
};

var generateWizardElement = function (templateID, wizard) {
  var template = document.querySelector('#' + templateID).content.querySelector('div');
  var element = template.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = wizard.name;
  element.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return element;
};

var fillWizardsList = function (wizardsListClass, wizardTemplateID, wizards) {
  var fragment = document.createDocumentFragment();
  var wizardsList = document.querySelector('.' + wizardsListClass);
  for (var l = 0; l < wizards.length; l++) {
    fragment.appendChild(generateWizardElement(wizardTemplateID, wizards[l]));
  }
  wizardsList.appendChild(fragment);
};

showElement('.setup');
var generatedWizards = generateMockWizards(MOCK_NAMES, MOCK_SURNAMES, MOCK_COAT_COLORS, MOCK_EYES_COLORS, WIZARDS_COUNT);
fillWizardsList(WIZARDS_LIST_CLASS, WIZARD_TEMPLATE_ID, generatedWizards);
showElement('.setup-similar');
