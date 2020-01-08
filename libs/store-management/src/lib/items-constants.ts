export interface CartItems {
    id: string;
    title: string;
    authors: string;
    image: string;
    amount: number;
    count: number;
}

export interface Item {
    id: string;
    title: string;
    subTitle: string;
    authors: string;
    image: string;
    mrpAmount: number;
    discountAmount: number;
    description: string;
    publisher: string;
    publishdate: string;
    currencyCode: string
}