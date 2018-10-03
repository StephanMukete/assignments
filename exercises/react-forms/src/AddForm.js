function AddForm(props){
    <form action="" onSubmit = {this.handleSubmit}>
    <label htmlFor="">Username:</label>
    <input name='username' onChange = {this.handleChange} type="text" value = {this.state.username}/>
    <label htmlFor="">Password:</label>
    <input name='password'type='password'onChange = {this.handleChange} value = {this.state.password}/>
    <button>Submit</button>
    </form> 
}
// in form 
// return (
//     <AddForm handleSubmit={this.handleSubmit}
//     handleChange = {this.handleChange}
//     inputs = {this.state}/>
// )