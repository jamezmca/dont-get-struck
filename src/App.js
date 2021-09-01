import './App.css'
import GameScreen from './components/GameScreen'
import Layout from './components/Layout';

function App() {
  return (
    <div className="container">
      <Layout>
        <GameScreen />
      </Layout>
    </div>
  );
}

export default App;
