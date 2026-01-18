export type ServiceType = {
    id: string;
    name: string;
    price: number;
}

export type ServicesType = {
    services: ServiceType[]
}

export type DetailsType = {
    id: string;
    name: string;
    price: number;
    content: string;
}

export type ResponseType = {
    res: ServicesType;
    body: null;
    status:number;
};