"use client";
import Products from "@/components/products/products";
import FullTeaser from "@/components/fullteaser/fullteaser";
import Reviews from "@/components/reviews/reviews";
import MemberTeaser from "@/components/memberTeaser/memberTeaser";

export default function Home() {
  const teaserConfig = {
    link: {
      url: "#selected",
      text: "Se udvalgte produkter",
    },

    headline: {
      one: {
        text: "SKØNHED",
        color: "#000",
      },
      two: {
        text: "FOR ALLE",
        color: "#000",
      },
    },
    image: "/headers/front.jpg",
    body: {
      text: `<p>Herunder har vi samlet spørgsmål og svar om sundhed.</p><p>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>`,
      color: "#000",
    },
    bodyBackground: "#f7f0f2",
  };



  return (
    <div className={"page"}>
      <FullTeaser config={teaserConfig}></FullTeaser>

       <Products
        headline={{ black: "UDVALGT", pink: "SKØNHED!" }}
        recommend={true}
      ></Products> 

      <Reviews ></Reviews>
      <MemberTeaser></MemberTeaser>

  
    </div>
  );
}
