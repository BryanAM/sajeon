import { SajeonDataModelType } from "@/types/SajeonTypes";

export const databaseDataMock: Array<SajeonDataModelType> = [
  {
    _id: '1',
    word: "사랑",
    romaja: "sarang",
    hanja: "愛",
    definitions: ["test", "love", "affection"],
    pos: "noun",
    explanation: "",
    sentences: [
      {
        kr: "그녀는 그에게 사랑을 고백했다.",
        en: "She confessed her love to him.",
      },
      {
        kr: "사랑은 인생의 가장 강력한 감정 중 하나입니다.",
        en: "Love is one of the most powerful emotions in life.",
      },
      {
        kr: "그들은 서로 사랑하는 마음을 키워나갔다.",
        en: "They nurtured their love for each other.",
      },
    ],
  },
  {
    _id: '2',
    word: "행복",
    romaja: "haengbok",
    hanja: "幸福",
    definitions: ["test", "happiness", "bliss"],
    explanation: "",
    pos: "noun",
    sentences: [
      {
        kr: "행복은 종종 작은 것에서 찾을 수 있습니다.",
        en: "Happiness is often found in the little things.",
      },
      {
        kr: "그는 진정한 행복을 찾아 나섰다.",
        en: "He set out to find true happiness.",
      },
      {
        kr: "가족과 함께하는 시간은 나에게 행복을 줍니다.",
        en: "Spending time with my family brings me happiness.",
      },
    ],
  },
  {
    _id: '3',
    word: "우정",
    romaja: "ujeong",
    hanja: "友情",
    definitions: ["test", "friendship"],
    pos: "noun",
    explanation: "",
    sentences: [
      {
        kr: "우정은 인생에서 중요한 부분입니다.",
        en: "Friendship is an important part of life.",
      },
      {
        kr: "오랜 시간 동안 우정을 유지하는 것은 쉽지 않다.",
        en: "Maintaining friendship over a long period is not easy.",
      },
      {
        kr: "그들은 깊은 우정을 나누고 있었다.",
        en: "They shared a deep friendship.",
      },
    ],
  },
]