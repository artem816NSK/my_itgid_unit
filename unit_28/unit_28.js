
 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

    let goods = new Goods('Iphone 12', 12);
    console.log(goods)

 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

 
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
    let goods2 = new Goods('Iphone 10', 10,'img/image.png', 500);
    //console.log(goods2)
    goods2.draw('.out-4', 'cssClass1');

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
   
 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
 let goods3 = new Goods2('Iphone 11', 10,'img/image.png', 500, true);
 goods3.draw('.out-6', 'cssClass2')
 
 
 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
 
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
 let valid = new Valid('', 'df346')
 valid.validate();
 console.log(valid.isValid)
 
 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
 let valid2 = new Valid('', 'df34566')
 valid2.validate();
 console.log(valid2.isValid)
 
 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
  
 
 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let valid3 = new Valid2('', 'ffffggg');
valid3.validate();
console.log(valid3);
 
 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
 let valid4 = new Valid2('f', 'ffffggg');
 valid4.validate();
 console.log(valid4);