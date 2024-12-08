(() => {
  const holes = document.getElementsByClassName('hole');

  const getStat = (id) => parseInt(document.getElementById(id).textContent);

  const setStat = (id, intValue) => {
    document.getElementById(id).textContent = intValue.toString();
  };

  const reset = () => {
    setStat('dead', 0);
    setStat('lost', 0);
  };

  const makeClickHandler = (id, maxCount, message) => () => {
    let count = getStat(id) + 1;
    if (count >= maxCount) {
      alert(message);
      reset();
    } else {
      setStat(id, count);
    }
  };

  const moleKilled = makeClickHandler('dead', 10, 'You win!');
  const missfire = makeClickHandler('lost', 5, 'You lose!');

  Array.from(holes).forEach(hole => {
    hole.addEventListener('click', () => {
      if (hole.classList.contains('hole_has-mole')) {
        moleKilled();
      } else {
        missfire();
      }
    });
  });
})();