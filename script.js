// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

// ```
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
// const link = document.getElementById(`super_link`)
// console.log(link.textContent)

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// const link_text = document.querySelectorAll(`.card-link`);
// link_text.forEach((link_text ) => {
//  link_text.textContent = `ссылка`;
// });


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// const link = document.querySelectorAll(`.card-body > .card-link `)
// console.log(link)


// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// const el = document.querySelector(`[data-number="50"]`);
// console.log (el);



// 5. Выведите содержимое тега title в консоль.
// []()
// const title = document.getElementsByTagName(`title`)
// console.log(title)

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// const card_title = document.querySelector(`.card-title`)
// const parentEl = card_title.parentElement
// console.log(parentEl)

// []()
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// const content_card = document.querySelector(`.card`)
// const elem = document.createElement("div");
// const content_cardText = document.createTextNode("Привет")
// elem.appendChild(content_cardText)
// const firstElem = content_card.firstChild.nextSibling;
// content_card.insertBefore(elem, firstElem)

// 8. Удалите тег h6 на странице.
// const deliteh = document.querySelector(`h6`)
// deliteh.removeChild(deliteh.firstChild)
