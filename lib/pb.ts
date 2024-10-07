import PocketBase from 'pocketbase';

const POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL;

if (!POCKETBASE_URL) {
    throw new Error('NEXT_PUBLIC_POCKETBASE_URL ortam değişkeni ayarlanmamış.');
}

export const pb = new PocketBase(POCKETBASE_URL);


pb.autoCancellation(false);