'use client'
import { useEffect, useRef, useState } from "react";
import MainScene from "../components/MainScene";
import { log } from "console";

export default function Home() {

  const [logg,setLoger] = useState("")
  const [current,setCurrent] = useState(0)
  const [elems,setElems] = useState<HTMLElement[]>()

  const timerok = useRef(null)
  const eventScroll = ()=>{
    if(timerok.current) clearTimeout(timerok.current)
  }
  // const eventScroll = (event: React.UIEvent<HTMLElement, UIEvent>)=>{
  //   console.log(event)
  //   // logg.current +=`\n ${event.target}`
  // }

  // document.onscroll = (e)=>{
  //   console.log("SCROLLL",e)
  //   setLoger((prev)=> prev + "Scroll\n")
  //   // if(e)
  //   elm2.current?.scrollIntoView()
  // }

  useEffect(()=>{
    const list = document.querySelectorAll("section")
    console.log("LIST>",list)
    console.log("LIST>",Array.from(list))
    setElems(Array.from(list))
  },[])

  return (
    <main  className="relative flex flex-col items-center bg-gray-500">
      {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto cum laboriosam corrupti quod, dolorem porro amet delectus consequatur enim voluptatibus eos veritatis corporis, neque saepe! Eius, voluptatem! Eligendi, laboriosam!</span> */}
      <button onClick={()=>{setLoger(`${Math.random()}`)}}>CLICK</button>
      {/* <MainScene/> */}
      <span>{logg}</span>

      {/* overflow-hidden  onClick={()=>{console.log(`main:`)}} */}
      <main className="z-10 max-w-5xl flex flex-col flex-1  ">



        <div  onScroll={eventScroll} className="z-10 main-carousel">

          <section className="section max-md:flex">

            <header className='flex p-4 pt-1 rounded-lg justify-between bg-cyan-300 opacity-30'>
              <h1 className="text-2xl font-bold text-white">NASA</h1>
              <h3>information</h3>
            </header>

            <div className="flex max-md:flex-col-reverse max-md:flex-1">

              <div className="block-info basis-2/3 max-md:basis-0">
                <h2 className="lable">Curiosity (c англ. любопытство)</h2>
                <p className="info">Марсоход размером с автомобиль, исследующий кратер Гейла и гору Шарп на Марсе в рамках миссии Марсианской научной лаборатории НАСА (MSL). Curiosity был запущен с мыса Канаверал (CCAFS) 26 ноября 2011 года в 15:02:00 UTC и приземлился на Эолис Палус внутри кратера Гейла на Марсе 6 августа 2012 года в 05:17:57 UTC. Место посадки Брэдбери находилось менее чем в 2,4 км (1,5 мили) от центра цели приземления марсохода после путешествия длиной 560 миллионов км (350 миллионов миль).</p>
              </div>
              <div className="basis-1/3 max-md:flex-1 bg-emerald-500">place for model</div>

            </div>

          </section>



          <section className="section">
            <div className="block-info basis-2/3">
              <h2 className="lable">Задачи</h2>
              <p className="info">Цели миссии включают исследование марсианского климата и геологии, оценку того, предлагала ли когда-либо выбранная полевая площадка внутри Гейла экологические условия, благоприятные для микробной жизни (включая исследование роли воды), а также исследования обитаемости планеты в рамках подготовки к исследованию человеком.</p>
            </div>
            <div className="basis-1/3 bg-emerald-500">place for model</div>
          </section>




          <section className="section">
            <div className="block-info basis-3/5">
              <h2 className="lable">Curiosity  (c англ. любопытство)</h2>
              <p className="info">Марсоход размером с автомобиль, исследующий кратер Гейла и гору Шарп на Марсе в рамках миссии Марсианской научной лаборатории НАСА (MSL). Curiosity был запущен с мыса Канаверал (CCAFS) 26 ноября 2011 года в 15:02:00 UTC и приземлился на Эолис Палус внутри кратера Гейла на Марсе 6 августа 2012 года в 05:17:57 UTC. Место посадки Брэдбери находилось менее чем в 2,4 км (1,5 мили) от центра цели приземления марсохода после путешествия длиной 560 миллионов км (350 миллионов миль).</p>
            </div>
            <div className="basis-2/5 bg-emerald-500">place for model</div>
          </section>
          <section className="section">
            <div className="block-info basis-2/3">
              <h2 className="lable">Задачи</h2>
              <p className="info">Цели миссии включают исследование марсианского климата и геологии, оценку того, предлагала ли когда-либо выбранная полевая площадка внутри Гейла экологические условия, благоприятные для микробной жизни (включая исследование роли воды), а также исследования обитаемости планеты в рамках подготовки к исследованию человеком.</p>
            </div>
            <div className="basis-1/3 bg-emerald-500">place for model</div>
          </section>



          {/* <section className="section">
            <div className="block-info basis-3/5">
              <h2 className="lable">Curiosity  (c англ. любопытство)</h2>
              <p className="info">Марсоход размером с автомобиль, исследующий кратер Гейла и гору Шарп на Марсе в рамках миссии Марсианской научной лаборатории НАСА (MSL). Curiosity был запущен с мыса Канаверал (CCAFS) 26 ноября 2011 года в 15:02:00 UTC и приземлился на Эолис Палус внутри кратера Гейла на Марсе 6 августа 2012 года в 05:17:57 UTC. Место посадки Брэдбери находилось менее чем в 2,4 км (1,5 мили) от центра цели приземления марсохода после путешествия длиной 560 миллионов км (350 миллионов миль).</p>
            </div>
            <div className="basis-2/5 bg-emerald-500">place for model</div>
          </section>
          <section className="section">
            <div className="block-info basis-2/3">
              <h2 className="lable">Задачи</h2>
              <p className="info">Цели миссии включают исследование марсианского климата и геологии, оценку того, предлагала ли когда-либо выбранная полевая площадка внутри Гейла экологические условия, благоприятные для микробной жизни (включая исследование роли воды), а также исследования обитаемости планеты в рамках подготовки к исследованию человеком.</p>
            </div>
            <div className="basis-1/3 bg-emerald-500">place for model</div>
          </section>
          <section className="section">
            <div className="block-info basis-3/5">
              <h2 className="lable">Curiosity  (c англ. любопытство)</h2>
              <p className="info">Марсоход размером с автомобиль, исследующий кратер Гейла и гору Шарп на Марсе в рамках миссии Марсианской научной лаборатории НАСА (MSL). Curiosity был запущен с мыса Канаверал (CCAFS) 26 ноября 2011 года в 15:02:00 UTC и приземлился на Эолис Палус внутри кратера Гейла на Марсе 6 августа 2012 года в 05:17:57 UTC. Место посадки Брэдбери находилось менее чем в 2,4 км (1,5 мили) от центра цели приземления марсохода после путешествия длиной 560 миллионов км (350 миллионов миль).</p>
            </div>
            <div className="basis-2/5 bg-emerald-500">place for model</div>
          </section>
          <section className="section">
            <div className="block-info basis-2/3">
              <h2 className="lable">Задачи</h2>
              <p className="info">Цели миссии включают исследование марсианского климата и геологии, оценку того, предлагала ли когда-либо выбранная полевая площадка внутри Гейла экологические условия, благоприятные для микробной жизни (включая исследование роли воды), а также исследования обитаемости планеты в рамках подготовки к исследованию человеком.</p>
            </div>
            <div className="basis-1/3 bg-emerald-500">place for model</div>
          </section> */}


        </div>

        




        {/* <span className="text-white">16 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, deserunt architecto. Culpa similique cupiditate in sequi? Vitae eaque vero nesciunt ratione, porro cupiditate aliquid ad adipisci necessitatibus, natus illo placeat.</span>
        <br/>

        <span className="text-white text-sm">14  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, deserunt architecto. Culpa similique cupiditate in sequi? Vitae eaque vero nesciunt ratione, porro cupiditate aliquid ad adipisci necessitatibus, natus illo placeat.</span>
        <br/>


        <span className="text-white text-xs">12  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, deserunt architecto. Culpa similique cupiditate in sequi? Vitae eaque vero nesciunt ratione, porro cupiditate aliquid ad adipisci necessitatibus, natus illo placeat.</span> */}

      </main>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos labore ea fuga quis? Illum consequatur id aliquid qui nesciunt fuga est repellendus, eum ab architecto perferendis totam, blanditiis corporis.</div>
    </main>
  )
}
