let users = [];

//task1:Basic Server Setup
const basicServer = (req, res) => {
    res.send("server is running!!");
}
//task2
const helloWorldAPI = (req, res) => {
    // const data = req.body ;
    // console.log(data) ;
    res.json({ message: "Hello World!" });
}

//task3
const postRequest = (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}`);
}

//task4
const simpleArray = (req, res) => {
    const { id, name } = req.body;
    const newUser = { id, name };
    users.push(newUser);
    res.json(newUser);
}

//task5
const allUsers = (req, res) => {
    res.send(users);
}

//task6
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id == id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "user not found" });
    }
}

//task7
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find((u) => u.id == id);
    if (user) {
        user.body = name;
        res.json(user);
    }
    else {
        res.status(404).json({ message: "user not found" });
    }
}

//task8
const deleteUser = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((u) => u.id == id);

    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

//task9
const countUsers = (req, res) => {
    res.json({ count: users.length });
};


module.exports = { basicServer, helloWorldAPI, postRequest, simpleArray, allUsers, getUserById, updateUser, deleteUser,countUsers };