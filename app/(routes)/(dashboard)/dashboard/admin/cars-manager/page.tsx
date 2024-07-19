import { redirect } from "next/navigation";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { ListCars } from "./components/ListCars";
import { isAdministrator } from "@/lib/isAdministrador";


export default async function CarsManagerPage(){

    const { userId } = auth();

    if (!userId || !isAdministrator(userId)) {
        return redirect("/");
    }

    const car = await db.car.findMany({
        where: {
            userId,
        },
        orderBy: {
            createAt: "desc",
        }
    });

    return (
        <section className="">
            <article className="flex justify-between">
                <h2 className="text-2xl font-bold">
                    Manage your cars
                </h2>
                <ButtonAddCar />
            </article>
            <ListCars cars={car} />
        </section>
    )
}