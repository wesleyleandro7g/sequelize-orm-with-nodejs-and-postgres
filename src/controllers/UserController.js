const User = require("../models/User");
const Address = require("../models/Address");

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

  async selectOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        include: { model: Address, as: "address" },
      });

      if (!user) {
        return res.send({ error: "user not found" });
      }

      // const address = await Address.findAll({
      //   where: {
      //     user_id: id,
      //   },
      // });

      return res.send({ user: user, address: address });
    } catch (error) {
      return res.send({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      await User.destroy({ where: { id } });

      return res.send("ok");
    } catch (error) {
      console.log(error);
      return res.send({ error: error.message });
    }
  },
};
