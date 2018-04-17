export function isRequired(value) {
  if (!value) {
    return true;
  } else if (value.trim().length === 0) {
    return true;
  }
  return undefined;
}
export function isEmail(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
}
export function isLength(value, requiredLenght) {
  if (value.trim().length <= requiredLenght) {
    return true;
  }
  return undefined;
}

export function validatePassword(value1, value2){
  if (value1 === value2){
    return true;
  }
  else return false;
}