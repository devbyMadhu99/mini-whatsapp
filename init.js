const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "Neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },

    {
        from: "rohit",
        to: "mohit",
        msg: "teach mc JS callbacks",
        created_at: new Date(),
    },

    {
        from: "sanjana",
        to: "madhu",
        msg: "teach component JS callbacks",
        created_at: new Date(),
    },

    {
        from: "khushi",
        to: "Anu",
        msg: "teach placement callbacks",
        created_at: new Date(),
    },

    {
        from: "Vandana",
        to: "madhu",
        msg: "teach CPU JS callbacks",
        created_at: new Date(),
    },

    {
        from: "divyanshi",
        to: "Ekta",
        msg: "teach java callbacks",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats)
    .then(() => {
        console.log("All chats inserted successfully");
    })
    .catch((err) => {
        console.log(err);
    });