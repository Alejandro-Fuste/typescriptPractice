interface User {
    email : string;
    firstName? : string;
    lastName? : string;
}

function profile(user: User) : string {
    return `Welcome, ${user.email}`;
}

var fakeUser = {
    email: 'test@test.com',
    // firstName: 'Jordan',
    // lastName: 'Hudgens',
}

console.log(profile(fakeUser));