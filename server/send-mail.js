import 'dotenv/config';
import { send } from './services/emailService.js';

send({
  email: 'suprunand2016@gmail.com',
  subject: 'Test',
  html: '123',
})