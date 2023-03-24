
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useStore from "../../utils/store";
import { useEffect } from 'react';
import { fetchLocation } from '../../utils/fetchData';

const validationSchema = Yup.object({
  locationName: Yup.string()
    .trim()
    .required('Location is required')
    .min(2, 'Please enter at least 2 letters')
    .max(16, 'Location name must have max 16 letters')
    .matches(/^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']*(-[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*( [А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*$/,
      'The first Capital Letter and Cyrillic alphabet are Required'
    )
  
});

const DeptSearchForm = () => {

    const setSearchQuery = useStore((state) => state.setSearchQuery);
    const setPage = useStore((state) => state.setPage);
    const searchQuery = useStore((state) => state.searchQuery);
    const totalCount = useStore((state) => state.totalCount);
    const setLocations = useStore((state) => state.setLocations);
    const addLocations = useStore((state) => state.addLocations);
    const setTotalCount = useStore((state) => state.setTotalCount);
    const page = useStore((state) => state.page);
    const isLoadingSwitch = useStore((state) => state.isLoadingSwitch);

    const formik = useFormik({
        initialValues: {
            locationName: '',
        },
        validationSchema: validationSchema,
        onSubmit: async values => {
            setSearchQuery(values.locationName);
            setPage();

            formik.resetForm();
        },
    });
    

     useEffect(() => {
            if (!searchQuery) {
                    return;
                }
         fetchLocation(searchQuery, page)
             .then(response => {
                 if (response.success === false) { new Error(`There is no Location`) } else { return response }
             })
             .then(info => {
                 isLoadingSwitch();
                 if (page === 1) {
                     setLocations(info.data);
                 } else {
                     addLocations(info.data);
                 }
                 setTotalCount(info.info.totalCount);
             }).catch(error => error.message).finally(isLoadingSwitch());
    }, [searchQuery, page])
    

    return (
        
        <>
    <form onSubmit={formik.handleSubmit}>
                <input
                    id="locationName"
                    name="locationName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.locationName}
                    placeholder="Enter Location Name" />
        
                {formik.touched.locationName && formik.errors.locationName ? (<div>{formik.errors.locationName}</div>) : null}
                <button type="submit">Submit</button>
    </form>

    {totalCount === 0 ? (<p> There are no Department Locations with {searchQuery} Name. Please try again </p>) : null}
        
    </>
    )
}

export default DeptSearchForm;