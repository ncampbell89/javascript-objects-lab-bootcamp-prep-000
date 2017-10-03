var recipes = new Object();

updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, recipes, { [key]: value })
  return recipes 
}
