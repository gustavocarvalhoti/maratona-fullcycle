import * as _bcrypt from 'bcrypt';

const saltRounds = 10;

// Criptografar
export const bcrypt = (value): string => {
    return _bcrypt.hashSync(value, saltRounds);
};

// Quando precisar comparar
export const compareHash = (value, hash): boolean => {
    return _bcrypt.compareSync(value, hash);
};
