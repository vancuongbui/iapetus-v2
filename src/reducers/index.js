import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LibraryReducer from './LibraryReducer';
import SelectedReducer from './SelectedReducer';
import FormReducer from './FormReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReduer';

export default combineReducers({
    auth: AuthReducer,
    libraries: LibraryReducer,
    selectedLibrary: SelectedReducer,
    formDataFromReducer: FormReducer,
    // the foolowing reducer is used to contain all states of the form: name, phone, language.
    employeeFormReduer: EmployeeFormReducer,
    employees: EmployeeReducer,

});
