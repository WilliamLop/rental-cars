export type CalendarSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
    setDataSelected: React.Dispatch<React.SetStateAction<{from: Date | undefined; to: Date | undefined} >
    >;
    carPriceDay: string;
}