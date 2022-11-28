import {MenuManager} from "./menuManager";
import {Menu} from "./menu";

let input = require('readline-sync')
let menuManager = new MenuManager();

function main(){
    let choice = -1;
    do {
        console.log(`
        1. List
        2. Manager
        0. Out
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                showList()
                break;
            case 2:
                manager()
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}

function showList() {
    console.log(menuManager.show())
}

function manager() {
    let choice = -1;

    console.log(`
        1. Add
        2. Edit
        3. Remove
        4. Find by name
        5. Find by type
        6. Sort by price
        `)
    choice = +input.question('Enter choice : ')
    switch (choice) {
        case 1:
            addDish()
            break;
        case 2:
            editDish()
            break;
        case 3:
            RemoveDish()
            break;
        case 4:
            findByName()
            break;
        case 5:
            findByType()
            break;
        case 6:
            sortByPrice()
            break;
    }
}

function addDish() {
    let name = input.question("Enter dish name: ")
    let price = input.question("Enter dish price: ")
    let type = input.question("Enter dish type: ")
    let describe = input.question("Enter dish describe: ")
    let amount = input.question(" Enter dish amount: ")
    let dish = new Menu(name, price, type, describe, amount)
    menuManager.add(dish);
    showList();
}

function editDish(){
    let name = input.question("Enter dish name: ")
    console.log("New dish: ")
    let newName = input.question("Enter dish name: ")
    let newPrice = input.question("Enter dish price: ")
    let newType = input.question("Enter dish type: ")
    let newDescribe = input.question("Enter dish describe: ")
    let newAmount = input.question(" Enter dish amount: ")
    let newDish = new Menu(newName, newPrice, newType, newDescribe, newAmount)
     menuManager.edit(name, newDish)
}

function RemoveDish() {
    let name = input.question("Enter dish name: ")
    menuManager.remove(name)
}

function findByName(){
    let name = input.question("Enter dish name: ")
    console.log(menuManager.findByName(name))
}

function findByType() {
    let type = input.question("Enter dish type: ")
    console.log(menuManager.findByType(type))
}

function sortByPrice() {
    let price1 = input.question("Enter minimum price: ")
    let price2 = input.question("Enter maximum price: ")
    console.log(menuManager.sortByAsc(price1, price2))
}

main();

