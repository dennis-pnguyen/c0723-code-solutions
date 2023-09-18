select "co"."name", count(*) as "totalCities"
from "cities"
join "countries" as "co" using ("countryId")
group by "co"."name";
