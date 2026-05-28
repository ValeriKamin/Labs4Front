"use strict";

const output = document.getElementById("output");

function addResult(title, data) {
    const block = document.createElement("div");
    block.className = "result";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const pre = document.createElement("pre");
    pre.textContent = typeof data === "string" ? data : JSON.stringify(data, null, 4);

    block.append(heading, pre);
    output.append(block);

    console.log(`--- ${title} ---`);
    console.log(data);
}



const textValue = "JavaScript";
const numberValue = 25;
const booleanValue = true;
const nullValue = null;
let undefinedValue;
const symbolValue = Symbol("id");
const bigintValue = 12345678901234567890n;

const primitiveTypes = [
    {
        value: textValue,
        type: typeof textValue
    },
    {
        value: numberValue,
        type: typeof numberValue
    },
    {
        value: booleanValue,
        type: typeof booleanValue
    },
    {
        value: nullValue,
        type: typeof nullValue
    },
    {
        value: undefinedValue,
        type: typeof undefinedValue
    },
    {
        value: symbolValue.toString(),
        type: typeof symbolValue
    },
    {
        value: bigintValue.toString(),
        type: typeof bigintValue
    }
];

const conversionExamples = {
    stringFromNumber: String(123),
    stringFromBoolean: String(false),
    numberFromString: Number("123"),
    numberFromEmptyString: Number(""),
    numberFromTrue: Number(true),
    numberFromFalse: Number(false),
    numberFromNull: Number(null),
    numberFromUndefined: Number(undefined),
    booleanFromZero: Boolean(0),
    booleanFromEmptyString: Boolean(""),
    booleanFromNull: Boolean(null),
    booleanFromUndefined: Boolean(undefined),
    booleanFromNaN: Boolean(NaN),
    booleanFromText: Boolean("JavaScript"),
    booleanFromNumber: Boolean(45)
};

const studentName = "Олена";
const studentAge = 20;
const university = "КПІ";

const templateLiteralResult = `Студент: ${studentName}, вік: ${studentAge}, університет: ${university}`;

const equalityExamples = {
    example1: `5 == "5" -> ${5 == "5"}`,
    example2: `5 === "5" -> ${5 === "5"}`,
    example3: `0 == false -> ${0 == false}`,
    example4: `0 === false -> ${0 === false}`,
    example5: `null == undefined -> ${null == undefined}`,
    example6: `null === undefined -> ${null === undefined}`
};

addResult("Завдання 1. Примітивні типи даних", primitiveTypes);
addResult("Завдання 1. Перетворення типів", conversionExamples);
addResult("Завдання 1. Шаблонний рядок", templateLiteralResult);
addResult("Завдання 1. Різниця між == та ===", equalityExamples);



function getGrade(score) {
    if (typeof score !== "number" || Number.isNaN(score)) {
        return "некоректне значення";
    }

    if (score < 0 || score > 100) {
        return "некоректне значення";
    }

    if (score >= 90) {
        return "відмінно";
    }

    if (score >= 75) {
        return "добре";
    }

    if (score >= 60) {
        return "задовільно";
    }

    return "незадовільно";
}

function getSeasonUA(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "зима";

        case 3:
        case 4:
        case 5:
            return "весна";

        case 6:
        case 7:
        case 8:
            return "літо";

        case 9:
        case 10:
        case 11:
            return "осінь";

        default:
            return "некоректний номер місяця";
    }
}

const age = 19;
const studentStatus = age >= 18 ? "повнолітній" : "неповнолітній";

const gradeResults = [
    getGrade(95),
    getGrade(82),
    getGrade(67),
    getGrade(45),
    getGrade(-10),
    getGrade(120),
    getGrade("90")
];

const seasonResults = [
    getSeasonUA(1),
    getSeasonUA(4),
    getSeasonUA(7),
    getSeasonUA(10),
    getSeasonUA(15)
];

addResult("Завдання 2. Функція getGrade(score)", gradeResults);
addResult("Завдання 2. Функція getSeasonUA(month)", seasonResults);
addResult("Завдання 2. Тернарний оператор", studentStatus);



const students = [
    {
        name: "Олена Коваленко",
        grade: 87,
        courses: ["JavaScript", "HTML", "CSS"]
    },
    {
        name: "Іван Петренко",
        grade: 56,
        courses: ["HTML", "Git"]
    },
    {
        name: "Марія Шевченко",
        grade: 94,
        courses: ["JavaScript", "React", "CSS"]
    },
    {
        name: "Андрій Мельник",
        grade: 72,
        courses: ["JavaScript", "HTML"]
    },
    {
        name: "Софія Бондар",
        grade: 43,
        courses: ["CSS", "Git"]
    },
    {
        name: "Дмитро Савчук",
        grade: 90,
        courses: ["JavaScript", "Node.js"]
    }
];

students.push({
    name: "Назар Лисенко",
    grade: 81,
    courses: ["HTML", "CSS", "JavaScript"]
});

const removedLastStudent = students.pop();

students.splice(2, 1);

students.splice(1, 0, {
    name: "Катерина Мороз",
    grade: 78,
    courses: ["JavaScript", "CSS"]
});

const studentWithGrade90 = students.find(function (student) {
    return student.grade === 90;
});

const javascriptStudents = students.filter(function (student) {
    return student.courses.includes("JavaScript");
});

const averageStudentGrade = students.reduce(function (sum, student) {
    return sum + student.grade;
}, 0) / students.length;

addResult("Завдання 3. Масив студентів після змін", students);
addResult("Завдання 3. Видалений останній студент", removedLastStudent);
addResult("Завдання 3. Студент з оцінкою 90", studentWithGrade90);
addResult("Завдання 3. Студенти курсу JavaScript", javascriptStudents);
addResult("Завдання 3. Середня оцінка студентів", averageStudentGrade.toFixed(2));



function rectangleAreaDeclaration(width, height) {
    return width * height;
}

const rectangleAreaExpression = function (width, height) {
    return width * height;
};

const rectangleAreaArrow = (width, height) => width * height;

function createCounter() {
    let value = 0;

    return {
        increment() {
            value += 1;
            return value;
        },

        decrement() {
            value -= 1;
            return value;
        },

        getValue() {
            return value;
        }
    };
}

function createUser(name, role = "student", isActive = true) {
    return {
        name,
        role,
        isActive
    };
}

function sumNumbers(...numbers) {
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0);
}

function printStudentInfo({ name, grade, courses }) {
    return `${name} має оцінку ${grade}. Курси: ${courses.join(", ")}.`;
}

const counter = createCounter();

const counterResults = [
    counter.increment(),
    counter.increment(),
    counter.decrement(),
    counter.getValue()
];

const functionResults = {
    declaration: rectangleAreaDeclaration(5, 4),
    expression: rectangleAreaExpression(5, 4),
    arrow: rectangleAreaArrow(5, 4),
    counter: counterResults,
    defaultParameters: createUser("Олена"),
    restParameters: sumNumbers(1, 2, 3, 4, 5),
    destructuring: printStudentInfo(students[0])
};

addResult("Завдання 4. Функції", functionResults);



const studentProfile = {
    firstName: "Олена",
    lastName: "Коваленко",
    age: 20,
    university: "КПІ",
    grades: {
        math: 85,
        physics: 92,
        javascript: 96
    },
    isActive: true,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    getAverageGrade() {
        const gradeValues = Object.values(this.grades);

        const sum = gradeValues.reduce(function (total, grade) {
            return total + grade;
        }, 0);

        return sum / gradeValues.length;
    }
};

const dynamicKey = "university";

const copiedStudentProfile = {
    ...studentProfile,
    age: 21
};

const optionalChainingResults = {
    labScore: studentProfile.grades?.lab,
    mentorName: studentProfile.mentor?.name ?? "Не призначено"
};

const objectResults = {
    fullName: studentProfile.getFullName(),
    averageGrade: studentProfile.getAverageGrade().toFixed(2),
    dotNotation: studentProfile.firstName,
    bracketNotation: studentProfile[dynamicKey],
    keys: Object.keys(studentProfile),
    values: Object.values(studentProfile),
    entries: Object.entries(studentProfile),
    originalAge: studentProfile.age,
    copiedAge: copiedStudentProfile.age,
    optionalChaining: optionalChainingResults
};

addResult("Завдання 5. Об'єкти", objectResults);



const products = [
    {
        name: "Ноутбук",
        price: 25000,
        category: "electronics",
        inStock: true,
        quantity: 5
    },
    {
        name: "Смартфон",
        price: 18000,
        category: "electronics",
        inStock: true,
        quantity: 8
    },
    {
        name: "Навушники",
        price: 2200,
        category: "electronics",
        inStock: false,
        quantity: 0
    },
    {
        name: "Книга JavaScript",
        price: 700,
        category: "books",
        inStock: true,
        quantity: 12
    },
    {
        name: "Монітор",
        price: 8500,
        category: "electronics",
        inStock: true,
        quantity: 3
    },
    {
        name: "Клавіатура",
        price: 1600,
        category: "electronics",
        inStock: true,
        quantity: 10
    },
    {
        name: "Рюкзак",
        price: 1300,
        category: "accessories",
        inStock: false,
        quantity: 0
    },
    {
        name: "Миша",
        price: 900,
        category: "electronics",
        inStock: true,
        quantity: 15
    }
];

const totalAvailableValue = products
    .filter(function (product) {
        return product.inStock;
    })
    .map(function (product) {
        return product.price * product.quantity;
    })
    .reduce(function (total, value) {
        return total + value;
    }, 0);

const electronicsProductNames = products
    .filter(function (product) {
        return product.category === "electronics";
    })
    .sort(function (a, b) {
        return a.price - b.price;
    })
    .map(function (product) {
        return product.name;
    });

const productCountByCategory = products.reduce(function (result, product) {
    if (!result[product.category]) {
        result[product.category] = 0;
    }

    result[product.category] += 1;

    return result;
}, {});

const sortedStudentsByGrade = [...students].sort(function (a, b) {
    return b.grade - a.grade;
});

const sortedStudentsByName = [...students].sort(function (a, b) {
    return a.name.localeCompare(b.name);
});

const chainResults = {
    totalAvailableValue,
    electronicsProductNames,
    productCountByCategory,
    sortedStudentsByGrade,
    sortedStudentsByName
};

addResult("Завдання 6. Ланцюжки методів масивів", chainResults);



function capitalize(str) {
    if (!str) {
        return "";
    }

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function countWords(str) {  
    return str.trim().split(/\s+/).filter(function (word) {
        return word.length > 0;
    }).length;
}

function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    return `${str.slice(0, maxLength - 3)}...`;
}

function isValidEmail(email) {
    const hasAt = email.includes("@");
    const hasDotAfterAt = email.indexOf(".", email.indexOf("@")) > email.indexOf("@");
    const hasTextBeforeAt = email.indexOf("@") > 0;
    const hasTextAfterLastDot = email.lastIndexOf(".") < email.length - 1;

    return hasAt && hasDotAfterAt && hasTextBeforeAt && hasTextAfterLastDot;
}

const stringResults = {
    capitalize1: capitalize("javaScript"),
    capitalize2: capitalize("hello world"),
    countWords1: countWords("JavaScript це круто"),
    countWords2: countWords("  пробіли   між    словами  "),
    truncate1: truncate("Це довгий текст для прикладу", 15),
    truncate2: truncate("Короткий", 20),
    validEmail1: isValidEmail("student@example.com"),
    validEmail2: isValidEmail("studentexample.com"),
    validEmail3: isValidEmail("@example.com"),
    validEmail4: isValidEmail("student@example")
};

addResult("Завдання 7. Рядки", stringResults);