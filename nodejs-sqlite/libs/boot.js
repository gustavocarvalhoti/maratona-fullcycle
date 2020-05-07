module.exports = app => {
    app.db.sequelize.sync()
        .done(() => {
            const port = app.get('port');
            app.listen(port, () => console.log(`Maratona API rodando na porta ${port}`));
        });
};
