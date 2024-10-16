import { useEffect } from 'react'
import './App.css'
import { useAppStore } from './store'
import { Header } from './components/Header'
import { Table } from './components/Table'

function App() {
  const { fetchData } = useAppStore()
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <Header />
      <Table />
    </>
  )
}

export default App
