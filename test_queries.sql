INSERT INTO food_entries (dateTime, foodName, calories, meal, tags, servingSize, unit)
            VALUES (NOW(), "Chicken Rice", 700, "lunch", "[\"glutten-free\"]", 1, "pounds");

UPDATE food_entries SET dateTime = NOW(),
                        foodName="Roti Prata",
                        calories: 1200,
                        meal:"snack",
                        tags:"[\"low-carb\"]",
                        servingSize: 200,
                        unit:"grams"
                        
                    