import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Card from './components/Card/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <Main />
      {cards}
    </div>
  )
}

export default App
