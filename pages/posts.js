import fs from 'fs'
import matter from 'gray-matter'
import LearnCard from '../components/LearnCard'
import path from 'path'
import styles from '../styles/Post.module.css'


export default function Home({ post_metadata }) {
    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            <div className={styles.grid}>
                {post_metadata.map((post) => <LearnCard key={post.id} {...post} />)}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const files = fs.readdirSync(path.join('posts'))

    const post_metadata = files.map((filename) => {
        const file = fs.readFileSync(path.join('posts', filename), 'utf8')
        const { data } = matter(file)
        return data
    })

    return {
        props: {
            post_metadata
        }
    }
}