// // import Image from "next/image";

import { NextResponse } from "next/server";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     headers: {
//       "Constent-Type": "application/json",
//     },
//   });
//   const posts = await res.json();
//   // return NextResponse.json({ data: posts });
//   return posts;
// };

// export default async function Home() {
//   const allPosts = await getData();
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         {/* <h1>HELLO WORLD</h1> */}
//         {allPosts.map((post, i) => (
//           <>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <hr className="border-t-2 border-white w-full" />
//           </>
//         ))}
//       </main>
//     </div>
//   );
// }

// // import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/posts", {
    headers: {
      "Constent-Type": "application/json",
    },
  });
  const posts = await res.json();
  // return NextResponse.json({ 'data': posts });
  return posts;
};

export default async function Home() {
  const allPosts = await getData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <h1>HELLO WORLD</h1> */}
        {allPosts.data.map((post, i) => (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr className="border-t-2 border-white w-full" />
          </>
        ))}
      </main>
    </div>
  );
}
