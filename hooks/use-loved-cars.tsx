import { toast } from '@/components/ui/use-toast'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Car } from '@prisma/client'

interface UseLovedCarsType {
    lovedItems: Car[],
    addLovedItem: (cata: Car ) => void,
    removeLovedItem:(id: string) => void
}

export const useLovedCars =create (
    persist<UseLovedCarsType>(
        (set,get) => ({
            lovedItems: [],
            addLovedItem: (data: Car) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find((item) => item.id === data.id) 
            

            if(existingItem){
                return toast({
                    title: "El coche ya existe en la lista ❌"
                })
            }

            set({
                lovedItems: [...get().lovedItems,data]
            })
            toast({
                title: "Coche añadido a las lista ✅",
                variant: "acertive"

            })
        },

        removeLovedItem: (id: string) => {
            set({
                lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
            })
            toast({
                title: "El coche se ha eliminado de la lista ❌",
                variant: "destructive"
            })
        }
        }),
        {
            name: 'loved-products-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)