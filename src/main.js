"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = exports.Calculator = void 0;
exports.createPerson = createPerson;
console.log('#20. TypeScript homework example file');
// Функція для створення об'єкта особи
function createPerson(name, age, isActive) {
    // Повертаємо об'єкт, що відповідає інтерфейсу PersonInterface
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}
// Приклад використання функції
var person1 = createPerson("John", 30, true);
console.log(person1); // { name: "John", age: 30, isActive: true }
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
// Декоратор для логування викликів методів
function LogMethodCalls(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    // Замінюємо оригінальний метод на новий
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling \"".concat(propertyKey, "\" with arguments: ").concat(JSON.stringify(args)));
        return originalMethod.apply(this, args); // Викликаємо оригінальний метод
    };
    return descriptor;
}
// Клас Calculator з методами add та multiply
var Calculator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    var _multiply_decorators;
    return _a = /** @class */ (function () {
            function Calculator() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Calculator.prototype.add = function (a, b) {
                return a + b;
            };
            Calculator.prototype.multiply = function (a, b) {
                return a * b;
            };
            return Calculator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [LogMethodCalls];
            _multiply_decorators = [LogMethodCalls];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _multiply_decorators, { kind: "method", name: "multiply", static: false, private: false, access: { has: function (obj) { return "multiply" in obj; }, get: function (obj) { return obj.multiply; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Calculator = Calculator;
// Приклад використання класу
var calc = new Calculator();
calc.add(2, 3); // Лог: Calling "add" with arguments: [2, 3]
calc.multiply(4, 5); // Лог: Calling "multiply" with arguments: [4, 5]
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
var UserProfile;
(function (UserProfile) {
    // Приватна функція для генерації унікального ідентифікатора
    function generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9); // Генерація унікального ID
    }
    // Функція для створення профілю користувача
    function createProfile(name, email) {
        var id = generateId(); // Генерація унікального ідентифікатора
        return {
            id: id,
            name: name,
            email: email
        };
    }
    UserProfile.createProfile = createProfile;
})(UserProfile || (exports.UserProfile = UserProfile = {}));
// Приклад використання:
var userProfile = UserProfile.createProfile("John Doe", "john.doe@example.com");
console.log(userProfile);
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
