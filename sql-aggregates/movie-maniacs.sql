select "c"."firstName", "c"."lastName", sum("amount") as "totalPaid"
from "payments"
join "customers" as "c" using("customerId")
group by ("customerId")
order by "totalPaid" desc;
