import { SELECT_LIBRARY } from './types';

// export const selectLibrary = (libraryId) => {
//     return {
//         type: SELECT_LIBRARY,
//         payload: libraryId
//     };
// };

export const selectLibrary = (library) => {
    return {
        type: SELECT_LIBRARY,
        payload: library
    };
};
