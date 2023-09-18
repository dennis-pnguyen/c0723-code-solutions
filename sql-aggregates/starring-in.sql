select "name", count(*) as "totalFilms"
from "castMembers"
join "actors" as "a" using ("actorId")
join "films" as "f" using ("filmId")
join "filmGenre" as "fg" using ("filmId")
join "genres" as "g" using ("genreId")
where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
group by "g"."name";
