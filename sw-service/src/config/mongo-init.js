// eslint-disable-next-line no-undef
const swDb = db.getSiblingDB('sw-database');
swDb.auth('root', 'aguadulce');

// eslint-disable-next-line no-undef
db.createUser({
  user: 'sw-database-admin',
  pwd: 'admin-aguadulce',
  roles: [
    {
      role: 'readWrite',
      db: 'sw-database',
    },
  ],
});
