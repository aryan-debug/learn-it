import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.home}>
      <section>
        <h1 className={styles.title}>Welcome To Learn.it</h1>
        <h1 className={styles.subtitle}>
          Learn new
          <span> strategies</span>/<span>skills</span>/<span>topics </span><br />
          from thousands of people around the world!
        </h1>
      </section>
      <button className={styles.home_button}>Get Started</button>
    </div >
  )
}