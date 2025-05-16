
function page({params}:{params:{id:string}}) {
  return (
    <div>
        <h1 className="text-4xl">{params.id}</h1>
    </div>
  )
}

export default page