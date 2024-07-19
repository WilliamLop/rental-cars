import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import ListCars from "./components/ListCars/ListCars";
import { isAdministrator } from "@/lib/isAdministrador";


export default async function DahsboardPage() {

    const { userId } = auth();
    if(!userId){
        return redirect("/")
    }
    const cars = await db.car.findMany({
        where: {
            isPublish: true,
        },
        orderBy: {
            createAt: "desc",
        },
    });
    return (
        <div className="">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">
                    List of cars
                </h2>
            </div>
                <ListCars cars={cars}/>
        </div>
    )
}
