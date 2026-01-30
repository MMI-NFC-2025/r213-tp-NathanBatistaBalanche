import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    try {
        let data = await pb.collection('maisons').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}