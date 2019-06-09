import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css'

class ContactPage extends Component {
    state = { 
        value: "",
        isEmpty: true,
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        this.setState({
            value: "",
            isEmpty: true,
        })
    }

    handleChange= (e)=>{
        if(e.target.value.length>0){
            this.setState({
                isEmpty: false,
                value: e.target.value
            })
        }else{this.setState({
            isEmpty: true,
            value: e.target.value
        })}

    }
    render() { 
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas!</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość"></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt 
                    when={!this.state.isEmpty}
                    message="Masz niewypełniony formularz, czy na pewno chcesz opuścić tę stronę?"
                />
            </div>
         );
    }
}
 
export default ContactPage;