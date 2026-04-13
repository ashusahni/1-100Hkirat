import path from 'path'
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, 'a.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)

const personProto = protoDescriptor.addressbook

const PERSON = []

//@ts-ignore
function addPerson(call, callback) {
  const { name, age } = call.request
  const person = { name, age }
  PERSON.push(person)
  console.log("Person added:", person)
  callback(null, person)
}

const server = new grpc.Server()

//@ts-ignore
server.addService(personProto.AddressBookService.service, { addPerson })
//@ts-ignore
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) throw err
  console.log(`✅ gRPC server running at http://127.0.0.1:${port}`)
  server.start()
})
