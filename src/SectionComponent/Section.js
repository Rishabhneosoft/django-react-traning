
import { Flower } from "./FlowerComponent/Flower";
import { flinfoArray } from "../Data/FlowerInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
export function Section(){
    return (
        <>
        <h2>Flower Info</h2>
        <section class="d-flex bg-info justify-content-"> 
            <Flower flowerSource="https://th.bing.com/th/id/OIP.nw6n7-8AVKp7C4C4_L6e0gHaEs?pid=ImgDet&rs=1" flowerName="Lotus Flower" flowerInfo="https://realitycrazy.com/lotus-flowers-a-beautiful-addition-to-your-garden-pond/" shortDesc="  A lotus flower may be efficaciously grown in “tubs” in or around your 
            pond. Large boxes will include paintings as well. 
            Just be sure to hold them wet, and by using wet, the 
            experts suggest VERY moistly. "></Flower>
            <Flower flowerSource="https://www.1800flowers.com/blog/wp-content/uploads/2021/02/rose-facts-edited.jpg" flowerName="Rose Flower" flowerInfo="https://www.1800flowers.com/blog/flower-facts/rose-facts/" shortDesc="Roses are often called “The Queen of Flowers,” a name that was given to them by Sappho, a poet from the sixth-century BC who was known for her elegant writing style. "></Flower>
            <Flower flowerSource="https://th.bing.com/th/id/OIP.OAxLYBtN7e5rMwZZJ0hFDgHaHa?pid=ImgDet&rs=1" flowerName="SunFlower Flower" flowerInfo="https://www.theseedcollection.com.au/sunflower-Giant-Russian" shortDesc="Tall plants that grow to 2-3m in height with large attractive yellow flowers.  Flower heads grow up to 45cm in diameter with large seeds which makes it an ideal variety for producing seeds for eating."></Flower>
        </section>
        <hr></hr>
        <section>
            <Flower flowerSource={flinfoArray[0].src} flowerName={flinfoArray[0].name} flowerInfo={flinfoArray[0].info} shortDesc={flinfoArray[0].desc}></Flower>
            <Flower flowerSource={flinfoArray[1].src} flowerName={flinfoArray[1].name} flowerInfo={flinfoArray[1].info} shortDesc={flinfoArray[1].desc}></Flower>
            <Flower flowerSource={flinfoArray[2].src} flowerName={flinfoArray[2].name} flowerInfo={flinfoArray[2].info} shortDesc={flinfoArray[2].desc}></Flower>
        </section>
        <hr></hr>
        <section>
            {
            flinfoArray.map(obj=>{
              return (
                <Flower flowerSource={obj.src} flowerName={obj.name} flowerInfo={obj.info} shortDesc={obj.desc}></Flower>
              )      
            })
            }
        </section>
        </>
    );
}
