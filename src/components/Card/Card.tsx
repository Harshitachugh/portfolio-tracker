import './Card.css';

export const Card = ({ heading, value }: { heading: string, value: string }) => {
    return (
        <div className="card-container">
            <div className="card-headding">{heading}</div>
            <div className="card-value">{value}</div>
        </div>
    )
}