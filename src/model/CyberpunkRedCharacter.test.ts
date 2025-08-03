import { Roles } from "../types/CharacterRoles";
import CyberpunkRedCharacter from "./CyberpunkRedCharacter";
import { describe, it, expect } from "vitest";

describe("CyberpunkRedCharacter", () => {
  it("should create a character with a handle", () => {
    const npc = new CyberpunkRedCharacter("Claws");
    expect(npc.handle).toBe("Claws");
  });
  it("should have default stats of 2", () => {
    const npc = new CyberpunkRedCharacter("Claws");
    const expectedStats = {
      body: 2,
      move: 2,
      ref: 2,
      dex: 2,
      tech: 2,
      cool: 2,
      emp: 2,
      int: 2,
      will: 2,
      luck: 2,
    };
    expect(npc.stats).toEqual(expectedStats);
  });
  it("should be able to create a character passing stats as params", () => {
    const npc = new CyberpunkRedCharacter("Claws", {
      stats: { ref: 4, dex: 1 },
    });
    const expectedStats = {
      body: 2,
      move: 2,
      ref: 4,
      dex: 1,
      tech: 2,
      cool: 2,
      emp: 2,
      int: 2,
      will: 2,
      luck: 2,
    };
    expect(npc.stats).toEqual(expectedStats);
  });
  it("should be able to create a character passing both handle and birthname as params", () => {
    const npc = new CyberpunkRedCharacter("Claws", {
      name: "Alexander",
    });
    expect(npc.handle).toBe("Claws");
    expect(npc.name).toBe("Alexander");
  });
  it("should be able to create a character with a random role if no role is passed as options", () => {
    const npc = new CyberpunkRedCharacter("Claws");
    expect(npc.handle).toBe("Claws");
    expect(Object.values(Roles)).toContain(npc.role);
  });
  it("should be able to create a character with a given role passed as options", () => {
    const npc = new CyberpunkRedCharacter("Claws", { role: Roles.Nomad });
    expect(npc.handle).toBe("Claws");
    expect(npc.role).toBe(Roles.Nomad);
  });
});
