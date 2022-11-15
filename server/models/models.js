import pkg from 'sequelize'
const { DataTypes } = pkg
import { sequelize } from '../db.js'

export const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activationToken: {
    type: DataTypes.STRING,
  },
})

export const Name = sequelize.define('name', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  rank: { type: DataTypes.INTEGER }
})

export const Token = sequelize.define('token', {
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Token.belongsTo(User);
User.hasOne(Token);

Name.belongsTo(User);
User.hasMany(Name);