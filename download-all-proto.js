require('dotenv').config()

const fs = require("fs");
const http = require("http");

// auth service
downloadProto(process.env.PROTOBUF_AUTH_SERVICE_LINK, __dirname + '/services/grpc/client/auth/auth_service.proto')

function downloadProto(link, filePath) {
    const file = fs.createWriteStream(filePath);
    http.get(link, response => {
        response.pipe(file);
    });
}