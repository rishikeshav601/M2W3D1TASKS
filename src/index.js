const express = require('express');
const app = express();

const routes = require('./routers/route');

app.use(express.json());


app.listen(3000, () => {
    console.log("server is running");
});

// task10
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use('/', routes);

