import React from 'react'

import {AnimalContextConsumer} from './AnimalContext'

function List() {
    return (
        <div>
            <AnimalContextConsumer>
                {({animalName}) => (
                    <ul>{animalName}</ul>
                )}
            </AnimalContextConsumer>
        </div>
    )
}

export default List