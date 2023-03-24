
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import useStore from "../../utils/store";
import { fetchData } from '../../utils/fetchData';

const validationSchema = Yup.object({
  ttnNumber: Yup.string()
    .trim()
    .required('Required')
    .matches(/^\d{14}$/, 'Please enter 14 digits TTN Number')
});


const SearchForm = () => { 

    const setCurrentNumber = useStore((state) => state.setCurrentNumber);
    const setListOfNumbers = useStore((state) => state.setListOfNumbers);
    const listOfNumbers = useStore((state) => state.listOfNumbers);
    const setTtnInfo = useStore((state) => state.setTtnInfo);
    const currentNumber = useStore((state) => state.currentNumber);
    
    const formik = useFormik({
        initialValues: {
            ttnNumber: '',
        },
        validationSchema: validationSchema,
        onSubmit: async values => {

            setCurrentNumber(values.ttnNumber);

            if (listOfNumbers.includes(values.ttnNumber)) {
                return;
            } else {
                setListOfNumbers(values.ttnNumber);
            }
            
            formik.resetForm();
        },
    });
  

 
    useEffect(() => {

    if (!currentNumber) {
      return;
    }

        if (currentNumber !== null) {
            fetchData(currentNumber)
                .then(response => { 
                    if (response.success === false) { new Error(`There is no TTN Number`) } else { return response}
                })
                .then(info => {
                    setTtnInfo(info.data);
                }).catch(error => error.message)
        }
       
    }, [currentNumber, setTtnInfo])


    return (
            

        <>
        

            <form onSubmit={formik.handleSubmit}>
                <input
                    id="ttnNumber"
                    name="ttnNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.ttnNumber}
                    placeholder="Enter TTN Number" />
        
                {formik.touched.ttnNumber && formik.errors.ttnNumber ? (<div>{formik.errors.ttnNumber}</div>) : null}
                <button type="submit">GET the Status</button>
            </form>
        
        </>
        )
}


export default SearchForm;