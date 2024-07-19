

export type FiltersCarsProps = {
    setFilters: (filterName: string, filterValue: string ) => void;
    clearFilters: () => void;
    filters: {
        type: string;
        transimission: string;
        engine: string;
        people: string
    }
}