import Switch from "react-switch";


const Filter = (props) => {
    const { name, gender, species } = props.filterValues;

    return (
        <div className="MuiGrid-root jss5 MuiGrid-container">
            <div className="jss6">
                <div>
                    <div className="MuiInputBase-root">
                        <input placeholder="Enter a name" type="text" onChange={(e) => props.onChangeValues('name', e.target.value)} className="MuiInputBase-input" value={name} />
                    </div>
                    <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={"0"} type="button" aria-label="search">
                        <span className="MuiIconButton-label">
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                ></path>
                            </svg>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                    </button>
                </div>
            </div>
            <div className="MuiFormGroup-root jss7">
                <div className="MuiFormControl-root jss8">
                    <div className="MuiFormControl-root jss8">
                        <select className="MuiInputBase-input" value={gender} onChange={(e) => props.onChangeValues('gender', e.target.value)}>
                            <option  value={''}  disabled hidden>Gender</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Genderless'}>genderless</option>
                            <option value={'unknown'}>unknown</option>
                        </select>

                    </div>
                </div>
            </div>
            <div className="MuiFormGroup-root jss7">
                <div className="MuiFormControl-root jss8">
                    <select  className="MuiInputBase-input" value={species} onChange={(e) => props.onChangeValues('species', e.target.value)}>
                        <option  value={''} disabled hidden>Species</option>
                        <option value={'Human'}>human</option>
                        <option value={'Alien'}>alien</option>
                        <option value={'Humanoid'}>Humanoid</option>
                    </select>
                </div>
            </div>
            <div className="jss9"><button type="button" onClick={() => props.clearFilter()}>Clear All</button></div>
            <fieldset className="MuiFormControl-root jss7">
                <div className="MuiFormGroup-root">
                    <label className="MuiFormControlLabel-root">
                        <Switch className="jss14 "
                            onChange={() => props.onChangeSort()}
                            checkedIcon={false}
                            height={17}
                            width={43}
                            handleDiameter={22}
                            uncheckedIcon={false}
                            offColor={'#bdbdbd'}
                            onColor={'#FF80AB'}
                            onHandleColor={'#f50057'}
                            checked={props.sort} />
                        <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">{props.sort ? 'Ascending' : 'Descending'}</span>
                    </label>
                </div>
            </fieldset>
        </div>
    )
}
export default Filter;