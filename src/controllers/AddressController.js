const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    try {
      const user_id = req.params.user_id;
      const { zip_code, street, number } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.send({ error: "user not found" });
      }

      const address = await Address.create({
        user_id,
        zip_code,
        street,
        number,
      });

      return res.send(address);
    } catch (error) {
      return res.send({ error: error.message });
    }
  },
};
