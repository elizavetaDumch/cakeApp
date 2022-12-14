const Api_error = require ('../error/Api_Error');

module.exports = function (err, req, res, next) {
    console.log(`Unhandled error: ${err}`);
    if (err instanceof Api_error) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "Непредвиденная ошибка!!" });
}
