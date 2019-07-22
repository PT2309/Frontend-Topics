// Classes in Javascript

class User{
    constructor(name, email){
        this.name = name,
        this.email = email,
        this.duration = 0
    }
    login(){
        console.log(`${this.email} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.email} has logged out`);
        return this;
    }
    updateDuration(){
        this.duration++;
        console.log(`${this.email} has a duration of ${this.duration}`);
        return this;
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(function(u){
            // 1st iteration - 'jon@kingslanding.com' !== 'danny@targ.com'
            // 2nd  iteration - 'danny@targ.com' !== 'danny@targ.com'
            return u.email !== user.email 
        })
    }
}

// new Keyword

var userOne = new User('Jon', 'jon@kingslanding.com');
var userTwo = new User('Danny', 'danny@targ.com');
var admin = new Admin('Cersei', 'cersei@destroyer.com');

var users = [userOne, userTwo];

// console.log(users);

// admin.deleteUser(userTwo);


console.log(userOne);

