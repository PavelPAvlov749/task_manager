class Task_class{
    constructor(_name,_desc)
    {
        this.text = undefined;
        this.description = _desc;
        this.time = new Date();
        this.status = "New";
        this.progress = 0;
        this.name = _name;
    }
}

export default Task_class;