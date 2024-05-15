// one time render on load & on reload data will not discard or rerender ,
//it is saved on server side ,it will happens only if the component on server side does
// not has the property cache  
//it does'nt matter after load request method still defined or not
// but if we want to update use cache:"no-cache" after url , in {}

// const fetchPost = async () => {
//   try {
//     const data = await fetch("http://localhost:3000/api2/post",{cache:"no-cache"});
//     const response = await data.json();
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log("error ", error);
//     return error;
//   }
// };

// export default async function Post() {
//   const Fetchdata = await fetchPost();
//   console.log(Fetchdata);

//   return <div>Post{Fetchdata}</div>;
// }


// if we want to refresh again and again use client side
// but no need to update can do using client side  

// "use client";

// import { useEffect, useState } from "react";

// export default function Post() {
//   const [state, setstate] = useState([]);
//   const [load, setload] = useState(false);
//   const [reload,setrelaod]=useState(false);
//   const fetchPost = async () => {
//     try {
//       setload(true);
//       const data = await fetch("http://localhost:3000/api2/post");
//       const response = await data.json();
//       setstate(response);
//       return response;
//     } catch (error) {
//       console.log("error ", error);
//       return error;
//     } finally {
//       setload(false);
//     }
//   };
//   useEffect(() => {
//     fetchPost();
//   }, [reload]);

//   const onCLickHandler= ()=>{
//     setrelaod(true)
//   }

//   return (
//     <div>
//       {load &&'...loading'}<br/>

//       {
//          state.map((data) => {
//             return (
//               <>
//                 <h1>{data}</h1>
//               </>
//             );
//           })
//       }<br/>
//       ----- <button onClick={onCLickHandler}>Click on me </button>
//     </div>
//   );
// }
