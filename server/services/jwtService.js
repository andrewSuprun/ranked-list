import jwt from 'jsonwebtoken';

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET, {expiresIn: '120sec'});
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '1d' });
}

function validateAccessToken(token) {
  try {

    const isValid = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    return isValid;
  } catch (error) {
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

