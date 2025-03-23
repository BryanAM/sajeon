import { MooncakesTable } from "@/components/MooncakesTable/MooncakesTable";
import { columns } from "./colums";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default async function MooncakesEdit() {
  const data = await getData();

  return (
    <main>
      <h2>Header And Other Informations</h2>
      <MooncakesTable columns={columns} data={data} />
    </main>
  );
}
