import { AxiosError } from "axios";

// check for generic types


export function handleErrors(error: AxiosError) {
  const errorResponse = error.response?.data;
  // check for email validation error
  if (
    errorResponse &&
    errorResponse instanceof Object &&
    "email" in errorResponse &&
    errorResponse.email instanceof Array
  ) {
    return errorResponse.email[0];
  }

  // if the error response is of type string
  if (typeof errorResponse === "string") {
    return errorResponse;
  }

  // return if any other type of error
  return errorResponse;
}
