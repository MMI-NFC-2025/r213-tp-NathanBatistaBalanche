import PocketBase from 'pocketbase';
const db = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    try {
        let data = await db.collection('maisons').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}