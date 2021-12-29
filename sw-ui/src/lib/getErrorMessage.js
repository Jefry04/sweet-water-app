const ERRORS = {
  USER_ALREADY_CREATED: "USER_ALREADY_CREATED",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  GENERAL_ERROR: "GENERAL_ERROR"
};

const ERRORS_DESCRIPTION = {
  [ERRORS.USER_ALREADY_CREATED]: "El usuario ya se encuentra registrado en el sistema.",
  [ERRORS.INVALID_CREDENTIALS]: "Usuario y/o contraseña incorrecto",
  [ERRORS.GENERAL_ERROR]: "Lo sentimos, hubo un error en el sistema"
};

export const getErrorMessage = (errMsg) => {
  return ERRORS_DESCRIPTION[errMsg] || ERRORS_DESCRIPTION[ERRORS.GENERAL_ERROR]
}
