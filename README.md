# HW3.2.2
## Описание работы проекта

Данный проект вычисляет студента с максимальным количеством баллов и выводит поздравления для данного студента. В проекте есть файл *students.js*, содержащий функцию, которая вычисляет студента с максимальными баллами из исходного массива данных. В проекте также содержится файл *students.spec.js*, содержащий тесты.

Предварительно необходимо связать файл, содержащий тесты, с файлом, содержащим функцию, которую нужно протестировать:

*module.exports = nameOfFunction* - команда для файла, содержащего функцию

*const nameOfFunction = require('./')* - команда для файла с тестами

# Oписание работы измерения покрытия в проекте

Покрытие кода — это показатель того, какая часть исходного кода охвачена тестами.

## Настройка и запуск

1. Установить babel-plugin
2. Запустить команду: npx jest --coverage
3. Открыть report, используя live server
