import { ApiError } from '../exceptions/ApiError.js';
import { jwtService } from '../services/jwtService.js';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log('==========authMidle', authHeader)

  if (!authHeader) {
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtService.validateAccessToken(accessToken);
  console.log(userData)

  if (!userData) {
    console.log('============= 22 line userData',userData)
    throw ApiError.Unauthorized();
  }

  next();
}