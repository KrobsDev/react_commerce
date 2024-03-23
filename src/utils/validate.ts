export enum ValidationType {
  FNAME = "fname",
  LNAME = "lname",
  EMAIL = "email",
  PASSWD = "password",
}

export function validate(param: string, type?: ValidationType): string | true {
  let regex: RegExp | null = null;
  let message: string = "";
  let typeName: string = "";

  switch (type) {
    case ValidationType.FNAME:
      regex = /^[a-z0-9]{2,}$/i;
      message = "Enter a valid name";
      typeName = "First name";
      break;
    case ValidationType.LNAME:
      regex = /^[a-z0-9]{2,}$/i;
      message = "Enter a valid name";
      typeName = "Last name";
      break;

    case ValidationType.EMAIL:
      regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
      message = "Email regex failed";
      typeName = "Email";
      break;

    case ValidationType.PASSWD:
      regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_.]{8,}$/gim;
      message = "Password regex failed";
      typeName = "Password";
      break;

    default:
      break;
  }

  if (!param) {
    return typeName + " field cannot be empty";
  }
  if (regex && !regex?.test(param)) {
    return message;
  } else {
    return true;
  }
}
