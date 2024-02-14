const userService = require('../services/userService');

const getPGUser = async (req, res) => {
  try {
    const users = await userService.getPGUser();
    res.json(users);
  } catch (error) {
    console.error('Error getting users from PostgreSQL', error);
    res.status(500).json({ error: 'An error occurred while fetching users from the database' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (error) {
    console.error('Error getting user by ID', error);
    res.status(500).json({ error: 'An error occurred while fetching user by ID' });
  }
};

const createUser = async (req, res) => {
  const { id, firstname, lastname, position, userid } = req.body;
  try {
    const newUser = await userService.createUser(id, firstname, lastname, position, userid);
    res.json(newUser);
  } catch (error) {
    console.error('Error creating a new user', error);
    res.status(500).json({ error: 'An error occurred while creating a new user' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, position, userid } = req.body;
  try {
    const updatedUser = await userService.updateUser(id, firstname, lastname, position, userid);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating the user', error);
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    await userService.deleteUser(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting the user', error);
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
};

module.exports = {
  getPGUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
