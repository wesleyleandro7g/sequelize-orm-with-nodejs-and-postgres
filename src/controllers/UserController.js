const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },

  async selectAll(req, res) {
    const user = await User.findAll();

    return res.json(user);
  },

  async select(req, res) {
    const { id } = req.body;
    const user = await User.findByPk(id);

    return res.json(user);
  },
};
