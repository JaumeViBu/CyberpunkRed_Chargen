import { Roles } from "../types/CharacterRoles";
import { RoleSkills } from "../types/CharacterRolesSkills";
import CyberpunkRedCharacter from "./CyberpunkRedCharacter";
import { describe, it, expect } from "vitest";

describe("CyberpunkRedCharacter", () => {
  const assertValidCharacter = (npc: CyberpunkRedCharacter) => {
    expect(npc).toBeDefined();
    expect(npc.handle).toBeDefined();
    expect(npc.name).toBeDefined();
    expect(npc.role).toBeTruthy();
    expect(Object.values(Roles)).toContain(npc.role);
    expect(npc.roleSkill).toBeTruthy();
  };
  describe("Constructor tests", () => {
    it("should create a random character without name or handle if no parameters are passed", () => {
      const npc = new CyberpunkRedCharacter();
      assertValidCharacter(npc);
    });
    it("should create a character with a handle", () => {
      const npc = new CyberpunkRedCharacter({ handle: "Claws" });
      assertValidCharacter(npc);
      expect(npc.handle).toBe("Claws");
    });
  });
  describe("Stats tests", () => {
    it("should have default stats of 2", () => {
      const npc = new CyberpunkRedCharacter();
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
      assertValidCharacter(npc);
      expect(npc.stats).toEqual(expectedStats);
    });
    it("should assign given stats", () => {
      const npc = new CyberpunkRedCharacter({
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
      assertValidCharacter(npc);
      expect(npc.stats).toEqual(expectedStats);
    });
  });
  describe("Handle & name tests", () => {
    it("should assign given handle & name", () => {
      const npc = new CyberpunkRedCharacter({
        handle: "Claws",
        name: "Alexander",
      });
      assertValidCharacter(npc);
      expect(npc.handle).toBe("Claws");
      expect(npc.name).toBe("Alexander");
    });
    it("should handle empty strings for name/handle", () => {
      const npc = new CyberpunkRedCharacter({ handle: "", name: "" });
      assertValidCharacter(npc);
      expect(npc.handle).toBe("");
      expect(npc.name).toBe("");
    });
  });
  describe("Role tests", () => {
    it("should assign role given", () => {
      const npc = new CyberpunkRedCharacter({ role: Roles.Nomad });
      assertValidCharacter(npc);
      expect(npc.role).toBe(Roles.Nomad);
    });
    it("should assign correct role skill for random role", () => {
      const npc = new CyberpunkRedCharacter();
      assertValidCharacter(npc);
      expect(npc.roleSkill).toBe(RoleSkills[npc.role]);
    });
    it("should assign correct role skill for given role", () => {
      const npc = new CyberpunkRedCharacter({ role: Roles.Nomad });
      assertValidCharacter(npc);
      expect(npc.roleSkill).toBe(RoleSkills[Roles.Nomad]);
    });
  });
});
