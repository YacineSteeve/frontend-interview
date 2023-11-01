import Pocketbase from 'pocketbase';

const repository = new Pocketbase('http://localhost:8090');

// await repository.admins.authWithPassword('steeveboukari9@gmail.com', '');

export default repository;
