const Juice = require('./../models/juice.models')

module.exports = {
    getAll: (req, res) => {
        Juice.find()
            .then((smoothies) => res.json(smoothies))
            .catch((err) => res.json(err));
    },
    getOne: (req, res) => {
        Juice.findOne({_id: req.params.id})
            .then((smoothie) => res.json(smoothie))
            .catch((err) => res.json(err));
    },
    create: (req, res) => {
        console.log(req.body);
        Juice.create(req.body)
            .then((newSmoothie) => res.json(newSmoothie))
            .catch((err) => res.json(err));
    },
    update: (req, res) => {
        console.log(req.body);
        Juice.updateOne({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        })
            .then((updatedSmoothie) => res.json(updatedSmoothie))
            .catch((err) => res.json(err));
    },
    delete: (req, res) => {
        Juice.deleteOne({_id: req.params.id})
            .then((success) => res.json(success))
            .catch((err) => res.json(err));
    }
};