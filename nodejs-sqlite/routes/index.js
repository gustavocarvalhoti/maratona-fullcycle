module.exports = app => {
    app.get('/', (req, res) => {
        let result = {
            status: "Servidor OK",
            urls: [
                {"get": "http://localhost:3000/maratona"},
                {
                    "post": {
                        url: "http://localhost:3000/maratona",
                        body: "{\n" +
                            "\t\"aula\": \"REACT\"\n" +
                            "}"
                    }
                }
            ]
        }

        res.json(result);
    });

};
