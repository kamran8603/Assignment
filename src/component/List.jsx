
function List() {
  return (
      <ul className="space-x-4 flex pt-8 pb-2  border-b-2 mb-8 text-slate-500/80">
      <li className="text-black cursor-pointer underline underline-offset-[13px]">All Posts(32)</li>
        <li  className="hover:text-black cursor-pointer hover:underline hover:underline-offset-[13px]">Articles</li>
        <li  className="hover:text-black cursor-pointer hover:underline hover:underline-offset-[13px]">Event</li>
        <li  className="hover:text-black cursor-pointer hover:underline hover:underline-offset-[13px]">Education</li>
        <li  className="hover:text-black cursor-pointer hover:underline hover:underline-offset-[13px]">Job</li>
    </ul>
  )
}

export default List