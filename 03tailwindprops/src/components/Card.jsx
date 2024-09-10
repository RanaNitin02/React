

function Card({username}) {

    console.log(username);
    
  return (
    <>
    
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-10">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/17117455/pexels-photo-17117455/free-photo-of-close-up-of-pink-azaleas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Tailwind CSS is the only framework that I have seen scale
              on large teams. It is easy to customize, adapts to any design,
              and the build size is tiny
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">
              {username}
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default Card