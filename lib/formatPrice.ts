export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-Es" , {
        style: "currency",
        currency: "USD",
    }).format(price)
}