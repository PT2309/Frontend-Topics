// Prototype Model

function User(name, email){
    this.name = name;
    this.email = email;
    this.availability = false;
}

User.prototype.login = function(){
    this.availability = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.availability = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    this.status = 'Main admin';
    User.apply(this, args)

    // spread operator
    // rest parameters
    // bind() and call()
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
    users = users.filter( u => {
        return u.email !== user.email
    })
}



var userOne = new User('Jon', 'jon@kingslanding.com');
var userTwo = new User('Danny', 'danny@targ.com');

var admin = new Admin('Cersei', 'cersei@destroyer.com');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);

