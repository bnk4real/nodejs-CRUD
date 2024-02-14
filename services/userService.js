const db = require('../database/postgresql');

const getPGUser = async () => {
  try {
    const result = await db.query('SELECT * FROM test_table');
    const rows = result.rows;
    return rows;
  } catch (error) {
    throw new Error('Error getting users from the database');
  }
};

const getUserById = async (id) => {
  try {
    const query = 'SELECT * FROM test_table WHERE id = $1';
    const values = [id];
    const result = await db.query(query, values);
    const user = result.rows[0];
    return user;
  } catch (error) {
    throw new Error('Error getting user by ID from the database');
  }
};

const createUser = async (id, firstname, lastname, position, userid) => {
  try {
    const query = 'INSERT INTO test_table (id, firstname, lastname, position, userid) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [id, firstname, lastname, position, userid];
    const result = await db.query(query, values);
    const newUser = result.rows[0];
    return newUser;
  } catch (error) {
    throw new Error('Error creating a new user in the database');
  }
};

const updateUser = async (id, firstname, lastname, position, userid) => {
  try {
    const query = 'UPDATE test_table SET firstname = $1, lastname = $2, position = $3, userid = $4 WHERE id = $5 RETURNING *';
    const values = [firstname, lastname, position, userid, id];
    const result = await db.query(query, values);
    const updatedUser = result.rows[0];
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating the user in the database');
  }
};

const deleteUser = async (id) => {
  try {
    const query = 'DELETE FROM test_table WHERE id = $1';
    const values = [id];
    await db.query(query, values);
  } catch (error) {
    throw new Error('Error deleting the user from the database');
  }
};

module.exports = {
  getPGUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
