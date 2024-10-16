import { useAppStore } from "../../store"
import { Card } from "../Card"
import './Header.css';

export const Header = () => {
    const { portfolioValue, cryptoInvested } = useAppStore()
    return (
        <div className="header-container">
            <Card heading="Portfolio Value" value={`$${portfolioValue}`}></Card>
            <Card heading="Cryptos Invested" value={`${cryptoInvested}`}></Card>
        </div>
    )
}