export const profileForm1 = [
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "firstName",
        "placeholder": "First Name",
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "regex",
                "value": "^[A-Za-z]{3,20}$",
                "message": "Please enter a valid first name"
            }
    },
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "lastName",
        "placeholder": "Last Name",
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "isRequired",
                "value": "^[A-Za-z]{3,20}$",
                "message": "Please enter a valid last name"
            }
    },
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "email",
        "placeholder": "E-Mail",
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "regex",
                "value": "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$",
                "message": "Please enter a valid Email Id"
            }
    },
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "contactNo",
        "placeholder": "Contact No",
        "index": 0,
        "isEditable": true,
        "pattern": "NUMBER_PAD",
        "validation": 
            {
                "type": "regex",
                "value": "^([0-9]{10})$",
                "message": "Please enter a valid contact no"
            }
    }
]

export const profileForm2 = [
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "height",
        "placeholder": "Height (in cm)",
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "regex",
                "value": "^[0-9]{2,3}$",
                "message": "Please enter a valid height"
            }
    },
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "weight",
        "placeholder": "Weight(in kg)",
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "regex",
                "value": "^[0-9]{2,3}$",
                "message": "Please enter a valid weight"
            }
    },
    {
        "type": "DATE_FIELD",
        "value": "",
        "key": "dob",
        "placeholder": "Date of Birth",
        "isFutureDateEnable": true,
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "isRequired",
                "value": "1",
                "message": "Please select date of birth"
            }
    },
    {
        "type": "INPUT_FIELD",
        "value": "",
        "key": "address",
        "placeholder": "Address",
        "index": 0,
        "isEditable": true,
        "pattern": "DEFAULT",
        "validation": 
            {
                "type": "regex",
                "value": "^([0-9]{9})$",
                "message": "Please enter a valid Address"
            }
    }
]