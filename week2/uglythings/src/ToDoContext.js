import React from 'react'

const {Provider, Consumer} = React.createContext()

class ToDoContextProvider extends React.Component {
    state = {
        toDos: []
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