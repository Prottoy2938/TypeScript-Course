/* eslint-disable no-unused-vars */

function generateErrors(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateErrors("please type a valid email", 500);
