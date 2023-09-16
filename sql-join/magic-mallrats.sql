select "c"."firstName", "c"."lastName"
from "rentals"
join "inventory" as "i" using ("inventoryId")
join "customers" as "c" using ("customerId")
join "films" as "f" using ("filmId")
where "title" = 'Magic Mallrats';
