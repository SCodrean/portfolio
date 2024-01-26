import Image from 'next/image'
import Link from 'next/link'
import { comment } from 'postcss'

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/users">Users</Link>      {/*a href redownloads the page everytime you move pages, Link does not*/}
    </main>
  )
}


