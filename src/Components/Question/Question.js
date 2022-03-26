import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
                <p>How react Works??</p>
                <p>React is a javascript library that create user interface with declarative code . Declarative code is one kind of dynamic code like it declare what each eliment of the app is.We use use declarative code to create components it shows us where the each eliment on a webpage.The components are nothing but are reusable ui that helps to seperate the app eliment into small blocks. </p>
            </div>
            <div>
                <p>props vs state</p>
                <p>
                    Props are proparties. it is use for pass the data into component. This thing is read only we cant change anything in props. And cant be modified and its immutable

                    state is the parts of the component that can change . Each component can have their state and its mutable and its local to component only
                </p>
            </div>
            <div>
                <p>How useState work?</p>
                <p>
                    useState() alows us to have a state variable in the jsx function component.It takes an argument where is initial value and another is a function to update it.First initial value is for inisital state of the function and the function is use for update the a state of a component
                </p>
            </div>
        </div>
    );
};

export default Question;