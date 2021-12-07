import Task from "./Task_class";


class User 
{
    constructor(_name,_pass,_mail,_tel)
    {
        // this.login = _login,
        this.name = _name;
        // this.lastname = _lastname,
        this.password = _pass;
        this.mail = _mail;
        this.tel = _tel;
        this.tasks = [];
        this.friend_list = [];
        this.dialog_list = [];

        return 0;
    }
    // new_task(_name,_desc)
    // {
    //     return new Task(_name,_desc);
    // }
}

class Manager extends User{
    super()
    {

    }

}

export default User;