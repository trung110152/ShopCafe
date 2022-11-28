import {Menu} from "./menu";

export class MenuManager {
    list: Menu[] = [];

    show(): Menu[]{
        return this.list
    }

    add(obj: Menu) {
        this.list = [...this.list,obj]
    }

    edit(name: string, newObj: Menu ) {
        this.list = this.list.map(obj => obj.name === name ? newObj : obj);
    }

    remove(name: string ) {
        this.list = this.list.filter(obj => obj.name !== name)
    }

    findByName(name: string): Menu[] {
        return this.list.filter(obj => obj.name.includes(name))
    }

    findByType(type: string): Menu[] {
        return this.list.filter(obj => obj.name.includes(type))
    }

    sortByAsc(p1: Menu, p2: Menu): Menu[] {
        return this.list.slice().sort(((obj1,obj2) => obj1.price - obj2.price ))
    }
}