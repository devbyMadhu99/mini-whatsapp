# 💬 Mini WhatsApp

A simple chat application built using **Node.js, Express.js, EJS, and MongoDB**. This project demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations to manage chat messages.

## 📌 About the Project

Mini WhatsApp is a web-based chat application inspired by messaging platforms. It allows users to manage chat messages through a dynamic web interface. The application uses Express.js for routing, EJS for rendering dynamic pages, and MongoDB to store chat data.

This project was developed to practice backend development, database integration, server-side rendering, and RESTful routing.

## ✨ Features

- 💬 Create new chat messages
- 📃 View existing chats
- ✏️ Edit chat messages
- 🗑️ Delete chat messages
- 🗄️ Store chat data in MongoDB
- 🔄 Perform CRUD operations
- 🌐 Render dynamic pages using EJS
- ⚙️ Handle application routes using Express.js

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for the backend |
| Express.js | Server and routing |
| EJS | Dynamic server-side page rendering |
| MongoDB | Database for storing chat messages |
| Mongoose | MongoDB object modeling |
| HTML5 | Web page structure |
| CSS3 | Styling and layout |
| JavaScript | Application logic |

## 📂 Project Structure

```text
mini-whatsapp/
├── models/
│   └── chat.js
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
├── public/
│   └── style.css
├── init.js
├── index.js
├── package.json
└── README.md
```

*Note: This is a representative structure. Adjust the filenames and folders to match your actual repository.*

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB installed locally or a MongoDB connection URI
- Git

### Installation

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd mini-whatsapp
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the application**

Run the start command configured in your `package.json`. If the entry file is `index.js`, you can use:

```bash
node index.js
```

**5. Open the application**

Visit the local URL configured by your application, commonly:

```text
http://localhost:8080
```

*Make sure the port matches the one configured in your code.*

## 🔄 CRUD Operations

- **Create:** Add a new chat message.
- **Read:** Display saved chat messages.
- **Update:** Edit an existing message.
- **Delete:** Remove a message from the database.

## 🎯 Learning Outcomes

- Understanding Node.js and Express.js
- Creating routes and handling HTTP requests
- Working with MongoDB and Mongoose
- Rendering dynamic pages using EJS
- Implementing CRUD operations
- Connecting a backend application to a database

## 👩‍💻 Author

**Madhu Yadav**

- GitHub: [@devbyMadhu99](https://github.com/devbyMadhu99)

---

*Built as a hands-on project to practice backend web development.* 💚
