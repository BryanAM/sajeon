import { MooncakesTable } from "@/components/MooncakesTable/MooncakesTable";
import { columns } from "./colums";
import { DictionaryEntryType } from "@/types/SajeonTypes";

async function getData(): Promise<DictionaryEntryType[]> {
  // Fetch data from your API here.
  return [
    {
      _id: "65ac7d09ab6b0924c76b6786",
      word: "고구하다",
      romaja: "goguhada",
      hanja: "",
      definitions: [
        "investigate",
        "study",
        "extra defintion",
        "more extra definition",
      ],
      explanation:
        "To study and think deeply about something with careful consideration of facts.",
      pos: "Verb",
      sentences: [
        {
          kr: "<문장> 학자는 고어를 고구하여 한글의 역사를 밝혀냈다.",
          en: "example sentence to show",
        },
        {
          kr: "<문장> 김 박사의 논문은 잘 알려지지 않은 고대의 역사적 사실을 고구하여 주목을 받았다.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          kr: "<대화> 가: 박 교수님이 얼마 전에 쓴 책 읽어 봤어?",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          kr: "<대화> 나: 응, 하나의 이론을 정립하기 위해 수많은 서적들을 고구한 책이야.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      _id: "65ac7d0aab6b0924c76b6a1d",
      word: "고찰",
      romaja: "gochal",
      hanja: "",
      definitions: ["consideration", "study"],
      explanation:
        "An act of studying and thinking about something deeply and closely. ",
      pos: "명사",
      sentences: [
        {
          kr: "<문장> 환경 문제에 대한 고찰 없이 경제 성장만 추구해서는 안 된다.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          kr: "<문장> 나는 옛 문헌 고찰을 통해 조선 시대 사람들의 가치관을 연구했다.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          kr: "<대화> 가: 우리 회사도 다른 회사들처럼 친환경 에너지 개발 사업에 뛰어들어야 하지 않을까요?",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          kr: "<대화> 나: 우선 그 사업의 전망에 대한 고찰부터 할 필요가 있을 것 같습니다.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      _id: "65ac7d0aab6b0924c76b6c74",
      word: "공부방",
      romaja: "gongbubang",
      hanja: "",
      definitions: ["study"],
      explanation: "A room for studying.",
      pos: "명사",
      sentences: [
        {
          kr: "<문장> 나는 공부방에서 공부를 하고 책을 읽는 시간을 가장 좋아한다.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          kr: "<문장> 엄마는 내가 공부를 열심히 할 수 있도록 남는 방을 공부방으로 꾸며 주셨다.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        { kr: "<대화> 가: 공부방에 갔다 언제 오니?", en: "" },
        {
          kr: "<대화> 나: 오늘은 시험 공부를 하느라 좀 늦을 것 같아요.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  ];
}

export default async function MooncakesEdit() {
  const data = await getData();

  return (
    <main>
      <h2>Header And Other Informations</h2>
      <MooncakesTable columns={columns} data={data} />
    </main>
  );
}
