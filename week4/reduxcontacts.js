const { createStore } = require('redux');

const initialState = [
    {
    name: "Drew Belmont",
    age: "34",
    hobby: "xbox"
    },
    {
    name: "Waylon Gildea",
    age: "8",
    hobby: "playing fetch"
    },
    {
    name: "Hank Belmont",
    age: "11",
    hobby: "taking long naps"
    }
]

const add = (data) => {
    return {
        type: 'ADD',
        data: data
    }
}

const remove = (index) => {
    return {
        type: 'REMOVE',
        data: index
    }
}

const myReducer = (state = initialState, action) => {
    const newState = [...state];
    if(action.type ==='ADD'){
        return [
            ...state, action.data
        ]
    }
    if(action.type ==='REMOVE'){
        let newState = state
        console.log(action.data)
        newState.splice(action.data, 1)
        console.log(newState)
        return [
            ...newState
        ]
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('Contact added', (store.getState()));
})

const newObj = {
    name: "Ally Kotz",
    age: "30",
    hobby: "Playing kickball"
}

store.dispatch(add(newObj));
store.dispatch(remove(1));
store.dispatch(add(newObj));
