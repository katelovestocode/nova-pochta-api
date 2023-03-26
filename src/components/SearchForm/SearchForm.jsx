
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import useStore from "../../utils/store";
import { fetchData } from '../../utils/fetchData';
import {Form, Input, Button, Warning} from "./SearchForm.styled"

const validationSchema = Yup.object({
  ttnNumber: Yup.string()
    .trim()
    .required('TTN Number is Required')
    .matches(/^\d{14}$/, 'Please enter 14 digits TTN Number')
});


const SearchForm = () => { 

    const setCurrentNumber = useStore((state) => state.setCurrentNumber);
    const setListOfNumbers = useStore((state) => state.setListOfNumbers);
    const listOfNumbers = useStore((state) => state.listOfNumbers);
    const setTtnInfo = useStore((state) => state.setTtnInfo);
    const currentNumber = useStore((state) => state.currentNumber);
    const isLoadingSwitch = useStore((state) => state.isLoadingSwitch);
    
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
                    isLoadingSwitch();
                }).catch(error => error.message).finally(isLoadingSwitch())
        }
       
    }, [currentNumber, setTtnInfo, isLoadingSwitch])


    return (
            

        <>
        

            <Form onSubmit={formik.handleSubmit}>
                <Input
                    id="ttnNumber"
                    name="ttnNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.ttnNumber}
                    placeholder="Enter TTN Number" />
        
                {formik.touched.ttnNumber && formik.errors.ttnNumber ? (<Warning>{formik.errors.ttnNumber}</Warning>) : null}
                <Button type="submit">Submit</Button>
            </Form>
        
        </>
        )
}


export default SearchForm;