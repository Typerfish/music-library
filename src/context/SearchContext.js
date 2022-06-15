// Imports
import {createContext} from 'react'

// Exports
export const SearchContext = createContext ({
    term: '',
    handleSearch: () => {}
})