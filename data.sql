USE cico_tracker;

INSERT INTO food_entries
(dateTime, foodName, calories, meal, tags, servingSize, unit)
VALUES
('2026-02-01 08:15:00', 'Oatmeal with Banana', 350, 'breakfast', JSON_ARRAY('fiber', 'fruit'), 1, 'bowl'),

('2026-02-01 12:30:00', 'Grilled Chicken Salad', 480, 'lunch', JSON_ARRAY('protein', 'low-carb'), 1, 'plate'),

('2026-02-01 15:45:00', 'Greek Yogurt', 150, 'snack', JSON_ARRAY('protein', 'dairy'), 170, 'grams'),

('2026-02-01 19:00:00', 'Spaghetti Bolognese', 650, 'dinner', JSON_ARRAY('pasta', 'beef'), 1, 'plate'),

('2026-02-01 21:30:00', 'Dark Chocolate', 180, 'snack', JSON_ARRAY('dessert', 'sweet'), 30, 'grams');
