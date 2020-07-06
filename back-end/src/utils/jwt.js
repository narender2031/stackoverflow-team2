const jwt = require('jsonwebtoken');
require("dotenv").config();
module.exports.sign = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const payload = {
        id: user._id,
        username: user.username,
      };

      jwt.sign(
        payload,
        process.env.SECRET,
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) {
            reject(err);
          }

          resolve(token);
        },
      );
    } catch (error) {
      reject(error);
    }
  });
};

module.exports.verify = (JWTtoken) => {
  try {
    console.log(process.env.JWT_KEY);
    
    const tokenData = jwt.verify(JWTtoken, process.env.SECRET);
    return tokenData;
  } catch (error) {
    console.log(error);
    return {};
  }
};
