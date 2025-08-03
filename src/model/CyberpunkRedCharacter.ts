import type { Role } from "../types/CharacterRoles";
import type { DeepPartial } from "../types/DeepPartial";

const ROLES_ARRAY: readonly Role[] = [
  "Rockerboy",
  "Solo",
  "Netrunner",
  "Tech",
  "Medtech",
  "Media",
  "Exec",
  "Lawman",
  "Fixer",
  "Nomad",
] as const;

/**
 * Represents a character in the Cyberpunk Red tabletop RPG system
 */
export default class CyberpunkRedCharacter {
  /** The character's street name/handle */
  handle: string;
  /** The character's birth name */
  name: string;
  /** The character's role */
  role: Role;

  /**
   * The character's core statistics
   * All stats range from 2-10 in Cyberpunk Red
   */
  stats: {
    body: number;
    move: number;
    ref: number;
    dex: number;
    tech: number;
    cool: number;
    emp: number;
    int: number;
    will: number;
    luck: number;
  };

  /**
   * Creates a new Cyberpunk Red character
   * @param handle - The character's street name/alias
   */
  constructor(handle: string, options?: DeepPartial<CyberpunkRedCharacter>) {
    this.handle = handle;
    // Initialize all stats to the minimum value of 2
    // In Cyberpunk Red, no stat can be lower than 2 at creation
    this.stats = {
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
    this.name = "";
    this.role = ROLES_ARRAY[Math.floor(Math.random() * ROLES_ARRAY.length)];
    if (!options) return;
    if (options.stats) {
      this.stats = { ...this.stats, ...options.stats };
    }
    if (options.name) {
      this.name = options.name;
    }
    if (options.role) {
      this.role = options.role;
    }
  }
}
