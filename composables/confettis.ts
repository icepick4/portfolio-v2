import JSConfetti from 'js-confetti';

export function useConfettis() {
    const jsConfetti = new JSConfetti();
    const confettisActive = ref(false);

    async function launchConfettis() {
        if (!confettisActive.value) {
            confettisActive.value = true;
            jsConfetti
                .addConfetti({
                    confettiRadius: 7,
                    confettiNumber: 75
                })
                .then(() => {
                    jsConfetti.clearCanvas();
                    confettisActive.value = false;
                });
        }
    }

    return { launchConfettis };
}
