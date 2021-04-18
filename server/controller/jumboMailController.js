const jumbo = require('../extractFromXlsx');

exports.jumboMail = async (req, res, next) => {
    const data = await jumbo.readXlsx();
    return res.status(200).json(data);
}