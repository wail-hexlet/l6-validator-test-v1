const objLength = (obj) => Object.keys(obj).length;
const isPlainObject = (obj) => Object.getPrototypeOf(obj) === Object.prototype;

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
    
    const validDeepObj = (inspectedObj, validatorsObject) => {

      return Object.entries(inspectedObj).every(([key, val]) => {

        if (!isPlainObject(inspectedObj[key])) return validatorsObject[key].isValid(val);   
        
        return validDeepObj(inspectedObj[key], validatorsObject[key])
        })                   
      }
    
    return validDeepObj(inspectedObject, this.validatorsObject);
  }
}