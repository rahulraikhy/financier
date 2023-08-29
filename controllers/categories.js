const { model } = require("mongoose");
const CategoriesModel = require("../models/model");

async function create_Categories(req, res) {
    const Create = new CategoriesModel.Categories({
        type: "Savings",
        color: "#1F3B5C"
    });

    await Create.save(function (err) {
        if (!err) return res.json(Create);
        return res.status(400).json({ message: `Error while creating categories ${err}` });
    });
}

async function get_Categories(req, res) {
    let data = await model.Categories.find({})

    let filter = await data.map(value => Object.assign({}, { type: value.type, color: value.color }));
    return res.json(filter);
}

module.exports = {
    create_Categories,
    get_Categories
};
