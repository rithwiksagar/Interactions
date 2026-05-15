"use client";

import { ClipboardCopyIcon, Copy, Leaf } from "lucide-react";
import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

const data = [
  {
    title: "1 Who We Are",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quos! Fugiat earum maiores nostrum dolores ipsum maxime aut vitae atque tempora non rem eveniet, tempore sed obcaecati iure minima rerum consequuntur officiis dolorum corporis. Reiciendis nesciunt dolor neque quibusdam. Rem, voluptatum quam necessitatibus molestias vel qui quidem nihil, atque ad, magni voluptate. Vitae laudantium dignissimos eos adipisci quae quasi, quibusdam odit natus iusto iure commodi nobis! Itaque nisi deserunt ut neque? Sunt voluptas excepturi odit, hic porro nam repudiandae beatae, ab accusantium eius aliquid molestias dignissimos quam nihil laboriosam vel laborum ratione quo mollitia ut maiores voluptatem consequuntur. Consequuntur rerum nihil illo aperiam, sequi in aspernatur iure quisquam voluptatum aut, necessitatibus velit aliquid dolores blanditiis, at cupiditate minus. Suscipit, ipsum ad quaerat libero exercitationem eius quam nulla debitis cum numquam ipsa, quas asperiores blanditiis natus praesentium recusandae soluta veritatis aspernatur odit assumenda odio sit, expedita culpa? Quia delectus doloremque iste porro obcaecati tempore ab molestiae blanditiis nam ducimus labore, mollitia quae unde animi quis iusto omnis sequi libero commodi. Quos enim quam nihil. Quis, nobis illo nam dolore ut labore distinctio odio fuga alias error repudiandae animi nihil voluptatibus voluptates dolorem delectus sequi pariatur aliquid mollitia eum magnam quam, tempore tenetur expedita. Debitis, ratione, quos quo veniam aspernatur commodi earum veritatis quaerat facilis nihil libero laudantium, voluptate est corrupti sunt voluptatibus sed! Quibusdam, labore eius laboriosam commodi veniam quasi placeat fugit, est dignissimos sequi modi quisquam nisi itaque officia rerum similique magni numquam, odio blanditiis dolores iste. Expedita sed quod, officiis eligendi voluptatibus eveniet sint quasi hic quas, explicabo tempora voluptas dignissimos molestiae, pariatur quia! Incidunt quae perferendis exercitationem at, quibusdam, minima aliquid sit fuga fugit dolore consequuntur quam obcaecati magni pariatur animi eius non voluptate illum autem perspiciatis ipsum repudiandae corrupti placeat. Distinctio, voluptatum iure? Quia quibusdam tenetur aperiam quas sapiente. Inventore adipisci non debitis ratione optio, laborum molestiae dolorum ipsam aut enim! Minus accusamus quaerat minima officia, vero quos, corporis error labore explicabo possimus veniam vitae hic, sed quae non distinctio delectus? Quasi, hic impedit numquam modi rem ipsum ex explicabo facere eaque. Quaerat enim debitis atque dolore.
`,
  },
  {
    title: "2 What We Do",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quos! Fugiat earum maiores nostrum dolores ipsum maxime aut vitae atque tempora non rem eveniet, tempore sed obcaecati iure minima rerum consequuntur officiis dolorum corporis. Reiciendis nesciunt dolor neque quibusdam. Rem, voluptatum quam necessitatibus molestias vel qui quidem nihil, atque ad, magni voluptate. Vitae laudantium dignissimos eos adipisci quae quasi, quibusdam odit natus iusto iure commodi nobis! Itaque nisi deserunt ut neque? Sunt voluptas excepturi odit, hic porro nam repudiandae beatae, ab accusantium eius aliquid molestias dignissimos quam nihil laboriosam vel laborum ratione quo mollitia ut maiores voluptatem consequuntur. Consequuntur rerum nihil illo aperiam, sequi in aspernatur iure quisquam voluptatum aut, necessitatibus velit aliquid dolores blanditiis, at cupiditate minus. Suscipit, ipsum ad quaerat libero exercitationem eius quam nulla debitis cum numquam ipsa, quas asperiores blanditiis natus praesentium recusandae soluta veritatis aspernatur odit assumenda odio sit, expedita culpa? Quia delectus doloremque iste porro obcaecati tempore ab molestiae blanditiis nam ducimus labore, mollitia quae unde animi quis iusto omnis sequi libero commodi. Quos enim quam nihil. Quis, nobis illo nam dolore ut labore distinctio odio fuga alias error repudiandae animi nihil voluptatibus voluptates dolorem delectus sequi pariatur aliquid mollitia eum magnam quam, tempore tenetur expedita. Debitis, ratione, quos quo veniam aspernatur commodi earum veritatis quaerat facilis nihil libero laudantium, voluptate est corrupti sunt voluptatibus sed! Quibusdam, labore eius laboriosam commodi veniam quasi placeat fugit, est dignissimos sequi modi quisquam nisi itaque officia rerum similique magni numquam, odio blanditiis dolores iste. Expedita sed quod, officiis eligendi voluptatibus eveniet sint quasi hic quas, explicabo tempora voluptas dignissimos molestiae, pariatur quia! Incidunt quae perferendis exercitationem at, quibusdam, minima aliquid sit fuga fugit dolore consequuntur quam obcaecati magni pariatur animi eius non voluptate illum autem perspiciatis ipsum repudiandae corrupti placeat. Distinctio, voluptatum iure? Quia quibusdam tenetur aperiam quas sapiente. Inventore adipisci non debitis ratione optio, laborum molestiae dolorum ipsam aut enim! Minus accusamus quaerat minima officia, vero quos, corporis error labore explicabo possimus veniam vitae hic, sed quae non distinctio delectus? Quasi, hic impedit numquam modi rem ipsum ex explicabo facere eaque. Quaerat enim debitis atque dolore.",
  },
  {
    title: "3 How We Do It",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quos! Fugiat earum maiores nostrum dolores ipsum maxime aut vitae atque tempora non rem eveniet, tempore sed obcaecati iure minima rerum consequuntur officiis dolorum corporis. Reiciendis nesciunt dolor neque quibusdam. Rem, voluptatum quam necessitatibus molestias vel qui quidem nihil, atque ad, magni voluptate. Vitae laudantium dignissimos eos adipisci quae quasi, quibusdam odit natus iusto iure commodi nobis! Itaque nisi deserunt ut neque? Sunt voluptas excepturi odit, hic porro nam repudiandae beatae, ab accusantium eius aliquid molestias dignissimos quam nihil laboriosam vel laborum ratione quo mollitia ut maiores voluptatem consequuntur. Consequuntur rerum nihil illo aperiam, sequi in aspernatur iure quisquam voluptatum aut, necessitatibus velit aliquid dolores blanditiis, at cupiditate minus. Suscipit, ipsum ad quaerat libero exercitationem eius quam nulla debitis cum numquam ipsa, quas asperiores blanditiis natus praesentium recusandae soluta veritatis aspernatur odit assumenda odio sit, expedita culpa? Quia delectus doloremque iste porro obcaecati tempore ab molestiae blanditiis nam ducimus labore, mollitia quae unde animi quis iusto omnis sequi libero commodi. Quos enim quam nihil. Quis, nobis illo nam dolore ut labore distinctio odio fuga alias error repudiandae animi nihil voluptatibus voluptates dolorem delectus sequi pariatur aliquid mollitia eum magnam quam, tempore tenetur expedita. Debitis, ratione, quos quo veniam aspernatur commodi earum veritatis quaerat facilis nihil libero laudantium, voluptate est corrupti sunt voluptatibus sed! Quibusdam, labore eius laboriosam commodi veniam quasi placeat fugit, est dignissimos sequi modi quisquam nisi itaque officia rerum similique magni numquam, odio blanditiis dolores iste. Expedita sed quod, officiis eligendi voluptatibus eveniet sint quasi hic quas, explicabo tempora voluptas dignissimos molestiae, pariatur quia! Incidunt quae perferendis exercitationem at, quibusdam, minima aliquid sit fuga fugit dolore consequuntur quam obcaecati magni pariatur animi eius non voluptate illum autem perspiciatis ipsum repudiandae corrupti placeat. Distinctio, voluptatum iure? Quia quibusdam tenetur aperiam quas sapiente. Inventore adipisci non debitis ratione optio, laborum molestiae dolorum ipsam aut enim! Minus accusamus quaerat minima officia, vero quos, corporis error labore explicabo possimus veniam vitae hic, sed quae non distinctio delectus? Quasi, hic impedit numquam modi rem ipsum ex explicabo facere eaque. Quaerat enim debitis atque dolore.",
  },
  {
    title: "4 Our Projects",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quos! Fugiat earum maiores nostrum dolores ipsum maxime aut vitae atque tempora non rem eveniet, tempore sed obcaecati iure minima rerum consequuntur officiis dolorum corporis. Reiciendis nesciunt dolor neque quibusdam. Rem, voluptatum quam necessitatibus molestias vel qui quidem nihil, atque ad, magni voluptate. Vitae laudantium dignissimos eos adipisci quae quasi, quibusdam odit natus iusto iure commodi nobis! Itaque nisi deserunt ut neque? Sunt voluptas excepturi odit, hic porro nam repudiandae beatae, ab accusantium eius aliquid molestias dignissimos quam nihil laboriosam vel laborum ratione quo mollitia ut maiores voluptatem consequuntur. Consequuntur rerum nihil illo aperiam, sequi in aspernatur iure quisquam voluptatum aut, necessitatibus velit aliquid dolores blanditiis, at cupiditate minus. Suscipit, ipsum ad quaerat libero exercitationem eius quam nulla debitis cum numquam ipsa, quas asperiores blanditiis natus praesentium recusandae soluta veritatis aspernatur odit assumenda odio sit, expedita culpa? Quia delectus doloremque iste porro obcaecati tempore ab molestiae blanditiis nam ducimus labore, mollitia quae unde animi quis iusto omnis sequi libero commodi. Quos enim quam nihil. Quis, nobis illo nam dolore ut labore distinctio odio fuga alias error repudiandae animi nihil voluptatibus voluptates dolorem delectus sequi pariatur aliquid mollitia eum magnam quam, tempore tenetur expedita. Debitis, ratione, quos quo veniam aspernatur commodi earum veritatis quaerat facilis nihil libero laudantium, voluptate est corrupti sunt voluptatibus sed! Quibusdam, labore eius laboriosam commodi veniam quasi placeat fugit, est dignissimos sequi modi quisquam nisi itaque officia rerum similique magni numquam, odio blanditiis dolores iste. Expedita sed quod, officiis eligendi voluptatibus eveniet sint quasi hic quas, explicabo tempora voluptas dignissimos molestiae, pariatur quia! Incidunt quae perferendis exercitationem at, quibusdam, minima aliquid sit fuga fugit dolore consequuntur quam obcaecati magni pariatur animi eius non voluptate illum autem perspiciatis ipsum repudiandae corrupti placeat. Distinctio, voluptatum iure? Quia quibusdam tenetur aperiam quas sapiente. Inventore adipisci non debitis ratione optio, laborum molestiae dolorum ipsam aut enim! Minus accusamus quaerat minima officia, vero quos, corporis error labore explicabo possimus veniam vitae hic, sed quae non distinctio delectus? Quasi, hic impedit numquam modi rem ipsum ex explicabo facere eaque. Quaerat enim debitis atque dolore.",
  },
  {
    title: "5 Conclusion",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quos! Fugiat earum maiores nostrum dolores ipsum maxime aut vitae atque tempora non rem eveniet, tempore sed obcaecati iure minima rerum consequuntur officiis dolorum corporis. Reiciendis nesciunt dolor neque quibusdam. Rem, voluptatum quam necessitatibus molestias vel qui quidem nihil, atque ad, magni voluptate. Vitae laudantium dignissimos eos adipisci quae quasi, quibusdam odit natus iusto iure commodi nobis! Itaque nisi deserunt ut neque? Sunt voluptas excepturi odit, hic porro nam repudiandae beatae, ab accusantium eius aliquid molestias dignissimos quam nihil laboriosam vel laborum ratione quo mollitia ut maiores voluptatem consequuntur. Consequuntur rerum nihil illo aperiam, sequi in aspernatur iure quisquam voluptatum aut, necessitatibus velit aliquid dolores blanditiis, at cupiditate minus. Suscipit, ipsum ad quaerat libero exercitationem eius quam nulla debitis cum numquam ipsa, quas asperiores blanditiis natus praesentium recusandae soluta veritatis aspernatur odit assumenda odio sit, expedita culpa? Quia delectus doloremque iste porro obcaecati tempore ab molestiae blanditiis nam ducimus labore, mollitia quae unde animi quis iusto omnis sequi libero commodi. Quos enim quam nihil. Quis, nobis illo nam dolore ut labore distinctio odio fuga alias error repudiandae animi nihil voluptatibus voluptates dolorem delectus sequi pariatur aliquid mollitia eum magnam quam, tempore tenetur expedita. Debitis, ratione, quos quo veniam aspernatur commodi earum veritatis quaerat facilis nihil libero laudantium, voluptate est corrupti sunt voluptatibus sed! Quibusdam, labore eius laboriosam commodi veniam quasi placeat fugit, est dignissimos sequi modi quisquam nisi itaque officia rerum similique magni numquam, odio blanditiis dolores iste. Expedita sed quod, officiis eligendi voluptatibus eveniet sint quasi hic quas, explicabo tempora voluptas dignissimos molestiae, pariatur quia! Incidunt quae perferendis exercitationem at, quibusdam, minima aliquid sit fuga fugit dolore consequuntur quam obcaecati magni pariatur animi eius non voluptate illum autem perspiciatis ipsum repudiandae corrupti placeat. Distinctio, voluptatum iure? Quia quibusdam tenetur aperiam quas sapiente. Inventore adipisci non debitis ratione optio, laborum molestiae dolorum ipsam aut enim! Minus accusamus quaerat minima officia, vero quos, corporis error labore explicabo possimus veniam vitae hic, sed quae non distinctio delectus? Quasi, hic impedit numquam modi rem ipsum ex explicabo facere eaque. Quaerat enim debitis atque dolore.",
  },
];

export default function Scroller() {
  const { scrollYProgress: heroProgress } = useScroll();
  const [title, setTitle] = useState<string | null>("1 Who we are");
  const left = useSpring(useTransform(heroProgress, [0, 1], ["0%", "90%"]), {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });
  return (
    <div className="flex justify-center bg-neutral-100 w-full">
      <div className="flex flex-col justify-center max-w-146">
        {data.map((item) => (
          <motion.div key={item.title} className="mt-26 mb-4">
            <motion.h2
              onViewportEnter={() => {
                if (item.title == title) return;
                else {
                  setTitle(item.title);
                }
              }}
              viewport={{
                margin: "-20% 0px -20% 0px",
              }}
              onViewportLeave={()=>{setTitle(null)}}
              className="text-2xl font-semibold text-neutral-300"
            >
              {"# " + item.title}
            </motion.h2>
            <p className="text-[16px] text-justify pt-1 text-neutral-400">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="fixed bottom-6 right-6 w-80 h-10 bg-white rounded-xl">
        <AnimatePresence>
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{type: spring, duration:0.5, bounce:0}}
              className="bg-white h-20 w-80 rounded-2xl absolute bottom-12 p-4 text-[14px] text-neutral-500 flex justify-between"
            >
              <div>{"// " + title}</div>
              <Copy className="size-[14px] cursor-pointer"/>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            left: left,
          }}
          className="absolute top-1/2 -translate-y-1/2 w-1 h-6 bg-orange-500 mx-2 rounded-2xl z-50"
        />
        <Bars />
      </div>
    </div>
  );
}

const Bars = () => {
  const bars = new Array(33).fill(0).map((_, index, array) => {
    return {
      percentage: index / (array.length - 1),

    };
  });

  return <div className="flex gap-2 mx-2 items-center absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer">
{bars.map((bar, idx) => (
  <div
    key={`bar-${idx}`}
    className="relative h-8 flex items-center justify-center"
  >
    <button
      onClick={() => {
        const maxScroll =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const scrollY = bar.percentage * maxScroll;

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      }}
      className="absolute w-3 h-8 cursor-pointer"
    />
    <div className="bg-neutral-300 w-[1px] h-[18px] rounded-2xl" />
  </div>
))}
  </div>
}