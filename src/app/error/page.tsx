// "use client"



async function getData(params:any) {
    // 1 endpoint - API?
    // const endpoint = "http://localhosts:3000/api/posts" // -> third party api 
    // request??
    // const res = await fetch(endpoint) //HTTP GET

    // if (!res.ok){
    //     throw new Error ("failed to fetch data")
    // }
    //    return res.json()
    return {items: []}
}

export default async function BlogPage(params:any) {
    const data =await getData(1)
    const items = data && data.items ? [...data.items] : []
    console.log (items)
      return <main>
         <h1>
            Hello World
         </h1>
         <p>
            Posts:
         </p>
         {items && items.map((item, idx)=>{
            return <li key={`post-${idx}`}>
               {item.title}
            </li>
         })}
      </main>
       
}
  
