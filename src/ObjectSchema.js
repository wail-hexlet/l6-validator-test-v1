const objLength = (obj) => Object.keys(obj).length;

export default class ObjectSchema {
  validatorsObject = null;

  constructor(newValidatorsObject){
    if(newValidatorsObject) this.validatorsObject = newValidatorsObject;
  }

  shape (newValidatorsObject){
    return new ObjectSchema(newValidatorsObject);
  }

  isValid(inspectedObject){
    if (objLength(inspectedObject) !== objLength(this.validatorsObject)) return false;
    return Object.entries(inspectedObject).every(([key, val]) => this.validatorsObject[key].isValid(val))
  }
}