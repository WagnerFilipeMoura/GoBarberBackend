const User = require('../models/User');
const File = require('../models/File');

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['url', 'name', 'path'],
        },
      ],
    });

    return res.json(providers);
  }
}

module.exports = new ProviderController();
