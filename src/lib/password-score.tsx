// lib/password-score.ts
export type PasswordScore = 0 | 1 | 2 | 3 | 4;

const hasLower = (s: string) => /[a-z]/.test(s);
const hasUpper = (s: string) => /[A-Z]/.test(s);
const hasDigit = (s: string) => /\d/.test(s);
const hasSymbol = (s: string) => /[^A-Za-z0-9]/.test(s);

function containsPersonalInfo(pw: string, personal: string[]): boolean {
  const p = pw.toLowerCase();
  return personal
    .map((x) => x?.toLowerCase().trim())
    .filter(Boolean)
    .some((frag) => frag.length >= 3 && p.includes(frag));
}

export function scorePassword({
  password,
  firstName,
  lastName,
  email,
}: {
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}) {
  const suggestions: string[] = [];
  const personalFrags: string[] = [];

  if (firstName) personalFrags.push(firstName);
  if (lastName) personalFrags.push(lastName);
  if (email) {
    const [user] = email.split("@");
    if (user) personalFrags.push(user);
  }

  let score: PasswordScore = 0;
  let pts = 0;

  // Length points
  const len = password.length;
  if (len >= 8) pts += 1;
  if (len >= 12) pts += 1;
  if (len >= 16) pts += 1;

  // Variety points
  const variety = [
    hasLower(password),
    hasUpper(password),
    hasDigit(password),
    hasSymbol(password),
  ].filter(Boolean).length;
  if (variety >= 2) pts += 1;
  if (variety >= 3) pts += 1;
  if (variety === 4) pts += 1;

  // Penalty: contains personal info
  const personalHit = containsPersonalInfo(password, personalFrags);
  if (personalHit) pts -= 2;

  // Clamp & map to score 0–4
  pts = Math.max(0, Math.min(6, pts));
  if (pts <= 1) score = 0;
  else if (pts === 2) score = 1;
  else if (pts === 3) score = 2;
  else if (pts === 4 || pts === 5) score = 3;
  else score = 4; // pts===6

  // Suggestions
  // Suggestions
  if (len < 8) {
    suggestions.push("Use at least 8 characters.");
  } else if (len < 12) {
    suggestions.push("Stronger with 12+ characters.");
  }
  if (variety < 3) suggestions.push("Mix UPPER, lower, numbers, and symbols.");
  if (personalHit) suggestions.push("Avoid names or email in your password.");
  if (!hasSymbol(password)) suggestions.push("Add a symbol (e.g., ! @ # $ %).");

  const labels: Record<PasswordScore, string> = {
    0: "Very Weak",
    1: "Weak",
    2: "Fair",
    3: "Strong",
    4: "Very Strong",
  };

  return { score, label: labels[score], suggestions };
}
