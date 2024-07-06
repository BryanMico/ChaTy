import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <Sidebar className="w-full md:w-1/4 h-1/4 md:h-full" />
      <MessageContainer className="w-full md:w-3/4 h-3/4 md:h-full bg-gray-400 p-5 rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50" />
    </div>
  )
}

export default Home
