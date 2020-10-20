const httpServe = require("./services/http/server")
const grpcServe = require("./services/grpc/server")

// start grpcServe 
grpcServe.initiate()
grpcServe.start()

// start httpServer 
httpServe.initiate()
httpServe.start()