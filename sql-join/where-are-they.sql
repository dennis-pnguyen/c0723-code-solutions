select "a"."line1", "c"."name", "a"."district", "co"."name"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "co" using ("countryId")
