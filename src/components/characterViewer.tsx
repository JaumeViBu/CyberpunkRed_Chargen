// CharacterViewer.tsx
import { For } from "solid-js";
import type CyberpunkRedCharacter from "../model/CyberpunkRedCharacter";

export default function CharacterViewer(props: {
  character: CyberpunkRedCharacter;
}) {
  const stats = () => Object.entries(props.character.stats);

  return (
    <div class="max-w-2xl mx-auto p-6 bg-gray-900 text-neon-pink border-2 border-neon-blue rounded-lg shadow-lg shadow-purple-900/50">
      {/* Header with name and role */}
      <div class="flex justify-between items-center mb-6 border-b border-neon-blue pb-4">
        <div>
          <h1 class="text-3xl font-bold text-neon-yellow">
            {props.character.handle}
          </h1>
          {props.character.name && (
            <p class="text-neon-green italic">"{props.character.name}"</p>
          )}
        </div>
        <div class="text-right">
          <p class="text-xl font-mono uppercase text-neon-blue">
            {props.character.role}
          </p>
        </div>
      </div>

      {/* Stats grid */}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <For each={stats()}>
          {([stat, value]) => (
            <div class="bg-gray-800 p-3 rounded border border-neon-purple text-center">
              <p class="text-xs uppercase tracking-wider text-neon-cyan">
                {stat}
              </p>
              <p class="text-2xl font-bold text-neon-pink">{value}</p>
              {/* Stat bar visualization */}
              <div class="h-2 mt-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-neon-purple to-neon-pink"
                  style={{ width: `${value * 10}%` }}
                />
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Additional character info could go here */}
      <div class="mt-8 pt-4 border-t border-neon-blue text-sm text-gray-300">
        <p>Cyberpunk Red Character Sheet</p>
      </div>
    </div>
  );
}
