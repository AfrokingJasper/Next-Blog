// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  _id?: "string";
  name?: string;
  email?: string;
  message?: string;
  data?: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://fortune:jasper2000@cluster0.4ylyn7z.mongodb.net/blog-test?retryWrites=true&w=majority"
      );
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Something went wrong" });
      return;
    }

    client.close();
    console.log(newMessage);
    res.status(201).json({ message: "success", data: newMessage });
  }
}
