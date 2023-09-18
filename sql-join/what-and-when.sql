select "f"."releaseYear", "g"."name", "f"."title"
from "filmGenre"
join "films" as "f" using ("filmId")
join "genres" as "g" using ("genreId")
where "f"."title" = 'Boogie Amelie';
