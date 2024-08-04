
import { useThemes } from "../contaxt/Prectice";
import { useColor } from "../contaxt/colorRed";


function Home(){
    const {theme, changethemebtn} = useThemes()
    const{color, colorChangeBtn}=useColor()


    return(
        <>
            <button onClick={changethemebtn}>change</button>
            <br />
            <button style={{color:color}} onClick={colorChangeBtn}>Change-Color</button>
        </>
    )
}
export default Home;