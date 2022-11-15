import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { emailService } from '../services/emailService.js';
import { ApiError } from '../exceptions/ApiError.js';
import { Token, User } from '../models/models.js';


function getByEmail(email) {
  return User.findOne({
    where: { email },
  });
}

async function  getByToken() {
  const user =  await User.findOne({
    include: {
      model: Token,
      required: true
    }
  });
  return normalize(user)
}

function normalize({ id, email }) {
  return { id, email };
}

async function register({ email, password }) {
  const existingUser = await getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('Validation error', {
      email: 'Email is already taken',
    });
  }

  const activationToken = uuidv4();
  const hash = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hash,
    activationToken,
  });

  await emailService.sendActivationLink(email, activationToken);
}

export const userService = {
  normalize,
  getByEmail,
  getByToken,
  register,
};

uuidv4();