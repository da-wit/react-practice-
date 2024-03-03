import styles from "./Product.module.css"
import PageNav from "../component/PageNav"
export default function Product() {
  return (
    <div className={styles.product}>
      <PageNav/>
      <section>
        <img src="img-1.jpg" alt="product"/>
        <div>
          <h1>About WorldWise</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Accusantium consequatur voluptatum dicta, fuga architecto c
          orrupti quibusdam veritatis et in doloremque ut commodi harum
           amet. Saepe possimus natus eum necessitatibus incidunt cupiditate, quos p
           orro, sit debitis fugiat rem? Maxime atque omnis sequi esse eius optio su
           scipit magni porro doloribus. Dolore, ipsam?</p>
        </div>
      </section>
        </div>
  )
}
