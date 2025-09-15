export function CardProject1({ title, img, context }) {
  return <div
    className="
     border-[0.0625rem] border-gray-200/30
     rounded-3xl
      relative 
      overflow-clip
    bg-[#0a0a0a4b]
      bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.25),transparent_90%)]
      lg:pt-10 lg:pb-10 lg:pl-10
      pt-5 pb-5 pl-5
      lg:w-[40vw] lg:h-[40vw]
      h-[20rem] w-[20rem]
      flex flex-col  lg:gap-5 gap-3
      hover:scale-[1.02] transition-all duration-300
      hover:shadow-lg hover:shadow-pink-500/20
    "
  >
    <img src={img} alt=""
      className="border-[0.0625rem] border-gray-300/30
      rounded-tl-3xl max-h-[75%] "/>
    <h3 className="lg:text-3xl text-xl text-center">{title}</h3>
    <p className="text-gray-400 text-center text-md line-clamp-1 lg:line-clamp-2 px-2">{context}</p>
  </div>
}
export function CardProject2({ title, img, context }) {
  return <div
    className="
     border-[0.0625rem] border-gray-200/30
     rounded-3xl
      relative 
      overflow-clip
    bg-[#0a0a0a4b]
      bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.25),transparent_90%)]
      lg:p-10 p-5 
      !pb-0
      lg:w-[40vw] lg:h-[40vw]
      h-[20rem] w-[20rem]
      flex flex-col  lg:gap-5 gap-2
      hover:scale-[1.02] transition-all duration-300
      hover:shadow-lg hover:shadow-pink-500/20
    "
  >
    <h3 className="lg:text-3xl text-2xl text-center">{title}</h3>
    <p className="text-gray-400 text-center text-md line-clamp-2 ">{context}</p>
    <img src={img} alt=""
      className="border-[0.0625rem] border-gray-300/30
      rounded-t-3xl  min-h-[60%] "/>

  </div>
}
