import fs from 'fs'
import matter from 'gray-matter'
import LearnCard from '../components/LearnCard'
import styles from '../styles/Post.module.css'


export default function Home({ data }) {
    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            <div className={styles.grid}>
                {data.map((post) => <LearnCard key={post.id} {...post} />)}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const fileContents = fs.readFileSync('posts/post1.md')
        .toString()
    const { data } = matter(fileContents)
    return {
        props: {
            data: [data]
        }
    }
}