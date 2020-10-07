import React from 'react';

const {Provider, Consumer} = React.createContext()

class AnimalContextProvider extends React.Component {
    state = {
        animalName: "dog"
    }

    addAnimal = (animalName) => {
        this.setState({animalName})
    }

    render() {
        const {animalName} = this.state
        return (
            <Provider value={{animalName, addAnimal: this.addAnimal}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {AnimalContextProvider, Consumer as AnimalContextConsumer}