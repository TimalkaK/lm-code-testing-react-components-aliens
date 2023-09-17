export const validateWhatIs2Plus2 : (selectedValue : string) => string[] = (selectedValue) => {

  const errorMessages = ["You have made an incorrect calculation"];

  if (selectedValue === "Not 4" ){
    //return validation message
    return errorMessages;
  }else{
    return [];
  }

};