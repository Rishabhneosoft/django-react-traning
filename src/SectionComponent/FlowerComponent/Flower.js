import { Description } from "./DescriptComponent/Description";


export function Flower(props){
    return (
     
        <article>
            <figure>
                <img src={props.flowerSource} alt={props.flowerName} height="200" width="200"></img>
                <figcaption>{props.flowerName}</figcaption>
            </figure>
            <Description desc={props.shortDesc}></Description>
            <p>
                <a href={props.flowerInfo}>More Info about {props.flowerName}</a>
            </p>
        </article>
  
    );
  }
  