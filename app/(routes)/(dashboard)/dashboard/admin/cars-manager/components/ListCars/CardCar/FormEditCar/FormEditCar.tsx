"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormEditCar.form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import axios from 'axios'
import { useRouter } from "next/navigation"
import { FormEditCarProps } from './FormEditCar.types'

export default function FormEditCar(props: FormEditCarProps) {

    const { carData, setOpenDialog } = props;

    const [photoUploaded, setPhotoUploaded] = useState(false);
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: carData.name,
            cv: carData.cv,
            transimission: carData.transimission,
            people: carData.people,
            engine: carData.engine,
            photo: carData.photo,
            type: carData.type,
            priceDay: carData.priceDay,
            isPublish: carData.isPublish ? carData.isPublish : false,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setOpenDialog(false);
        try {
            await axios.patch(`/api/car/${carData.id}/form`, values);
            toast({
                title: "Car updated successfully ✅",
            })
            router.refresh();
        } catch (error) {
            toast({
                title: "Something went wrong",
                variant: "destructive"
            })
        }
    }

    const { isValid } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Carname</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tesla Model s Ipad" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cv"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Power</FormLabel>
                                <FormControl>
                                    <Input placeholder="150 CV" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="transimission"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transmission</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the type of car" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="manual">Manual</SelectItem>
                                        <SelectItem value="Automatic">Automatico</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="people"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>People</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the quantity of people" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                        <SelectItem value="7">7</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="engine"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Engine</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the engine of the car" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="gasoli">Gasolina</SelectItem>
                                        <SelectItem value="diesel">Diesel</SelectItem>
                                        <SelectItem value="electric">Eléctrico</SelectItem>
                                        <SelectItem value="hybrid">Híbrido</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the type of car" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="sedan">Sedan</SelectItem>
                                        <SelectItem value="suv">Suv</SelectItem>
                                        <SelectItem value="coupe">Coupé</SelectItem>
                                        <SelectItem value="luxe">de luxe</SelectItem>
                                        <SelectItem value="familiar">Familiar</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="photo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Profile Car Image</FormLabel>
                                <FormControl>
                                    {photoUploaded ? (<p className="">Image uploaded! ✅</p>) : (
                                        <UploadButton
                                            className="rounded-lg bg-slate/20 text-slate-800 outline-dotted outline-3"
                                            {...field}
                                            endpoint="photo"
                                            onClientUploadComplete={(res) => {
                                                form.setValue("photo", res?.[0].url);
                                                setPhotoUploaded(true);
                                            }}
                                            onUploadError={(error: Error) => {
                                                console.log(error)
                                            }}
                                        />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="priceDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price Day</FormLabel>
                                <FormControl>
                                    <Input placeholder="20$" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="w-full mt-5" disabled={!isValid}>Update car</Button>
            </form>
        </Form>
    )
}
