// Init state
const defaultState = {
    // Data state
    quotes: [],
    carriers: [],
    places: [],
    currencies: [],
    // Loading state
    loading: true,
    loadingError: false,
    // Like
    like: 0
}

// Good practise
const SET_QUOTES = 'SET_QUOTES'
const SET_CARRIERS = 'SET_CARRIERS'
const SET_PLACES = 'SET_PLACES'
const SET_CURRENCIES = 'SET_CURRENCIES'
const SET_LIKE = 'SET_LIKE'
const SET_REMOVE_LIKE = 'SET_REMOVE_LIKE'

// Reducer
export default function dataReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_QUOTES:
        return {
            ...state,
                quotes: action.payload,
                loading: false
        }
        case SET_CARRIERS:
        return {
            ...state,
                carriers: action.payload,
                loading: false
        }
        case SET_PLACES:
        return {
            ...state,
                places: action.payload,
                loading: false
        }
        case SET_CURRENCIES:
        return {
            ...state,
                currencies: action.payload,
                loading: false
        }
        case SET_LIKE:
        return {
            ...state,
                like: state + action.payload,
                loading: false
        }
        case SET_REMOVE_LIKE:
        return {
            ...state,
                like: state - action.payload,
                loading: false
        }
        default:
            return state
    }
}

// Actions
export const setQuotes = (quotes) => ({
    type: SET_QUOTES,
    payload: quotes
})
export const setCarriers = (carriers) => ({
    type: SET_CARRIERS,
    payload: carriers
})
export const setPlaces = (places) => ({
    type: SET_PLACES,
    payload: places
})
export const setCurrencies = (currencies) => ({
    type: SET_CURRENCIES,
    payload: currencies
})
// Loading & Errors
export const setLoading = (bool) => ({
    type: SET_QUOTES,
    payload: bool
})
export const setError = (bool) => ({
    type: SET_QUOTES,
    payload: bool
})
// Like action
export const setLike = (like) => ({
    type: SET_QUOTES,
    payload: like
})
export const setRemoveLike = (like) => ({
    type: SET_QUOTES,
    payload: like
})