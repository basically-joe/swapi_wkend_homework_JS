const PubSub = require('../helpers/pub_sub.js');

const StarWarsCharacterView = function(container, charactersData) {
  this.characterContainer = container;
  this.charactersData = charactersData;
};

StarWarsCharacterView.prototype.render = function () {
  // console.log(this.charactersData);

  const characterContainer = document.createElement('div');
  characterContainer.classList.add(`${this.charactersData.gender}`);

  const characterName = this.createHeadingElement();
  characterContainer.appendChild(characterName);

  const detailList = this.createListElement();
  characterContainer.appendChild(detailList);

  const characterHeight = this.createHeightElement();
  detailList.appendChild(characterHeight)

  const characterMass = this.createMassElement();
  detailList.appendChild(characterMass)

  const characterGender = this.createGenderElement();
  detailList.appendChild(characterGender)

  this.characterContainer.appendChild(characterContainer);


};

StarWarsCharacterView.prototype.createHeadingElement = function () {
  const name = document.createElement('h2');
  name.classList.add('character-name');
  name.textContent = this.charactersData.name;
  return name;
};

StarWarsCharacterView.prototype.createListElement = function () {
  const list = document.createElement('ul');
  list.classList.add('character-detail-list');
  return list;
};

StarWarsCharacterView.prototype.createHeightElement = function () {
  const height = document.createElement('li');
  height.textContent = `Height: ${this.charactersData.height}`;
  return height;
};

StarWarsCharacterView.prototype.createMassElement = function () {
  const mass = document.createElement('li');
  mass.textContent = `Mass: ${this.charactersData.mass}`;
  return mass;
};

StarWarsCharacterView.prototype.createGenderElement = function () {
  const gender = document.createElement('li');
  gender.textContent = `Gender: ${this.charactersData.gender}`;
  return gender;
};

module.exports = StarWarsCharacterView;
