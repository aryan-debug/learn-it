import { useRouter } from 'next/router'
import styles from '../styles/Post.module.css'

const post = () => {
    const { query } = useRouter()
    const id = query.id
    return (
        <div>
            <div className={styles.post}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default post