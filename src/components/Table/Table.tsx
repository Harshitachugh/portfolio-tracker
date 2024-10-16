import { useAppStore } from '../../store'
import { EditableEntry } from '../EditableEntry'
import './Table.css'
export const Table = () => {
    const data = useAppStore((state) => state.data)

    return (
        <table className='table-container'>
            <tr className='table-row'>
                <th className='name'>Name</th>
                <th className='entry'>Symbol</th>
                <th className='price'>Price (USD)</th>
                <th className='user-holdings'>Your Holdings</th>
            </tr>
            {data?.map((entry: any) => (<tr className='table-row'>
                <td className='name'>{entry.name}</td>
                <td className='entry'>{entry.symbol}</td>
                <td className='price'>{entry.price}</td>
                <td className='user-holdings'><EditableEntry id={entry.id} value={entry.userHoldings} /></td>
            </tr>))}
        </table>
    )
}
