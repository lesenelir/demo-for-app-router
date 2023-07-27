import path from "node:path"
import fs from "node:fs/promises"

interface IPost {
  id: string,
  title: string,
  description: string
}

// fetch data function
async function getData() {
  const filePath: string = path.join(process.cwd(), 'data', 'posts.json')
  const jsonData: string = await fs.readFile(filePath, 'utf-8')  // await fs readFile
  return JSON.parse(jsonData)
}

export async function generateStaticParams() {
  const postsObj: {posts: IPost[]} = await getData()

  return postsObj.posts.map((post: any) => ({id: post.id}))
  // return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

function PostIdPage(props: any) {
  console.log(props) // { params: { id: '1' }, searchParams: {} }

  return (
    <>
      <h1>You are in /posts/{props.params.id}</h1>
    </>
  )
}

export default PostIdPage
