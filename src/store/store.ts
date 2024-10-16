import { create } from "zustand";

interface IStore {
    portfolioValue: number,
    cryptoInvested: number,
    data: any,
    setData: (data: any) => void;
    updateUserHoldings: (id: number, newUserHolding: number) => void;
    fetchData: () => void
}

export const useAppStore = create<IStore>((set, get) => ({
    portfolioValue: 0,
    cryptoInvested: 0,
    data: null,
    setData: (data: any) => set({ data: data }),
    fetchData: async () => {
        const res = await fetch('http://api.devtoolstech.in/api/v1/crypto/all')
        const response = await res.json()

        const data = response.map((entry: any) => {
            return {
                id: entry.id,
                name: entry.name,
                symbol: entry.symbol,
                price: entry.quote.USD.price.toFixed(2),
                userHoldings: 0
            }
        }
        )
        set({ data: data })
    },
    updateUserHoldings: (id: number, newUserHolding: number) => {
        const data = get().data
        let increasedPortfolioValue = 0;
        data.forEach((element: any) => {
            if (element.id === id) {
                element.userHoldings = newUserHolding
                increasedPortfolioValue = element.price * newUserHolding
            }

        });
        const cryptoInvested = get().cryptoInvested + +newUserHolding;
        const portfolioValue = get().portfolioValue + increasedPortfolioValue;
        set({ data: data, cryptoInvested: cryptoInvested, portfolioValue: portfolioValue })
    }

}))