import Benefit from "../components/benefit/benefit";
import SuscriptionPrice from "../components/suscriptionPrice/suscriptionPrice";

const Suscription = () => {
    return (
        <main style={{width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
           <SuscriptionPrice/>
           <Benefit/>
        </main>
    )
}

export default Suscription;