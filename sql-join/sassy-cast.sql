select "a". "firstName", "a"."lastName"
from "castMembers"
join "films" as "f" using ("filmId")
join "actors" as "a" using ("actorId")
where "title" = 'Jersey Sassy';
