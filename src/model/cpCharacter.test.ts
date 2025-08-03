import CpCharacter from "./cpCharacter";
import { describe, it, expect } from "vitest";

describe("CpCharacter", () => {
  it("should create a character with a handle", () => {
    const npc = new CpCharacter("Claws");
    expect(npc.handle).toBe("Claws");
  });
  it("should have default stats of 2", () => {
    const npc = new CpCharacter("Claws");
    expect(npc.stats.body).toBe(2);
    expect(npc.stats.move).toBe(2);
    expect(npc.stats.ref).toBe(2);
    expect(npc.stats.dex).toBe(2);
    expect(npc.stats.tech).toBe(2);
    expect(npc.stats.cool).toBe(2);
    expect(npc.stats.emp).toBe(2);
    expect(npc.stats.int).toBe(2);
    expect(npc.stats.will).toBe(2);
    expect(npc.stats.luck).toBe(2);
  });
});
