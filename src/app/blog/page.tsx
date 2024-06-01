//"use client"

async function getData(params:any) {
  // 1 endpoint - API?
  const endpoint = "http:// http://localhost:3000/api/posts"
  const res = await fetch(endpoint) //HTTP GET

  if (!res.ok) {
      throw new Error("failed to fetch data")
}
return res.json()

}

export default async function BlogPage() {
  const data = await getData(0)
  const items = data && data.items? [...data.items] : []
  console.log(items)
    return <main>
        <h1>
          Hello World
        </h1>
        <p>Posts:</p>
        {items && items.map((item, idx)=>{
          return <li key={`post-${idx}`}>{item.title}</li>
        })}
    </main>
}