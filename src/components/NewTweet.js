import React, { Component } from 'react';

class NewTweet extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { text } = this.state;

        //todo: Add tweet to the store

        console.log(`New Tweet: ${text}`);
    }

    render() {
        return(
            <div>
                New Tweet
            </div>
        )
    }
}

export default NewTweet;