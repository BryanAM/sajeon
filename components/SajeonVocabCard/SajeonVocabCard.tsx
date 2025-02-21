"use client";

import { useEffect, useState } from "react";
import { DictionaryEntryType } from "../../types/SajeonTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SajeonClipboardButton from "@/components/SajeonClipboardButton/SajeonClipboardButton";

function SajeonVocabCard({ data }: { data: DictionaryEntryType }) {
  const [baseURL, setBaseUrl] = useState<string>("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  return (
    <article className="mb-4">
      <Card>
        <CardHeader className="flex-row">
          <div className="flex flex-col sm:flex-row">
            <div>
              <CardTitle className="text-6xl">{data.word}</CardTitle>
              <CardDescription className="text-md text-center">
                {data?.romaja}
              </CardDescription>
            </div>

            <div className="sm:mx-6">
              <h4 className="font-semibold">Meaning</h4>
              <ol className="mx-6 list-decimal">
                {data.definitions.map((definition) => (
                  <li key={definition}>{definition}</li>
                ))}
              </ol>
              <ul className="flex">
                <li className="mx-1">
                  <Badge variant="secondary">{data.pos}</Badge>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex grow justify-end gap-2">
            <SajeonClipboardButton
              copyData={`${baseURL}/search/${data.word}`}
              customMessage="Copied link!"
              iconType="share"
            />
            <SajeonClipboardButton copyData={data.word} iconType="clipboard" />
          </div>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold">Sentences</h4>
          <ul className="mx-6  list-disc">
            {data.sentences?.slice(0, 2).map((sentence) => (
              <li className="ring-inset" key={sentence.kr}>
                <p>{sentence.kr}</p>
                <p className="text-muted-foreground">{sentence.en}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </article>
  );
}

export default SajeonVocabCard;
