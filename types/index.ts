export interface TodosType {
    page: number,
    perPage: number,
    totalItems: number,
    totalPages: number,
    items:
    {
        collectionId: string,
        collectionName: string,
        created: string,
        id: string,
        status: string,
        text: string,
        updated: string
    }[]

}

export interface TodoType {
    collectionId: string,
    collectionName: string,
    created: string,
    id: string,
    status: string,
    text: string,
    updated: string
}