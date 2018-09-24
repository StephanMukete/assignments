class Element{
    constructor(id, name, className, innerHTML){
        this.id = id;
        this.name = name;
        this.className = className;
        this.innerHTML = innerHTML;
        this.style = {
            fontSize: "12px"
        }
    }
    onHover(e){
        console.log("your head like hover");
    }
}

class H1 extends Element{
    constructor(tag, id, name, className, innerHTML){
        super(id, name, className, innerHTML);
        this.style = {
            fontSize: "18px"
        }
    }
}
const div = new Element(1, "demo", "example-class", "lorem ipsum");
const h1 = new H1(1, "demo", "example-class", "lorem ipsum");
console.log(div);
