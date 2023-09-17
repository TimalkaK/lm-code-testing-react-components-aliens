export const validateNumberOfBeings : (numberOfBeings : number) => string[] | undefined= (numberOfBeings) => {

  const errorMessages = ["Numbers ONLY. Must be at least 1,000,000,000."];

  if (isNaN(numberOfBeings) || numberOfBeings < 1000000000){
    //return validation message
    return errorMessages;
  }else{
    return undefined;
  }

};