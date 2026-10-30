import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { describe, expect, it } from "vitest";

const srcRoot = join(process.cwd(), "src");

/**
 * Files that may name Pennsylvania. Public NCOGA copy should not treat
 * Pennsylvania as a service area.
 */
const allowedPennsylvania = new Set<string>([]);

const allowedPaAbbreviation = new Set<string>([]);

const sourceExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".svg",
  ".css",
]);

function collectSourceFiles(directory: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      files.push(...collectSourceFiles(path));
      continue;
    }

    const extension = entry.slice(entry.lastIndexOf("."));
    if (sourceExtensions.has(extension)) {
      files.push(path);
    }
  }

  return files;
}

describe("service-area geography", () => {
  it("does not treat Pennsylvania as the sole service area outside an allowlist", () => {
    const violations: string[] = [];

    for (const file of collectSourceFiles(srcRoot)) {
      const relativePath = relative(srcRoot, file).replaceAll("\\", "/");
      const content = readFileSync(file, "utf8");

      if (
        /Pennsylvania/i.test(content) &&
        !allowedPennsylvania.has(relativePath)
      ) {
        violations.push(`${relativePath}: unexpected "Pennsylvania"`);
      }

      if (/\bPA\b/.test(content) && !allowedPaAbbreviation.has(relativePath)) {
        violations.push(`${relativePath}: unexpected standalone "PA"`);
      }
    }

    expect(violations).toEqual([]);
  });
});
