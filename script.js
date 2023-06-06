// 1. Создать объект user с полями name, age и email. Вывести значения полей в консоль.
//      -Добавить ключ id со значением 1 
//      -Добавить ключ second name
//      -Удалить ключ age
//      -Изменит значение ключа email
//      -Сделать так чтоб в дальнейшем этот объект не могли изменять

let user ={
    name: 'Kanykei',
    age: 25,
    email: 'test@gmail.com',
}
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// user.id = 1;
// console.log(Object.keys(user));

// user['second name'] = 'Salamat';

// console.log(Object.keys(user));

// delete user.age
// console.log(Object.keys(user));

// user.email = 'sssskar'
// console.log(Object.values(user));

// console.log(Object.freeze(user));
// user.email = 'pppp'
// console.log(Object.values(user));
// // // // // // // // // Теперь мы умеем добовлять удалять и изменять ключи и значения, отлично!


// 2. Создайте объект заработных плат obj = {Ширин: '1000',
//    Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
// console.log(obj.Ширин);
// console.log(obj.Атай);
// // // // // // // // // Хорошо

// 3. Создать объект team с полем members, представляющим собой массив имен участников. 
//    Добавить нового участника в массив и вывести обновленный объект в консоль. 
//    (Учитываем, то что мы можем не знать список участников которые уже записаны)

// let team = {
//     member: ['Jin', 'Suga', 'J-Hope', 'RM', 'Jimin', 'V', 'Jungkook']
// };

// team.member.push('Kany')
// console.log(team);
// // // // // // // // // Да у вас получилось, но метод push() мутирует. Давайте сделаем это другим способом
// Например напишем функцию и спред оператором добавим наш элемент