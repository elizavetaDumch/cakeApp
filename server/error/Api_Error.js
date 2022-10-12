class Api_Error extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static bad_Request (message){
        return new Api_Error(484, message)
    }

    static internal (message){
        return new Api_Error(500, message)
    }

    static forbidden (message){
        return new Api_Error(403, message)
    }
}

module.exports =  Api_Error