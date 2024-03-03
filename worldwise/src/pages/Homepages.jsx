// import PageNav from "../component/PageNav";
import { Link } from "react-router-dom";
import styles from "./Homepages.module.css";
import PageNav from "../component/PageNav";

export default function Homepages() {
  return (
    <main className={styles.main}>
      <PageNav/>
     <section >
     <h1>You Travle The World
        <br/>
        Worldwise keep track of your advanture
      </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur 
        impedit modi labore nesciunt dolorum, repellat accusantium velit fuga 
        aliquam quam nemo autem perspiciatis perferendis obcaecati doloremque magnam corrupti iusto sed.</p>

        <Link to="/app" className="cta">Start tracking now</Link>
     </section>

     

    </main>
  )
}
