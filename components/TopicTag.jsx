import getColor from "@/utils/color";

const TopicTag = ({topic}) => {
  return (
    <div className="text-white uppercase max-w-max p-1 font-semibold" style={{backgroundColor: getColor(topic.id)}}>{topic.name}</div>
  )
}

export default TopicTag;