const app = ()=>{
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://source.unsplash.com/random/400x200" alt="Random image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Tailwind Card</div>
    <p className="text-gray-700 text-base">
      This is a simple card component styled using Tailwind CSS utility class.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tailwind</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#css</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#webdev</span>
  </div>
</div>

    </>
  )
}

export default app;