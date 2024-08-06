import JSConfetti from 'js-confetti';

export function useConfettis() {
    const jsConfetti = new JSConfetti();
    const confettisActive = ref(false);

    async function launchConfettis(emoji?: string) {
        let confettis;
        if (typeof emoji === 'string') {
            confettis = {
                emojis: [emoji],
                emojiSize: 75,
                confettiNumber: 75
            };
        } else {
            confettis = {
                confettiRadius: 7,
                confettiNumber: 75
            };
        }
        if (!confettisActive.value) {
            confettisActive.value = true;
            jsConfetti.addConfetti(confettis).then(() => {
                jsConfetti.clearCanvas();
                confettisActive.value = false;
            });
        }
    }

    return { launchConfettis };
}
