import JSConfetti from 'js-confetti';

export function useConfettis() {
    const jsConfetti = new JSConfetti();
    const confettisCounter = ref(0);

    async function launchConfettis(emoji?: string) {
        let confettis;
        if (typeof emoji === 'string') {
            confettis = {
                emojis: [emoji],
                emojiSize: 50,
                confettiNumber: 75
            };
        } else {
            confettis = {
                confettiRadius: 7,
                confettiNumber: 75
            };
        }
        if (confettisCounter.value < 3) {
            confettisCounter.value++;
            jsConfetti.addConfetti(confettis).then(() => {
                confettisCounter.value--;
            });
        } else if (confettisCounter.value === 0) {
            jsConfetti.clearCanvas();
        }
    }

    return { launchConfettis };
}
