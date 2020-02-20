*** Mantras *** 
1. Every table must have a primary key
2. Work on 2 or 3 entities at a time
3. One to many relationships require a foreign key
4. The foreign key goes on the many side
5. Many to many requires a 3rd table
6. The 3rd table can have other columns

### TABLES: ingredients, recipes, ingredients_recipes, instructions

ingredients(many) <==> recipes(many)

recipes(one) <==> instructions(many)
### Tables details:

ingredients
- id 
- i_name

recipes
- id
- r_name

instructions
- id
- step
- description
- r_id

ingredients_recipes
- i_id
- r_id
- quantity