//  [...slug] 不捕获 /help （如果该文件夹内有其他的.tsx，则也不捕获该文件的内容）
//  [[...slug]] 可以包括/help
function ProductPage({params}: {params: {slug: string[]}}) {
  const str = params.slug.join('/')

  return (
    <>
      <h1>product page</h1>
      <p>You are in /products/{str}</p>
    </>
  )
}

export default ProductPage
