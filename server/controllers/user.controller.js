import bcrypt from 'bcrypt-nodejs';

// generating a hash
export function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// checking if password is valid
export function validPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
};