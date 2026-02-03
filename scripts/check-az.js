#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

function isObject(x) {
  return x && typeof x === "object" && !Array.isArray(x);
}

function walk(obj, currentPath, missing) {
  if (!isObject(obj)) return;

  // If this object looks like a language map (has tr/en keys), ensure az exists
  const hasTr = Object.prototype.hasOwnProperty.call(obj, "tr");
  const hasEn = Object.prototype.hasOwnProperty.call(obj, "en");
  const hasAz = Object.prototype.hasOwnProperty.call(obj, "az");
  if ((hasTr || hasEn) && !hasAz) {
    missing.push(currentPath || "(root)");
  }

  for (const [k, v] of Object.entries(obj)) {
    walk(v, currentPath ? `${currentPath}.${k}` : k, missing);
  }
}

function loadTranslations(modPath) {
  const content = fs.readFileSync(modPath, "utf8");
  const exportRegex = /export\s+const\s+(\w+)\s*=\s*/g;
  const exportNames = [];
  const transformed = content.replace(exportRegex, (_, name) => {
    exportNames.push(name);
    return `const ${name} = `;
  });

  if (exportNames.length === 0) {
    throw new Error("No exports found in translations module.");
  }

  const factory = new Function(`${transformed}\nreturn { ${exportNames.join(", ")} };`);
  return factory();
}

function resolveTranslationsPath() {
  const translationsPath = path.resolve(process.cwd(), "src/data/translations.js");
  const altPath = path.resolve(process.cwd(), "src/data/translations/index.js");
  const frontendPath = path.resolve(process.cwd(), "frontend/src/data/translations.js");
  const frontendAltPath = path.resolve(process.cwd(), "frontend/src/data/translations/index.js");

  if (fs.existsSync(translationsPath)) return translationsPath;
  if (fs.existsSync(altPath)) return altPath;
  if (fs.existsSync(frontendPath)) return frontendPath;
  if (fs.existsSync(frontendAltPath)) return frontendAltPath;
  return null;
}

function main() {
  const modPath = resolveTranslationsPath();

  if (!modPath) {
    console.error("Cannot find translations module at src/data/translations.js or src/data/translations/index.js");
    process.exit(2);
  }

  const mod = loadTranslations(modPath);

  const missing = [];
  walk(mod, "", missing);

  if (missing.length) {
    console.error("\nMissing `.az` in these translation objects:\n");
    for (const p of missing) console.error(" -", p);
    console.error("\nFix: add `az` keys (copy from tr as baseline if needed).\n");
    process.exit(1);
  }

  console.log("OK: No missing `.az` keys found.");
}

main();
