class User {
    id = 0;
    name = 'Octavian';

    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
    }
}

export default User;