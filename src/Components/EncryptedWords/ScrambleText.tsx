export const scrambleText = async (
  targetText: string,
  onUpdate: (scrambled: string) => void,
  interval = 90
): Promise<void> => {
  const randomChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz012346789!@#$&*+-<>"
    return chars[Math.floor(Math.random() * chars.length)]
  }

  return new Promise(resolve => {
    let frame = 0
    const maxFrames = targetText.length + 5

    const scramble = setInterval(() => {
      frame++
      const scrambled = targetText
        .split("")
        .map((char, index) => (frame > index ? char : randomChar()))
        .join("")
      onUpdate(scrambled)
      if (frame >= maxFrames) {
        clearInterval(scramble)
        resolve()
      }
    }, interval)
  })
}