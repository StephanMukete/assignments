//in app
this.state = {
    items:[]
}
this.addNumber = this.addNumber.bind(this);
addNumber(num) {
    this.setState(prevState => ({
        items: [...prevState.items, num]
    }))
}
const numberListItems = this.state.items.map((num, i) =>(
    <li key = {i}>{num}</li>
))
return(
    <div>
        <button onClick={() => this.addNumber(Math.random())}>gen ran num</button>
    </div>
)

//inindex