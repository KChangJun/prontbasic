import React from 'react'
import {Dispatch, SetStateAction} from 'react'
interface Props{
    label: string;
    type : string;
    name : string;
    setter : Dispatch<SetStateAction<any>>
    maxLength : number;
    iconClass :string;
}


export default function NaverInput(props:Props) {
    const {label,type, name, setter, maxLength, iconClass} = props; // 받은 걸 분해해줌. 객체를 주고 받을땐 {}를 쓰자
    return (
        <div className="input_row">
            <div className="icon_cell">
                <span className={iconClass}>
                    <span className="blind">{label}</span> 
                </span>
            </div>
            <input type={type} className="input_text" maxLength={maxLength} placeholder={label} name={name} onChange={(event) => setter(event.target.value)} />
        </div>
    )
}

