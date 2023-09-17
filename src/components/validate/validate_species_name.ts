

export const validateSpeciesName : (speciesName : string) => string[] | undefined= (speciesName) => {

  const errorMessages = ["Must be between 3 and 23 characters. No numbers or special characters allowed!"];

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (speciesName.length < 3 || speciesName.length > 23 || /\d/.test(speciesName) || specialChars.test(speciesName) ){
    //return validation message
    return errorMessages;
  }else{
    return undefined;
  }

};