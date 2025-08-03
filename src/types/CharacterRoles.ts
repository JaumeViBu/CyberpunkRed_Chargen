export const Roles = {
  Rockerboy: "Rockerboy",
  Solo: "Solo",
  Netrunner: "Netrunner",
  Tech: "Tech",
  Medtech: "Medtech",
  Media: "Media",
  Exec: "Exec",
  Lawman: "Lawman",
  Fixer: "Fixer",
  Nomad: "Nomad",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
