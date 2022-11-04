import jwt from 'jsonwebtoken';

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET);
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '1d' });
}

function validateAccessToken(token) {
  try {

    const isValid = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    console.log('isValid',isValid)
    return isValid;
  } catch (error) {
    console.log('Token =>',token, 'Secret key =>', process.env.JWT_ACCESS_SECRET)
    console.log('error jwt acces token', error)
    return null;
  }
}

function validateRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
}

export const jwtService = { 
  generateAccessToken,
  generateRefreshToken,
  validateAccessToken,
  validateRefreshToken,
};

