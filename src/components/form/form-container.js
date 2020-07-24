import React, {useState} from 'react';
import { ExportToCsv } from 'export-to-csv';
import Form from './form-view';
import {genders, recommendations} from '../../utils/options';

const defaultFields = {
    firstName: '',
    lastName: '',
    dob: null,
    email: '',
    address: '',
    phone: '',
    gender: [],
    recommendation: []
};

const CsvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'NOD form data',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
};

const TOTAL_ELEMENT = 8;

const FormContainer = props => {
    const { handleClickClose } = props;
    const [currentFields, setCurrentFields] = useState(defaultFields);
    const [progress, setProgress] = useState(0);
    // const [completed, setCompleted] = useState(0);
    
    const handleProgress = (newCurrentFields) => {
        let current = 0;
        console.log(newCurrentFields);
        Object.keys(newCurrentFields).forEach(key => {
            const value = newCurrentFields[key];
            if((Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value)){
                console.log('item: ', key);
                current += 1;
            }
            return;
        });
        const currentPercentage = Math.ceil((current / TOTAL_ELEMENT) * 100);
        setProgress(currentPercentage);
    };

    const onChange = (value, field) => {
        console.log(value, field);
        const newCurrentFields = {...currentFields, [field]: value};
        setCurrentFields(newCurrentFields);
        handleProgress(newCurrentFields);
    };

    const onSubmit = () => {
        // const currentData = {...currentFields};
        const csvExporter = new ExportToCsv(CsvOptions);

        csvExporter.generateCsv([currentFields]);
        setCurrentFields(defaultFields);
        handleClickClose();
    }

    return (
        <Form {...props} {...{onSubmit, onChange, currentFields, genders, recommendations, progress}}/>
    );
};

export default FormContainer;