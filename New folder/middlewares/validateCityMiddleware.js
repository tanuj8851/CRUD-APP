const validateCityMiddleware = (req, res, next) => {
	const { city } = req.query;
	const regex = /^[a-zA-Z\s]*$/; // Only allows alphabets and spaces
  
	if (!regex.test(city)) {
	  return res.status(400).json({ message: 'Invalid city' });
	}
  
	next();
  };
  
  module.exports = validateCityMiddleware;
  