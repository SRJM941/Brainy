
import React from "react";

const PortfolioSection = () => {
  return (
    <section className="py-10 bg-[#FFFFFF]">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#F45E31] text-center">
        \ Up coming Projects \
      </h2>
      <h3 className="text-3xl font-bold mt-2 text-[#0E1F51] text-center">
        Our Upcoming Projects
      </h3>
      <div className="container mx-auto px-4 md:px-6 lg:px-14 mt-8">
        {/* Portfolio Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Components */}
          {[
            { title: "All in one application", image: "https://s3-alpha-sig.figma.com/img/d757/6a18/f858d50c935d6979b99d6853e33b8e27?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6r7nVF1D7b2SxVU5Mnuna4gE3SeO8KkJn7np5D0JdEa079bjGmtjn-npwwimcpiQMsfTu0WghnB21-4uGMed-S~5fQy1PTW3oS60N-g22Dit1y~v6MBtlrL0vg-kWSFQiS0PGdHCBdEiiaf-3EeATB2VVwzFxOFcWI2U-lLIy-n19AYFxCpXs3iEwX088Dc3mqVvxXECc6TJriDt52TBeV95hx1Su~PuFmM0SUvvzm95C2iea8SOVOV-XRHSEnxgpNfSOlWyR9RYRGs6lc~R9nuPXChyH3YZCpQYVBZ6Sr8RVvMHzr~2ZnRuAjJQ9vnzdEo4hzyDE~bPDRWTUW1RQ__" },
            { title: "Coding war", image: "https://s3-alpha-sig.figma.com/img/92a7/335d/c9566436685f2a631142cae430af7a8d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uo4rjNtCem1DzWYhtn6mJJ-YzxWOCs~piN2rF1sl2rtgOr3a8~bNmUxnpYhUGxdUu41CLbNQkOWe78Hzh3-1c3KzfUMXwKGRCxsgjmbqTaD8SRq01GRxuQb974KD281OEbYFZOTdNMW5~1WqiAIyukDiF0dUPT4VLSGQHXOKm8ReCvQ6J1vHUthTAI3s8DZxR8j52gHxGst0sEyPP4LQ5snHsKgxZnXuEmI83McHUGWQaCncdlZfOFBMTs9~45ABwaNqIGf-s9O2efnod6izf6HFnJSTtJJGP48TyTiNLKvvvmZQNYsUe-N0Vd-Km2ivJO5q2gawIylFwOOGmVW5sg__" },
            { title: "Edutech application", image: "https://s3-alpha-sig.figma.com/img/4211/6b16/006bf0eeec707b18918ff42ae2676f08?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdZDq3kitHaSEjNP3tvP05ja21muvHQb4A5l6BV6oM5jBSbhaDjQgg6BA6QlO~vvUeHVA1RNjes2CWiE9gWleALHlB6q20c74pOfvQbmftd0Hts~rzPOJwyqj3KoFhsfv92apDkl5AnJFiIHIOQ502I9vA-c~NkHfJdvxUw~71~nLOCp5UFZJKrBt6yzxQ1TjpwORkFAe2sHd5zQPU3jscyiSI5OKQ0ylJCzDrsX6WrBGJp-w1J2gbEK795pT6rV53C6HgceOQbUCPl3CRQEHJ7MgNEllyhfXPsdPyzH-XGYhXbQ5WI40eHr1gtRvJ9GWUPl3YUq7XeRk8tj8kpHMg__" },
            { title: "Chat application", image: "https://s3-alpha-sig.figma.com/img/e3e6/5b27/2f85b65c6b1827050fa8fc5296f9af7d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYIRFR7lMuszWbFQNI6z0CkpKbDCpR-r6s5JZoD-JDTp3USK7wl0d2p2sUhbcv9bnGY1EIWnmhQkP2vb5UUHzSp8fIuUCPWvKGQL0AxJAWT4bAPo~OTJXlYwefYAkARzSH047oYx~4A7LXvQ-YrYQSFoXmq8nzHkvf9W0-SKtgNXYzXbdoKM7y5ZwBMWYnW00tFaTtHzaT7Q2u0Ff4wqUVo-jKUKY5FbNwLQo6SQcAWhuUPEjQMWafl6rwVXd1MVw1fqXrzEwI6iAt0QwfLyV9sJc4WoYR-6shsWyorUiQankHdVpiamUqXQPtXfKuwyEfFfu0eeKSn2KChWT4iXtg__" },
            { title: "Chess application", image: "https://s3-alpha-sig.figma.com/img/2ecf/ec54/618a793d6647bfa6cd174a5fd91f629e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2tYL5tRUKMkqlyZavriTW6WBlwwh6MIDwZwKzWzrPm3-RkJdTO4Zm0tpnTlGXE0NoNIPNBxV1t4YSOBNUh8iK4ofr~1mwry7yiMG8CLtnsuVy3755CXGhLlhRpU96QqxxCEOysGYOD6W9oADTXNHdz4lbumoyvwZFYpxrecgPeQkkYnaZW-fqKrmlS5nHUmLLrnlNui5E-60nFSw6oS4ysVxmDoGJuvxrzc~psAVKTsaTMO0tGBNVFPBpUqshkat1BXm-IFlsj3gfO-6WTvuLHbpNEzTlnHd~BnwarUcVYF2gU531WZV~x6bV0TMKVCwRKarb6NGW4llOA-vVdkYw__" },
            { title: "Speed dating", image: "https://s3-alpha-sig.figma.com/img/2542/ee6b/689977c92ac6504403cbc09e9d095494?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ggd9IKTxnpv7~JUU6jqC0OYPLy-utC~RTuQa0YPn38CNEkyg9GhnjDmLuiguzYxC5zAWEKQX2oNyqYk4fQsn2WGy3qpk7P2c62EruWPpIr5Krb0ZnNH01Wl-pJSv~DGC-Yhe1~qYfPvgFV4wq~E71AmP6rVBENQTC4guv57ii~xJoSC7hYkZpTTdpENvlt7eq~FLXGKtv-4BOlfaFpAXA6zisDPVma-h7vWswop9ZA2f3cCmtqcshmiMI2wCTPZyhtacU1kQdHCMBqSQ8Vx-5K2s9MVi4jTOn4iMJrkWyNGSeU9m5skBVgwYWW3f-D8aUP9eFhwyJggQiCMlA1zu9A__" },
          ].map((project, index) => (
            <div
              key={index}
              className="w-full max-w-[330px] h-[305px] mx-auto relative bg-[#FFFFFF] shadow-lg rounded-lg border"
              style={{
                boxShadow: "0px 4px 5px 0px #0000000D",
                borderRadius: "10px",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-lg"
                style={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              />
              <div className="absolute top-[220px] left-[20px] right-[20px]">
                <h4 className="text-lg font-bold text-[#0E1F51]">{project.title}</h4>
                <p className="text-[#F45E31] font-medium mt-3">Read more...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


