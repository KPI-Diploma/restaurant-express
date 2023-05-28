const CATEGORIES_QUERY = `
  SELECT
    c.name AS category_name,
    c.uuid AS category_uuid,
    d.name AS dish_name,
    d.uuid AS dish_uuid,
    d.image AS dish_image
  FROM
    categories c
  LEFT JOIN
    dishes d ON c.uuid = d.category_uuid
`;


module.exports = {
    CATEGORIES_QUERY
};