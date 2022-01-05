import styles from '../styles/Learn.module.css'
import { useRouter } from 'next/router'

const LearnCard = (post) => {

    return (
        <div className={styles.card}>
            <img src={post.cover_image} alt='img' />
            <section className={styles.description}>
                <h1>{post.title.slice(0, 30)}</h1>
                <p>{post.date}</p>
                <p>{post.excerpt}</p>
                <section className={styles.author}>
                    <img src={post.author_url} alt='author' />
                    <h3>{post.author}</h3>
                </section>
            </section>
        </div>
    )
}

export default LearnCard