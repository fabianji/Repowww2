import React from "react"
import { StaticImage} from "gatsby-plugin-image"

export default function Home() {
  return <div>
    <h1> Holaaa!</h1>
    <StaticImage
    src = "../images/esponjacavernicola.jpg"
    width={1000}
    alt="esponjacavernicola"
    quality="40"
    //transformOptions = {{grayscale:true}}  //Blanco y nego.
    />

    </div>
}
