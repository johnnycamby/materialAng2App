
/* Car entity  */
export interface ICar {
    id: number;
    carName: string;
    carModel: string;
    description: string;
    rating: number;
    imageUrl: string;
    tags?: string[];
    company: string;
}
