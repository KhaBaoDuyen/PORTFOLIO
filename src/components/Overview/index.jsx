export default function OverView({ total = "20", title = "Tín chỉ", context = "Đã hoàn thành trong quá trình học tập" }) {
    return <div className="
     border-[0.0625rem] border-gray-200/30
     rounded-3xl
     bg-[#0a0a0a4b]
      bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.25),transparent_90%)]
      p-5 
      lg:w-[18rem] lg:h-[16rem]
      w-full h-auto gap-5
      flex flex-col  justify-between
      lg:hover:scale-[1.02] transition-all duration-300  
      hover:shadow-lg hover:shadow-pink-500/20
      hover:translate-y-[-5px]
    ">
        <h1 className="lg:text-7xl text-6xl hover:scale-[1.03] 
        hover:translate-y-[2px]">{total}</h1>
        <div className="flex flex-col gap-3">
            <h3 className="text-3xl line-clamp-1 hover:translate-y-[2px]">{title}</h3>
            <p className="text-gray-400 text-md line-clamp-2">{context}</p>
        </div>

    </div>
}