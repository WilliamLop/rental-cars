"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import FormaddCar from "../FormAddCar/FormaddCar";

export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Add new car
                    <PlusCircle className="ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormaddCar setOpenDialog={setOpenDialog}/>      
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}