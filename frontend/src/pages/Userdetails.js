import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {loginUser} from "../services/loginService";
import {userDetails} from "../services/userDetailsService";

const ages = [
    {
        value: '<18',
        label: '<18',
    },
    {
        value: '18-24',
        label: '18-24',
    },
    {
        value: '25-34',
        label: '25-34',
    },
    {
        value: '35-44',
        label: '35-44',
    },
    {
        value: '45-54',
        label: '45-54',
    },
    {
        value: '55-64',
        label: '55-64',
    },
    {
        value: '>65',
        label: '>65',
    },
];

const sectors = [
    {
        value: 'Industrie',
        label: 'Industrie',
    },
    {
        value: 'Consulting',
        label: 'Consulting',
    },
];

const departments = [
    {
        value: 'IT',
        label: 'IT',
    },
    {
        value: 'HR',
        label: 'HR',
    },
];

const occupations = [
    {
        value: 'Developer',
        label: 'Developer',
    },
    {
        value: 'Consultant',
        label: 'Consultant',
    },
];

const company_sizes = [
    // todo: update size to economy size
    {
        value: '1-3',
        label: '1-3',
    },
    {
        value: '4-10',
        label: '4-10',
    },
    {
        value: '11-50',
        label: '11-50',
    },

    {
        value: '51-250',
        label: '51-250',
    },

    {
        value: '>250',
        label: '>250',
    },
];



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Userdetails() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [sector, setSector] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [occupation, setOccupation] = React.useState('');
    const [userData, setUserData] = React.useState({
        age: '', sector: '',
        department: '', occupation: '', company_size: '', plz: 99999
    });
    const [company_size, setCompany_size] = React.useState('');
    const [plz, setPlz] = React.useState(99999);





    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value
        })
    };

    const saveData = (e) => {
        e.preventDefault()

        console.log('loading data...' + ' ' +userData.age+ ' ' + userData.sector+ ' ' + userData.department
            + ' ' + userData.occupation+ ' ' + userData.company_size+ ' ' + userData.plz)

        /* Fehler!
        setUserData([
            ...userData,
            {age: userData.age, sector: userData.sector,
                department: userData.department, occupation: userData.occupation
                //company_size: company_size
            }
        ])*/

        userDetails(userData.age, userData.sector, userData.department,
            userData.occupation, userData.company_size, userData.plz).then()

        e.target.reset()
        setAge('')
        setSector('')
        setDepartment('')
        setOccupation('')
        setCompany_size('')
        setPlz(99999)
        setUserData({
            age: '', sector: '',
            department: '', occupation: '', company_size: '', plz: 99999
        })

    }

//  todo: plz validieren (with react hooks form?), button ändern to Material UI, reset anpassen, unnötigen hooks löschen

    return (
        <>
        <h2>UserDetails Form</h2>
        <form onSubmit={ saveData } className={classes.root} autoComplete="off">
            <div>
                <TextField

                    id="age"
                    name="age"
                    select
                    label="age"
                    value={userData.age}
                    onChange={handleChange}
                    helperText="Please select your age"
                    variant="filled"
                >
                    {ages.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="sector"
                    name="sector"
                    select
                    label="sector"
                    value={userData.sector}
                    onChange={handleChange}
                    helperText="Please select your sector"
                    variant="filled"
                >
                    {sectors.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="department"
                    name="department"
                    select
                    label="department"
                    value={userData.department}
                    onChange={handleChange}
                    helperText="Please select your department"
                    variant="filled"
                >
                    {departments.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField

                    id="occupation"
                    name="occupation"
                    select
                    label="occupation"
                    value={userData.occupation}
                    onChange={handleChange}
                    helperText="Please select your occupation"
                    variant="filled"
                >
                    {occupations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    //required
                    id="company_size"
                    name="company_size"
                    select
                    label="company size"
                    value={userData.company_size}
                    onChange={handleChange}
                    helperText="Please select the company size"
                    variant="filled"
                >
                    {company_sizes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    required
                    type='number'
                    id="plz"
                    name="plz"
                    label="plz"
                    //value={userData.company_size}
                    onChange={handleChange}
                    helperText="Please select your plz"
                    variant="filled"
                >
                </TextField>

            </div>

            <button className="btn btn-primary btn-block" type="submit">Agregar</button>

        </form>
        </>
    );
}
