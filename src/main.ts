console.log('#20. TypeScript homework example file')

/*
 * #1
 *
 * Задача: Розробити функцію `createPerson`, яка створює об'єкт особи з заданими властивостями.
 *
 * Мета: Створити універсальну функцію, що дозволяє ефективно генерувати об'єкти особи з певними характеристиками для подальшого використання у програмі.
 *
 * Вимоги до реалізації:
 * 1. Функція має приймати три параметри: `name` (рядок), `age` (число), `isActive` (булеве значення) і явно повертати об'єкт, що відповідає інтерфейсу `PersonInterface`.
 * 2. Інтерфейс `PersonInterface` має описувати структуру об'єкта особи з властивостями `name`, `age`, і `isActive`.
 * 3. Функція має забезпечувати створення об'єкта з коректними типами властивостей відповідно до `PersonInterface`.
 * 4. Тип повернення функції має бути явно вказаний як `PersonInterface`, що забезпечує відповідність повернутого об'єкта визначеному інтерфейсу.
 *
 */

// Опис інтерфейсу для об'єкта особи
interface PersonInterface {
  name: string;
  age: number;
  isActive: boolean;
}

// Функція для створення об'єкта особи
function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
  // Повертаємо об'єкт, що відповідає інтерфейсу PersonInterface
  return {
    name: name,
    age: age,
    isActive: isActive
  };
}

// Приклад використання функції
const person1 = createPerson("John", 30, true);
console.log(person1);  // { name: "John", age: 30, isActive: true }


// const newPerson = createPerson('Олександр', 31, false)
// console.log(newPerson)

//...
// PersonInterface — це інтерфейс, що визначає структуру об'єкта особи з трьома властивостями:
// name: рядок, що представляє ім'я особи,
// age: число, що вказує вік,
// isActive: булеве значення, що вказує на активність особи.
// createPerson — це функція, яка приймає три параметри: name, age, isActive і повертає об'єкт, що відповідає інтерфейсу PersonInterface.



/*
 * #2
 *
 * Задача: Розробити клас `Calculator` з методами `add` і `multiply`, які будуть логувати виклики цих методів за допомогою декоратора `LogMethodCalls`.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас `Calculator` має містити метод `add`, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас `Calculator` має містити метод `multiply`, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (`add` і `multiply`) мають бути оздоблені декоратором `LogMethodCalls`. Цей декоратор має логувати ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор `LogMethodCalls` має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу. При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: `Calling "<ім'я_методу>" with arguments: <аргументи_методу>`.
 * 5. Всі виводи логів мають здійснюватись через `console.log`.
 *
 */


// Декоратор LogMethodCalls
function LogMethodCalls(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  // Заміна методу на новий, який логуватиме виклик
  descriptor.value = function (...args: any[]) {
    console.log(`Calling "${propertyKey}" with arguments: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };

  // Повертаємо описник з оновленим методом
  return descriptor;
}

// Клас Calculator
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Приклад використання класу
const calculator = new Calculator();
calculator.add(2, 3); // Лог: Calling "add" with arguments: [2,3]
calculator.multiply(4, 5); // Лог: Calling "multiply" with arguments: [4,5]

//@LogMethodCalls
//add(a: number, b: number): number {
//  return a + b;
//}

//@LogMethodCalls
//multiply(a: number, b: number): number {
//  return a * b;
//}




//Calling "add" with arguments: [2, 3]
//Calling "multiply" with arguments: [4, 5]


///...
// Декоратор LogMethodCalls:
// Цей декоратор приймає три параметри: target (об'єкт класу), propertyKey (ім'я методу), та descriptor (опис методу).
// Декоратор зберігає оригінальний метод у змінній originalMethod та замінює його новою функцією.
//У новій функції спочатку логуються ім'я методу та його аргументи через console.log, а потім викликається оригінальний метод за допомогою originalMethod.apply(this, args).
//Клас Calculator:
// Клас має два методи: add, який додає два числа, і multiply, який множить два числа.
// Кожен метод оздоблений декоратором @LogMethodCalls, що дозволяє логути виклики цих методів.
// Приклад використання:
// Створюється об'єкт calc класу Calculator.
// Викликаються методи add(2, 3) і multiply(4, 5), і в консолі буде виведено лог з інформацією про виклик цих методів.



// const calculator = new Calculator()
// // "Calling "add" with arguments: 2, 3"
// console.log(calculator.add(2, 3)) // 5
// // "Calling "multiply" with arguments: 3, 4"
// console.log(calculator.multiply(3, 4)) // 12

/*
 * #3
 *
 * Задача: Реалізувати функціонал для створення профілю користувача в просторі імен UserProfile.
 *
 * Мета: Надати можливість створювати об'єкт профілю з унікальним ідентифікатором, ім'ям та електронною поштою.
 *
 * Вимоги до реалізації:
 * 1. Створити namespace `UserProfile`, що слугуватиме контейнером для визначення інтерфейсу профілю та функцій.
 * 2. Визначити всередині `UserProfile` інтерфейс `ProfileInterface`, який має містити властивості `id` (string), `name` (string) та `email` (string).
 * 3. Реалізувати функцію `createProfile` всередині `UserProfile`, яка приймає `name` та `email`, створює та повертає об'єкт `ProfileInterface` з унікальним `id`, вказаним ім'ям та електронною поштою.
 * 4. Функція `generateId` має бути приватною всередині `UserProfile` і слугувати для генерації унікального ідентифікатора для кожного профілю.
 *
 */

namespace UserProfile {
  // Інтерфейс для профілю користувача
  export interface ProfileInterface {
    id: string;
    name: string;
    email: string;
  }

  // Приватна функція для генерації унікального ідентифікатора
  function generateId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Генерація унікального ID
  }

  // Функція для створення профілю користувача
  export function createProfile(name: string, email: string): ProfileInterface {
    const id = generateId(); // Генерація унікального ідентифікатора
    return {
      id: id,
      name: name,
      email: email
    };
  }
}

// Приклад використання:
const userProfile = UserProfile.createProfile("John Doe", "john.doe@example.com");
console.log(userProfile); 
// Приклад виводу: { id: "id-abcdefgh1", name: "John Doe", email: "john.doe@example.com" }


// const profile = UserProfile.createProfile('John Doe', 'john@example.com')
// console.log(profile) // { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }

export { createPerson, Calculator, UserProfile }



///Інтерфейс ProfileInterface:
// Визначає структуру профілю користувача з трьома властивостями:
// id: унікальний ідентифікатор типу string,
// name: ім'я користувача типу string,
// email: електронна пошта користувача типу string.
// Приватна функція generateId:
// Ця функція генерує унікальний ідентифікатор, використовуючи Math.random().toString(36) для створення випадкового рядка. Цей рядок обрізається до 9 символів для отримання короткого унікального значення.
// Функція createProfile:
// Приймає два параметри: name та email, генерує унікальний id за допомогою функції generateId і створює та повертає об'єкт, що відповідає інтерфейсу ProfileInterface.
//Приклад використання:
//створюємо профіль користувача за допомогою функції createProfile, передаючи ім'я та електронну пошту, а потім виводимо результат у консоль.