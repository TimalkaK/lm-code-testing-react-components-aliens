export const validatePlanetName : (planetName : string) => string[] | undefined= (planetName) => {

  const errorMessages = ["Must be between 2 and 49 characters. Numbers are allowed, but no special characters."];

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (planetName.length < 2 || planetName.length > 49 || specialChars.test(planetName) ){
    //return validation message
    return errorMessages;
  }else{
    return undefined;
  }

};