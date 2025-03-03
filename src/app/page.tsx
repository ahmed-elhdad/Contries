import Header from '@/components/Header';
import Item from '@/components/items';
import Control from '@/components/Control';
import Button from '@/components/Button-to-top';

function App() {
  return(
    <main className='container main main-container'>
      <Header/>
      <Control/>
      <Item/> 
      <Button/>
    </main>
  );
}

export default App;


