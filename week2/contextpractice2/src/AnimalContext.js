import React from 'react'

const {Provider, Consumer} = React.createContext()

class AnimalContextProvider extends React.Component {
    state = {
        animalNames: []
    }

    addAnimal = (animalName) => {
        this.setState({animalNames: [...this.state.animalNames, animalName]})
    }

    render() {
        const {animalNames} = this.state
        return (
            <Provider value={{animalNames, addAnimal: this.addAnimal}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {AnimalContextProvider, Consumer as AnimalContextConsumer}