const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoUri =
  "mongodb+srv://kevin:kevin1234@cluster0.seaqd.mongodb.net/hikevindev?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async (req: any, res: any) => {
  try {
    const session = await MongoClient.connect(mongoUri);
    const db = session.db();
    const collection = db.collection("Message");

    const sendMessageFunc = await collection.insertOne({
      customer: req.body.customer,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    res.status(200).json({
      msg: "Mensaje enviado correctamente.",
      res: sendMessageFunc,
    });
  } finally {
    await client.close();
  }
};
