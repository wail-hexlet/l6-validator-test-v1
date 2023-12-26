export default class NumberSchema {
    validators = [(val) => Number.isFinite(val)];
  
    isValid(val){
      return this.validators.every((validator) => validator(val));
    }
  }