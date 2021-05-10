const Adminauth = require('../models/Adminauth');
const bcrypt = require('bcrypt');

const createAdmin = async () => {
    const exist = await Adminauth.find();

    if (exist.length == 0) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        const hashedPassword = await bcrypt.hash('123456', salt);
        const adminauth = Adminauth({
            username: 'admin',
            password: hashedPassword
        }); 
        try {           
            await adminauth.save();
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = createAdmin;