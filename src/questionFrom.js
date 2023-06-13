import React, { Component } from 'react';
import { useState } from 'react'
import './style/cart.css'


class QuestionFrom extends Component {
    return () {
        <div className="questionFrom">
            <h1>Question From</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Question:
                    <input type="text" name="question" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
        
    

}
export default QuestionFrom;