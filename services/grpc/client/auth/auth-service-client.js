require('dotenv').config()
const grpc = require('@grpc/grpc-js')
const loader = require('@grpc/proto-loader')

const pathProto = process.env.PROTOBUF_AUTH_SERVICE_LINK
const packageDefinition = loader.loadSync(pathProto, {
    keepCase: true,
    longs: String,
    enum: String,
    defaults: true,
    oneofs: true
})

const pkg = grpc.loadPackageDefinition(packageDefinition)

const validation = new pkg.proto.ValidationService(`${process.env.PROTOBUF_AUTH_SERVICE_HOST}:${process.env.PROTOBUF_AUTH_SERVICE_PORT}`, grpc.credentials.createInsecure());
const get = new pkg.proto.GetService(`${process.env.PROTOBUF_AUTH_SERVICE_HOST}:${process.env.PROTOBUF_AUTH_SERVICE_PORT}`, grpc.credentials.createInsecure());

const user = {
    id: null,
    name: null,
    email: null,
    username: null
}

module.exports = {
    validate: async (token, callinject) => {
        validation.Validate({
            token: token,
        }, callinject);
    },
    getId: (token, callinject) => {
        get.GetID({
            token: token,
        }, callinject);
    },
    get: (token) => {
        get.Get({
            token: token,
        }, callinject);
    },
}

