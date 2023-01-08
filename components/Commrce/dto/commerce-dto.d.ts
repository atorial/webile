/**
 * trait for e-commerce item details
 * @param {string} name - name of the item
 * @param {string} brand - brand or make  of the item
 * @param {string} description - description  of the item
 * @param {string} categories - main categories for the item
 * @param {string} price - price of the item
 * @param {string} image - image of the item
 * */
export default interface CommerceDto {
    name: string;
    brand: string;
    description: string;
    categories: string[];
    price: string;
    image: string;
    popularity: number;
}