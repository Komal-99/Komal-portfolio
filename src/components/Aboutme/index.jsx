
export default function AboutMe() {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl font-sans">Storyline</h1>
        <h4 className="tracking-[4px] text-xl mt-2 text-orange-600">
          Interesting stuff about me
        </h4>
      </div>
      <div className="mt-16 grid grid-cols-7 gap-5 mb-5  min-h-[320px]">
        <div className="col-span-3 rounded-2xl px-8 py-2 flex flex-col justify-end bg-blue-500">
          <h4 className="text-3xl font-sans text-white">Komal Gupta</h4>
          <p className="text-gray-200 text-xl mt-2">
            Hello there! My name is Komal Gupta, and I am a passionate and
            dedicated tech enthusiast with a deep interest in the field of
            artificial intelligence (AI). The continuous advancements and
            potential of AI have always fascinated me, inspiring me to explore
            this rapidly evolving field. My ultimate goal is to create scalable
            applications that simplify everyday tasks and make a positive impact
            on a global scale.
          </p>
        </div>
        <div className="col-span-4 rounded-2xl px-8 py-2 flex flex-col justify-end bg-green-500">
          <h4 className="text-3xl font-sans text-white">Participatory</h4>
          <p className="text-gray-200 text-xl mt-2">
            Apart from my technical pursuits, I am actively engaged in sharing
            knowledge and giving back to the community. I thoroughly enjoy
            blogging and organizing meetups to connect with fellow tech
            enthusiasts, exchange insights, and inspire others to pursue their
            own paths in technology. Through these platforms, I have had the
            privilege of sharing my experiences and contributing to the growth
            of the tech community. I firmly believe in the power of
            collaboration and recognize its role in driving innovation.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-5 mb-5 min-h-[320px]">
        <div className="col-span-4 rounded-2xl px-8 py-2 flex flex-col justify-end bg-green-500 ">
          <h4 className="text-3xl font-sans text-white ">Summary</h4>
          <p className="text-gray-200 text-xl mt-2 ">
            In summary, I am a passionate and hardworking individual with a
            strong drive to make a difference through technology. My ultimate
            goal is to design scalable applications that simplify everyday tasks
            and contribute to a better world. Beyond coding, I actively engage
            in sharing knowledge and collaborating with others through blogging
            and organizing meetups. Currently, I am focused on deep learning and
            NLP, constantly expanding my expertise in these domains. I am
            excited about the endless possibilities that lie ahead and look
            forward to the challenges and opportunities that come my way in the
            exciting world of AI and technology.
          </p>
        </div>
        <div className="col-span-3 rounded-2xl px-8 py-2 flex flex-col justify-end bg-blue-500">
          <h4 className="text-3xl font-sans text-white">Current focus</h4>
          <p className="text-gray-200 text-xl mt-2 ">
            In my journey through the world of technology, I am currently
            focusing on deep learning and natural language processing (NLP)
            concepts. These areas intrigue me due to their potential to
            revolutionize various industries and enhance human-computer
            interaction. I am constantly seeking to deepen my understanding and
            expertise in these domains, exploring cutting-edge technologies and
            tools to create innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
