const personal= require('./data.json');

personal.personall.forEach(elem=>console.log(elem.id));

let ids=personal.personall.map(elem=> elem.id);
console.log(ids);

let filter = personal.personall.map(elem=> elem.id).filter(id=>id>20);
console.log(filter);

let sum =personal.personall.map(elem=> elem.id).filter(id=>id>100).reduce((acc,id)=>acc+id,0);

console.log(sum);


let names=personal.personall.map(elem=> elem.name).filter(name=>name.includes('e'));
console.log(names);
console.log(names.concat(ids));

class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let p1=new node(12,null);
p1.next=new node(13,null);
console.log(p1);