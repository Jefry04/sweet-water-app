// Check if it contains a alphabetic character
const isAlpha = (str) => {
  let expAlpha = /[a-zA-Z]/g;
  return str.match(expAlpha) !== null
}

// Check if it contains a numeric character
const isNumStr = (str) => {
  let expNum = /[0-9]/g;
  return str.match(expNum) !== null
}

const containsWhiteSpace = (str) => {
  let expSpace = /\s/;
  return str.match(expSpace) !==null;
}
const isAlphaNumeric = (str) => {
  return isAlpha(str) && isNumStr(str);
};

export const passwordValidator = (password) => {
  if (password) {
    const isLong = password.length >= 6;
    const isAlphaNum = isAlphaNumeric(password);
    if (isLong && isAlphaNum) {
      return {
        isValid: true,
      };
    } else if (!isLong && isAlphaNum) {
      return {
        isValid: false,
        error: 'La constraseña debe tener al menos 6 caracteres.',
      };
    } else if (isLong && !isAlphaNum) {
      return {
        isValid: false,
        error: 'La constraseña debe ser alfanumérica.',
      };
    }
  }

  return {
    isValid: false,
    error: 'La constraseña debe ser alfanumérica y tener al menos 6 caracteres.',
  };
};

export const usernameValidator = (username) => {
  if (username) {
    const isLong = username.length >= 4;
    const isSpace = containsWhiteSpace(username);
    if (isLong && !isSpace) {
      return {
        isValid: true,
      };
    } else if (!isLong && !isSpace) {
      return {
        isValid: false,
        error: 'La constraseña debe tener al menos 4 caracteres.',
      };
    } else if (isLong && isSpace) {
      return {
        isValid: false,
        error: 'La constraseña no puede tener espacios.',
      };
    }
  }

  return {
    isValid: false,
    error: 'El usuario debe tener al menos 4 caracteres',
  };
}

export const notEmptyValidator = (str) => {
  if (str) {
    if(str.length > 0) {
      return {
        isValid: true,
      };
    }
  }
  return {
    isValid: false,
    error: 'El campo no puede estar vacío.',
  };
}
