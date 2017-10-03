var recipes = new Object();

updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { [key]: value })
  return object 
}
