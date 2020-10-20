require('dotenv').config()

const grpc = require('@grpc/grpc-js')
const protoPath = __dirname + '../../../assets/proto/book_service.proto';
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
    protoPath,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

const pkg = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
const getService = pkg.proto.GetService;

module.exports = {
    initiate: () => {
        server.addService(getService.service, {
            GetAllService: (call, callback) => {
                callback(null, ([
                    {
                        id: '1',
                        name: '1',
                        year: '1',
                    },
                    {
                        id: '2',
                        name: '1',
                        year: '1',
                    },
                    {
                        id: '3',
                        name: '1',
                        year: '1',
                    },
                ]))
            }, GetDetailService: (call, callback) => {
                callback(null, {
                    id: '2',
                    name: '1',
                    year: '1',
                })
            }
        });
    },
    start: () => {
        server.bindAsync(process.env.APP_URL + ':' + process.env.APP_GRPC_PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
            server.start();
        });
    }
}