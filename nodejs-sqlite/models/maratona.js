module.exports = (sequelize, DataType) => {
    const Maratona = sequelize.define('Maratona', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aula: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Maratona;
};
