// 1. Создать класс User , который будет иметь свойства name и age listPermissions, а так же методы sigin и logout
// 2. Создать класс Admin который наследуется от класс User, у которого будет свои свойства listBans, и методы addBan, addPermission
// 3. Создать класс Manager который будет наследоваться от Admin и у него будет метод showListBans
// 4. Создать класс GeneralUser который будет наследоваться от User и у него будет метод showName

class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.listPermissions = [];
    }
  
    signin() {
      console.log(this.name +' вошел в систему ');
    }
  
    logout() {
      console.log(this.name+ ' вышел из системы ');
    }
  }
  
  class Admin extends User {
    constructor(name, age) {
      super(name, age);
      this.listBans = [];
    }
  
    addBan(user) {
      this.listBans.push(user);
      console.log(user.name+ ' был забанен администратором ' +this.name);
    }
  
    addPermission(user, permission) {
      user.listPermissions.push(permission);
      console.log(this.name+ ' добавил разрешение '+permission+ ' пользователю ' +user.name);
    }
  }
  
  class Manager extends Admin {
    showListBans() {
      console.log('Список забаненных пользователей: ');
      this.listBans.forEach(bannedUser => {
        console.log(bannedUser.name);
      });
    }
  }
  class GeneralUser extends User {
    showName() {
      console.log('Имя пользователя:'+ this.name);
    }
  }
  

  const user1 = new GeneralUser("Uladzimir", 25);
  const user2 = new GeneralUser("Ivan", 30);
  
  const admin1 = new Admin("Admin1", 40);
  const manager1 = new Manager("Manager1", 35);
  
  user1.showName();
  user1.signin();
  
  admin1.addBan(user2);
  admin1.addPermission(user1, "read");
  
  manager1.showListBans();