const jwt = require ("jsonwebtoken");

const Tokengenreter = (id,Name,Email)=>
{
    const token = jwt.sign({id,Name,Email}, process.env.JWT_SECRET, {expiresIn: 3143535});
    return token;
}
module.exports = {Tokengenreter} 


