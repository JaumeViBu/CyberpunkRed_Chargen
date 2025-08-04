import { createSignal } from "solid-js";
import CharacterViewer from "../components/characterViewer";
import CyberpunkRedCharacter from "../model/CyberpunkRedCharacter";

export default function CharacterView() {
  const [character] = createSignal(
    new CyberpunkRedCharacter("Johnny Silverhand", {
      name: "John",
      role: "Rockerboy",
      stats: {
        body: 6,
        move: 5,
        ref: 7,
        dex: 8,
        cool: 9,
        emp: 4,
        int: 5,
        will: 6,
        tech: 3,
        luck: 7,
      },
    })
  );

  return (
    <div class="h-full bg-gray-950 p-4">
      <CharacterViewer character={character()} />
    </div>
  );
}
