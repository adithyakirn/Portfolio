export const scrambleText = async (
  targetText: string,
  onUpdate: (scrambled: string) => void,
  interval = 0,
  scrambleOnly?: string[],
  fromText?: string
): Promise<void> => {
  const aVariants = ["अ", "அ", "అ", "ಅ", "অ", "અ", "ଅ", "അ", "ਅ", "ا"]
  const uVariants = ["उ", "உ", "ఉ", "ಉ", "উ", "ઉ", "ଉ", "ഉ", "ਉ", "اُ"];
  const eVariants = ["ए", "எ", "ఎ", "ఎ", "এ", "એ", "ଏ", "എ", "ਏ", "ے"];

  const randomCharFor = (char: string) => {
    const base = char
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (aVariants.includes("अ") && base === "a") return aVariants[Math.floor(Math.random() * aVariants.length)];
    if (uVariants.includes("उ") && base === "u") return uVariants[Math.floor(Math.random() * uVariants.length)];
    if (eVariants.includes("ए") && base === "e") return eVariants[Math.floor(Math.random() * eVariants.length)];
    return char;
  };

  const finalChars = targetText.split("")
  let currentText = fromText ? fromText.split("") : [...finalChars]

  for (let i = 0; i < finalChars.length; i++) {
    if (
      scrambleOnly &&
      !scrambleOnly.includes(
        finalChars[i]
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
    ) {
      continue;
    }

    for (let j = 0; j < 10; j++) {
      currentText[i] = randomCharFor(finalChars[i]);
      onUpdate(currentText.join(""));
      await new Promise(res => setTimeout(res, interval));
    }

    currentText[i] = finalChars[i];
    onUpdate(currentText.join(""));
  }
}