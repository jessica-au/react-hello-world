//imports
import Human from './Animal'

function App() {
  return (
    <div>
      <h1>Hoomans</h1>
      {/* < Animal animal="dog"/>
      < Animal animal="cat"/>
      < Animal animal="tiger"/>
      < Animal animal="eagle"/>
      < Animal animal="lion"/> */}
      <Human mammal="human" name="Jessica" location="home" />
    </div>
  );
}

export default App;
