import getColor from "@/app/lib/color";

export function ClassicTag({ topic }, special = false) {
  return (
    <div className="text-white uppercase max-w-max p-1 px-2 font-semibold rounded-sm" style={{ backgroundColor: getColor(topic.id) }}>{topic.name}</div>
  )
}

export function SpecialTag({ text }) {
  return (
    <div className="text-white uppercase max-w-max p-1 px-2 font-semibold bg-gradient-to-br from-rose-900 to-cyan-400"
    >
      {text}
    </div>
  )
}