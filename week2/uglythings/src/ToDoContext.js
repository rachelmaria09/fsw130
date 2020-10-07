import React from 'react'

const {Provider, Consumer} = React.createContext()

class ToDoContextProvider extends React.Component {
    state = {
        toDos: [
            {title: "House",
            description: "Beautiful",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
            {title: "Car",
            description: "Sporty",
            image: "https://images.unsplash.com/photo-1537740547516-098bdb470e11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"},
            {title: "Dog",
            description: "Cute",
            image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"}
        ]
      }

    addToDo = (toDo) => {
        this.setState({toDos: [...this.state.toDos, toDo]})
    }

    render() {
        const {toDos} = this.state
        return (
            <Provider value={{toDos,addToDo: this.addToDo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ToDoContextProvider, Consumer as ToDoContextConsumer}