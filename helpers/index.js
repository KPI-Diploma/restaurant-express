const formatCategories = (rows, domain = '') => {
    const categoriesMap = new Map();

    rows.forEach((row) => {
        const { category_name, category_uuid, dish_name, dish_uuid, dish_image } = row;

        if (!categoriesMap.has(category_uuid)) {
            categoriesMap.set(category_uuid, {
                name: category_name,
                uuid: category_uuid,
                dishes: [],
            });
        }

        const category = categoriesMap.get(category_uuid);
        category.dishes.push({
            name: dish_name,
            uuid: dish_uuid,
            image: `${ domain }/images/${ dish_image }`,
        });
    });

    return Array.from(categoriesMap.values());
};

const formatDishes = (rows, domain = '') => {
    const dishes = [];

    rows.forEach((row) => {
        const { dish_name, dish_uuid, dish_image } = row;

        dishes.push({
            name: dish_name,
            uuid: dish_uuid,
            image: `${ domain }/images/${ dish_image }`,
        });
    });

    return dishes;
};

const formatPredictions = (predictions) => {
    return predictions.map((dish) => {
        return dish.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    });
};

module.exports = {
    formatCategories,
    formatPredictions,
    formatDishes,
};