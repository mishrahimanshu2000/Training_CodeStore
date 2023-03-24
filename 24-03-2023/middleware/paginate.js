const User = require('../model/usermodel');


function paginate() {
    return async (req, res, next) => {
        console.log('in paginate');
        const page = parseInt(req.query.pageno);
        const limit = parseInt(req.query.limit);
    
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
    
        const results = {}
    
        if (endIndex < await User.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
    
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
    
        try {
            results.results = await User.find().limit(limit).skip(startIndex).exec();
            res.returnresults = results;
            next();
        }
        catch (err) {
            console.error(err.message);
            res.json({ status: '500', message: err.message })
        }
    }
} 

exports.paginate = paginate;