import React from "react";
import styles from "../../../Styles/Status.module.css";
import { usersAPI } from "../../API/api";

export class Profile_status extends React.Component
{
    state = {
        edit_mode: false ,
        status: this.props.status
    }
    componentDidUpdate (prevProps,prevState)
    {
        if(prevProps.status != this.state.status && this.state.edit_mode != true)
        {
            this.setState({
                status: this.props.status
            })
        }
    }
    render()
    {
        if(this.get_state().edit_mode == false)
        {
            return (
                    <section className={styles.status_container}>
                        {!this.state.edit_mode &&
                            <div className={styles.status_text}>
                                <span onClick={
                                    this.activate_edit_mode
                                }>{this.props.status}</span>
                            </div>}
                    </section>
                )}else{
                    return (
                        <section className={styles.status_container}>
                            <div>
                                <input onChange={this.on_status_change} autoFocus={true} onBlur={this.deactivate_edit_mode} value={this.state.status} />
                            </div>
                        </section>
                )
            }
        }
        on_status_change = (e)=>
        {
            this.setState({
                status: e.currentTarget.value
            })
        }
        activate_edit_mode = ()=>
        {
            this.setState({
                edit_mode: true
            })
        }
        deactivate_edit_mode = () =>
        {
            this.setState({
                edit_mode: false,
            
            });
            this.props.update_status(this.state.status);
        }
        get_state(){
            return this.state;
        }
}
    
    
