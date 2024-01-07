import { SajeonVocabCardType } from "@/types/SajeonTypes";

export const dataMock: Array<SajeonVocabCardType> = [
  {
    ID: 1,
    word: "사랑",
    romaja: "sarang",
    hanja: "愛",
    definitions: ["love", "affection"],
    pos: ["noun", "verb"],  // '사랑하다' as a verb means 'to love'
    sentences: [
      {kr: "그녀는 그에게 사랑을 고백했다.", en: "She confessed her love to him."},
      {kr: "사랑은 인생의 가장 강력한 감정 중 하나입니다.", en: "Love is one of the most powerful emotions in life."},
      {kr: "그들은 서로 사랑하는 마음을 키워나갔다.", en: "They nurtured their love for each other."},
    ]
  },
  {
    ID: 2,
    word: "사랑sd",
    romaja: "sarang",
    hanja: "愛",
    definitions: ["love", "affection"],
    pos: ["noun", "verb"],  // '사랑하다' as a verb means 'to love'
    sentences: [
      {kr: "그녀는 그에게 사랑을 고백했다.", en: "She confessed her love to him."},
      {kr: "사랑은 인생의 가장 강력한 감정 중 하나입니다.", en: "Love is one of the most powerful emotions in life."},
      {kr: "그들은 서로 사랑하는 마음을 키워나갔다.", en: "They nurtured their love for each other."},
    ]
  }
]