import { useState } from 'react';
import './EditableEntry.css';
import { useAppStore } from '../../store';

export const EditableEntry = ({ value, id }: { value: number, id: number }) => {
    const { updateUserHoldings } = useAppStore()
    const [edit, setEdit] = useState(false);
    const [holdingValue, setholdingValue] = useState(value);

    const saveHoldings = () => {
        updateUserHoldings(id, holdingValue);
        setEdit(false)
    }
    return (
        <div className="editable-entry">
            {edit ?
                <>
                    <input type='number' defaultValue={value} onChange={(e) => setholdingValue(+e.target.value)} />
                    <div onClick={saveHoldings} className='editable-icon'>✓</div>
                    <div onClick={() => setEdit(false)} className='editable-icon'>✗</div>
                </> :
                <>
                    <div>{value}</div>
                    <div onClick={() => setEdit(true)} className='editable-icon'>📝</div>
                </>}
        </div>
    )
}