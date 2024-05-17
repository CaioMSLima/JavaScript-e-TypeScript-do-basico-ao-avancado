import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erros: ['Login required'],
    });
  }
  // eslint-disable-next-line max-len
  // Do ythis becase the authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJjYWlvQGdhbWlsLmNvbSIsImlhdCI6MTcxNDIyOTg3OCwiZXhwIjoxNzE0ODM0Njc4fQ.DPn4sTBfhhtS6TTwUX3E-eP-K7n54w1WbD3hjbCHolQ
  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      erros: ['Invalid or expired token'],
    });
  }
};
