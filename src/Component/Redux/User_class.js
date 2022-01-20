
export class User{
    
    constructor(Login,Password)
    {
        this.login = Login;
        this.password = Password;
        this.regDate = Date();
        this.id = 0;

    }
    super()
    {
        
    }
    id = undefined;
    name = undefined;
    surname = undefined;
    role = undefined;
    tasks = [];
    contacts = [];
    messages = [];
    Dialogs = [this.messages];
    avatar_path = undefined;
    setAvatrar = (path)=>
    {
        this.avatar_path = path; 
    }
    add_message = (text)=>{
        if(typeof(text)!=typeof(String())||typeof(text)!=typeof(Number()))
            {
                alert("Text should contain text or numbers!");
            }
            else{
                this.messages.push(text);
            }
    }
    sendMessage = (text,User)=>{
        if(typeof(text)!=typeof(String())||typeof(text)!=typeof(Number)){
            alert("Text should contain text or numbers!");
        }
        else{
            User.add_message(text);
        }
        
    }

    get_usrers_tasks = ()=>{
        return this.tasks;
    }
    get_users_Dialogs = () =>
    {
        return this.Dialogs;
    }
    getUser = ()=>{
        return this.User;
    }
    setRole = (role)=>{
        this.role = role;
    }
    get_users_role = ()=>{
        return this.role
    }
    setName = function(_name) {
        this.name = _name;
    }
    getName = function (){
        return this.name
    }
    setSurname = function (sr){
        this.surname = sr;
    }
    getUsers_props = function(){
        return (
            {
                "name":this.name,
                "surname":this.surname,
                "login":this.login,
                "password":this.password,
                "Registration sate":this.regDate,
            }
        )
    }

}

export class Manager extends User{
    constructor()
    {
        super();
        create_new_user = (_login,_pass)=> {
            return new User(_login,_pass);
        }
    }
}




