const Category = require("../models/category");

async function createCategory(req, res) {
    const category = new Category(req.body);
    try {
        await category.save();
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getAllCategories(req, res) {
    try {
        let categories = await Category.find(
            { title: { $ne: "More" } },
            { _v: 0 }
        );

        const more = await Category.findOne({ value: "more" }, { _v: 0 });

        if (more) categories.push(more);

        res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            data: categories,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getRandomCategories(req, res) {
    try {
        const categories = await Category.aggregate([
            { $match: { value: { $ne: "more" } } },
            { $sample: { size: 4 } },
        ]);
        res.status(200).json({
            success: true,
            message: "Random categories fetched successfully",
            data: categories,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { createCategory, getAllCategories, getRandomCategories };
