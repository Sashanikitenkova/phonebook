import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/slice';
import s from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const onChangeFilter = e => {
        dispatch(filterContact(e.target.value));
    }

    return (
        <div className={s.filter}>
            <label className={s.label}>Find contacts by name
            <input
                    type="text"
                    name="filter"
                    onChange={onChangeFilter}
                    className={s.input}
            />
            </label>
        </div>
    )
} 




// import { useDispatch } from 'react-redux';
// import { filterContact } from 'redux/contactSlice';
// import s from './Filter.module.css';

// const Filter = () => {
//     const dispatch = useDispatch();
//     const onChangeFilter = e => {
//         dispatch(filterContact(e.target.value));
//     }

//     return (
//         <div className={s.filter}>
//             <label className={s.label}>Find contacts by name
//             <input
//                     type="text"
//                     name="filter"
//                     onChange={onChangeFilter}
//                     className={s.input}
//             />
//             </label>
//         </div>
//     )
// } 

// export default Filter;

