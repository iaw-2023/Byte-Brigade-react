import getColor from "@/app/lib/color";

const TopicTag = ({topic}) => {
  return (
    <div className="text-white uppercase max-w-max p-1 px-2 font-semibold rounded-sm" style={{backgroundColor: getColor(topic.id)}}>{topic.name}</div>
  )
}

export default TopicTag;