export default class ArraySchema {
    validators = [(val) => Array.isArray(val)];
  
    constructor (newValidators){
      if(newValidators) this.validators = newValidators;
    }
  
    isValid(val) {
      return this.validators.every( validator => validator(val));
    }
  
    allIntegers(){
      const validator = (array) => array.every( element => Number.isInteger(element));
      return new ArraySchema([...this.validators, validator]); 
    }
    
    custom(validFunc){
        const validator = (array) => array.every(validFunc);
        return new ArraySchema([...this.validators, validator]);
      }
  }