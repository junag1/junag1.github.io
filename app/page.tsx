import fs from 'fs'
import path from 'path'

import { CustomMDX } from '@/components/mdx'
import { BlogPosts } from '@/components/posts'

export default function Page() {
  const source = fs.readFileSync(
    path.join(process.cwd(), 'app', 'components', 'intro.mdx'),
    'utf-8'
  )

  return (
    <section>
      <div className="mb-4 prose">
        <CustomMDX source={source} />
      </div>
    </section>
  )
}
