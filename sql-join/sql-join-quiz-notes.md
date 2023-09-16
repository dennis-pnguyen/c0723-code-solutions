# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  a column that links 2 tables together. column names must match
- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "products"
  join "suppliers" using ("supplierId");
  (this is joining everything)
  or

  select "p"."name" as "product",
  "p"."category",
  "s"."name" as "supplier",
  "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId");
  (this is using aliases)

- How do you temporarily rename columns or tables in a SQL statement?
  Aliasing "as"
- How do you create a one-to-many relationship between two tables?
  1 foreign key to link 2 tables
- How do you create a many-to-many relationship between two tables?
  multiple foreign keys to link multiple tables

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
