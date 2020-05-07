// Validadores
const {body, param, validationResult} = require('express-validator/check');
const {matchedData} = require('express-validator/filter');

module.exports = app => {
    const Maratona = app.db.models.Maratona;

    app.route('/maratona')
        .get(async (req, res) => {
            try {
                const maratona = await Maratona.findAll();
                res.json(maratona);
            } catch (error) {
                console.log(error);
                res.status(400).json({msg: 'Unexpected error'});
            }
        })
        .post([
            body('aula', 'Required field').exists(),
            body('aula', 'Invalid length').trim().isLength({min: 4, max: 255})
        ], async (req, res) => {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty())
                    return res.status(400).json({errors: errors.array()});

                let request = matchedData(req);
                let maratona = {
                    id: undefined,
                    aula: request.aula,
                }
                maratona = await Maratona.create(maratona);
                res.json(maratona);
            } catch (error) {
                console.log(error);
                res.status(400).json({msg: 'Unexpected error'});
            }
        });
};
